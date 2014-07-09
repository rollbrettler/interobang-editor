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
        //"click .edit-content": "editColumn",
        //"click .editor-delete": "deleteColumn",
        "click .editor-add-element": "addElement"
    },
    
    subViews: [],

    template: _.template($('#columnTemplate').html()),

    initialize: function (options) {
        
        // set parrent row reference
        this.row = options.row;
        
        this.setModulesObject(app.ColumnViewModules);
        
        // check if it is a column with empty elements and add template elements
        if (!this.model.get('elements')) {

            var elementsArray = new Array();

            elementsArray.push(
                new app.ElementModel().toJSON()
            );

            this.model.set("elements", elementsArray);
            
        }
        
        // Set elements as collection of this column
        this.collection = new app.ElementsCollection(
            this.model.get("elements")
        );
        
        // listen on adding new elements to render them
        this.listenTo(this.collection, "add", this.renderElement);
        // listen on removing elements
        this.listenTo(this.collection, "change", this.changeElement);
        this.listenTo(this.collection, "remove", this.removeElement);
        
        // listen on model actions
        this.model.on('change', this.render, this);
        this.model.on('reset', this.render, this);
        this.model.on('add', this.render, this);
        
        // render the column
        this.render();
    },
    
    render: function () {
        
        // render template
        this.$el.empty();
        this.$el.html(this.template());
        
        // remove all css classes to generate them new
        this.$el.removeClass();
        this.$el.addClass(this.getClassName());
        
        var that = this;
        
        // render column elements
        _.each(this.collection.models, function(element){
            //console.log(element)
            that.renderElement(element);
        })
        
        // trigger render event
        this.trigger("render");
        
        return this;
    },

    renderElement: function (element) {
        
        // render single element view
        var elementView = new app.ColumnElementView({
            model: element,
            column: this.model
        });
        
        // append that view to the view array
        var elementCount = this.subViews.push(elementView);
        
        // render the element
        var $element = this.subViews[elementCount - 1].render().el;
        
        // debug
        // console.log("renderElement");
        
        // append the rendered element
        this.$el.prepend($element);
        
        //jQuery(document).foundation('reflow');
    },
    
    removeElement: function(model) {
        
        // debug
        console.log("removeElement: ", model);
        
        this.collection.remove(model);
        
        this.model.set('elements', this.collection.toJSON());
        
        this.render();
        
    },

    deleteColumn: function (e) {

        e.preventDefault();

        // destroy the model and remove the view
        this.model.destroy();
        this.remove();
        
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
        
        // add empty element to collection
        this.collection.add({});
        
        // set back ellements json to the column model
        this.model.set('elements', this.collection.toJSON());
        
    },
    
    changeElement: function(e) {
        this.model.set('columns', this.collection.toJSON());
    }

});