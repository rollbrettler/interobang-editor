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
    className: function () {
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

    initialize: function () {

        this.setModulesObject(app.ColumnViewModules);

        //this.listenTo(this.model, 'change', this.render);

        this.model.on('change', this.render, this);
        this.model.on('remove', this.render, this);
        this.model.on('add', this.render, this);

        this.render();
    },

    render: function () {
        
        if (typeof this.model.get('type') === "string") {
            var type = _.findWhere(app.Settings.types, {
                'name': this.model.get('type')
            });
            
            if (typeof type === "undefined") {
                type = _.findWhere(app.Settings.types, {
                    'name': 'empty'
                });
            }
        }

        var templateData = this.model.toJSON();

        templateData.type = type;
        templateData.id = this.model.cid;

        this.$el.html(this.template(templateData));
        
        this.trigger("render");
        
        return this;
    },

    deleteColumn: function (e) {

        e.preventDefault();

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
        this.on("save-content", this.saveColumnSettings);
        
        jQuery(document).foundation();
        
    },

    saveColumnSettings: function () {
        
        this.model.set(this.editView.model.toJSON());
        
        // remove the edit view
        this.editView.remove();
        
        //console.log(this.editView);
    }

});