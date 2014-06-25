// Seperate column content in elemnts
// with this it is possible to add more than 1 content field in each column
// mor complex layouts are possible
// js/view/column/column.elements.js

var app = app || {};

// column element v iew module
// ----------
// 

app.ColumnElementViewModules = {};
app.ColumnElementViewModules.events = {};
app.ColumnElementViewModules.functions = [];

app.ColumnElementView = app.modulesView.extend({

    tagName: "div",
    
    className: "editor-inner-column text-center",

    events: {
        "click .edit-content": "editElement",
        "click .editor-delete": "deleteElement"
    },

    template: _.template($('#columnElementTemplate').html()),

    initialize: function (options) {

        this.column = options.column;
        
        //console.log(this.model, options.column)
        
        this.setModulesObject(app.ColumnElementViewModules);

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
        
        // set some more template data
        templateData.type = type;
        templateData.id = this.model.cid;
        
        // render template
        this.$el.html(this.template(templateData));
        
        // trigger render event
        this.trigger("render");
        
        return this;
    },

    deleteElement: function (e) {

        e.preventDefault();

        console.log("delete element");
        
        // destroy the model and remove the view
        this.model.destroy();
        this.remove();
        
    },

    editElement: function (e) {

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

    saveElementSettings: function () {
        
        // get the settings from edit view model and save it
        //this.model.set(this.editView.model.toJSON());
        
        // remove the edit view
        this.editView.remove();
        
        // debug
        // console.log(this.model.attributes);
    }

});