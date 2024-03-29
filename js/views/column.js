// js/view/column.js

var app = app || {};

// draggable column View module
// ----------
// 

app.ColumnViewModules = {};
app.ColumnViewModules.events = {};
app.ColumnViewModules.functions = [];

app.ColumnView = app.modulesView.extend({

    tagName: "div",
    getClassName: function () {
        var className = app.Settings.css_selector.main;
        
        var that = this;
        
        _.each(app.Settings.css_selector.sizes, function(size) {
            if(size.css) {
                className += " " + size.css + that.model.get(size.slug)
            }
        });

        return className;
    },

    events: {
        "click .edit-content": "editColumn",
        "click .editor-delete": "deleteColumn"
    },

    template: _.template($('#columnTemplate').html()),

    initialize: function (options) {

        this.row = options.row;
        
        this.setModulesObject(app.ColumnViewModules);

        //this.listenTo(this.model, 'change', this.render);

        this.model.on('change', this.render, this);
        this.model.on('reset', this.render, this);
        //this.model.on('remove', this.render, this);
        this.model.on('add', this.render, this);

        this.render();
    },

    render: function () {
        
        // check if type of the model is a string
        if (typeof this.model.get('type') === "string") {
            // get template settings by type
            var type = _.findWhere(app.Settings.types, {
                'name': this.model.get('type')
            });
            
            // if type is undefined, then set type settings from empty
            if (typeof type === "undefined") {
                type = _.findWhere(app.Settings.types, {
                    'name': 'empty'
                });
            }
        }
        
        // set template data
        var templateData = this.model.toJSON();

        templateData.type = type;
        templateData.id = this.model.cid;

        // render template
        this.$el.html(this.template(templateData));
        
        this.$el.removeClass();
        this.$el.addClass(this.getClassName());
        
        // trigger render event
        this.trigger("render");
        
        return this;
    },

    deleteColumn: function (e) {

        e.preventDefault();

        // destroy the model and remove the view
        this.model.destroy();
        this.remove();
        
    },

    editColumn: function (e) {

        e.preventDefault();
        
        // trigger event to hide content div
        app.EditorContentView.trigger("edit-content");
        
        // create settings view
        this.editView = new app.SettingsView({
            model: this.model,
            parent: this
        });
        
        // render it and append it to settings div
        jQuery('.editor-settings').html(this.editView.renderColumnSettings().el);
        
        // trigger edit view to render settings
        this.editView.trigger('changeType:' + this.model.get('type'));
        
        // listen on save
        this.on("save-content", this.saveColumnSettings, this);
        
        jQuery(document).foundation();
        
    },

    saveColumnSettings: function () {
        
        // get the settings from edit view model and save it
        //this.model.set(this.editView.model.toJSON());
        
        // remove the edit view
        this.editView.remove();
        
        // debug
        // console.log(this.model.attributes);
    }

});