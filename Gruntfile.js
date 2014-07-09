module.exports = function (grunt) {
    "use strict";
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                includePaths: ['bower_components/foundation/scss', 'bower_components/font-awesome/scss', 'scss/components']
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'css/editor.css': 'scss/backend.scss',
                    //'css/app.css': 'scss/app.scss'
                }
            }
        },
        copy: {
            fonts: {
                expand: true,
                cwd: 'bower_components/font-awesome/fonts/',
                src: '**',
                dest: 'fonts/',
                flatten: true,
                filter: 'isFile',
            }
        },
        po2mo: {
            files: {
                src: 'modules/editor/languages/*.po',
                expand: true
            },
        },

        uglify: {
            build: {
                files: {
                    'js/interobang-editor.min.js': [
                        // dependencies -->
                        'bower_components/jquery/dist/jquery.js',
                        'bower_components/jquery-ui/ui/jquery-ui.js',
                        'bower_components/underscore/underscore.js',
                        'bower_components/backbone/backbone.js',
                        'bower_components/foundation/js/vendor/modernizr.js',
                        'bower_components/foundation/js/foundation.js',

                        // Data -->
                        'js/helpers/base64.js',

                        // Helper -->
                        'js/helpers/guid.js',
                        'js/helpers/modules.js',
                        'js/helpers/tinymce.ready.js',

                        // Columns -->
                        'js/models/column.js',
                        'js/collections/columns.js',
                        'js/views/column.js',
                        'js/views/column/column.draggable.js',

                        // Row -->
                        'js/models/row.js',
                        'js/collections/rows.js',
                        'js/views/row.js',
                        'js/views/row/row.draggable.js',

                        // Settings -->
                        'js/views/settings.js',
                        'js/views/settings/settings.type.chooser.js',
                        'js/views/settings/settings.column.size.js',
                        // Setting types -->
                        'js/views/settings/settings.text.js',
                        'js/views/settings/settings.video.js',

                        // router -->
                        'js/routes/editor.js',

                        // main script -->
                        'js/views/editor.js',
                        'js/views/editor/editor.get.data.js',
                        'js/views/editor/editor.save.js',
                        'js/views/editor/editor.draggable.js',
                        'js/interobang-editor.js'
                    ]
                }
            }
        },

        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },

            sass: {
                files: 'scss/**/*.scss',
                tasks: ['sass']
            }
        }
    });

    grunt.registerTask('build', ['sass', 'copy:fonts']);
    grunt.registerTask('default', ['build']);
}