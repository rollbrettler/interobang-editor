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
        "click .editor-delete": "deleteColumn",
        "click .editor-add-element": "addElement"
    },
    
    subViews: [],

    template: _.template($('#columnTemplate').html()),

    initialize: function (options) {

        this.row = options.row;
        
        this.setModulesObject(app.ColumnViewModules);
        
        // check if it is a row with empty columns and add template columns
        if (!this.model.get('elements')) {

            var elementsArray = new Array();

            elementsArray.push(
                new app.ElementModel().toJSON()
            );

            this.model.set("elements", elementsArray);
            
        }
        
        this.collection = new app.ColumnsCollection(
            this.model.get("columns")
        );
        
        this.listenTo(this.collection, "add", this.renderElement);
        
        this.model.on('change', this.render, this);
        this.model.on('reset', this.render, this);
        this.model.on('add', this.render, this);

        this.render();
    },
    
    render: function () {
        
        // render template
        this.$el.empty();
        this.$el.html(this.template());
        
        this.$el.removeClass();
        this.$el.addClass(this.getClassName());
        
        var that = this;
        
        // render column elements
        _.each(this.model.get('elements'), function(element){
            //console.log(element)
            that.renderElement(element);
        })
        
        // trigger render event
        this.trigger("render");
        
        return this;
    },

    renderElement: function (element) {
        var elementView = new app.ColumnElementView({
            model: new app.ElementModel(element),
            column: this
        })
        
        this.$el.prepend(elementView.render().el);
        
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
    },
    
    addElement: function(event) {
        
        event.preventDefault();
        
        this.collection.add({});
        
        this.model.set('elements', this.collection.toJSON());
        
        this.render();
    }

});