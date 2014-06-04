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
                    'js/app.min.js': [
                        'bower_components/modernizr/modernizr.js',
                        'bower_components/holderjs/holder.js',
                        //'bower_components/jquery/jquery.min.js',
                        //'bower_components/foundation/js/foundation.js',
                        //'bower_components/jQuery-Animate-Enhanced/scripts/src/jquery.animate-enhanced.js',
                        'bower_components/superslides/dist/jquery.superslides.js',
                        'js/base64.js',
                        'js/app.js'
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
    grunt.registerTask('editor', ['copy:editor']);
    grunt.registerTask('default', ['build']);
}