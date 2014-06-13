// js/view/row.js

var app = app || {};

// Row View
// ----------
// 

app.RowViewModules = {};
app.RowViewModules.events = {};
app.RowViewModules.functions = [];

app.RowView = app.modulesView.extend({
    tagName: "div",
    className: "editor-row row",
    template: _.template( $('#rowTemplate').html() ),

    events: {
        "click .remove-row": "deleteRow",
        "click .editor-add": "addColumn"
    },
    
    columnViews: [],

    initialize: function () {
        
        // add modules
        this.setModulesObject(app.RowViewModules);
        
        // check if it is a row with empty columns and add template columns
        if (!this.model.get('columns')) {

            var columnsArray = new Array();

            for (var i = 0; i < 3; i++) {
                columnsArray.push(
                    new app.ColumnModel().toJSON()
                );
            }

            this.model.set("columns", columnsArray);
            
        }
        
        this.collection = new app.ColumnsCollection(
            this.model.get("columns")
        );
        
        this.listenTo(this.collection, "remove", this.removeColumn);
        this.listenTo(this.collection, "change", this.changeColumn);
        this.listenTo(this.collection, "add", this.renderColumn);
        
    },

    render: function () {

        var that = this;
        
        var templateData = this.model.toJSON();
        
        //templateData.id = this.model.cid;
        // console.log(templateData);
        this.$el.html(this.template(templateData));
        
        this.columnElement = this.$('.column-container');

        _.each(this.collection.models, function (column) {
            that.renderColumn(column);
        });
        
        this.trigger("render");
        
        return this;
    },

    renderColumn: function (column) {
        
        // debug
        // console.info("renderColumn",column);
        
        // create single column view
        var columnView = new app.ColumnView({
            model: column,
            row: this
        });
        
        // append that view to the view array
        var columnCount = this.columnViews.push(columnView);
        
        // render the element
        var $column = this.columnViews[columnCount - 1].render().el;
        
        this.columnElement.append($column);
        
        // save collection back to row model 
        this.model.set('columns', this.collection.toJSON());
    },
    
    addColumn: function(e) {
        
        e.preventDefault();
        
        this.collection.add({});
        
        this.model.set('columns', this.collection.toJSON());
        
        this.render();
        
    },
    
    removeColumn: function(model) {
        
        this.collection.remove(model);
        
        this.model.set('columns', this.collection.toJSON());
        
        this.render();
        
    },

    deleteRow: function (e) {

        e.preventDefault();
        
        // remove all column views
        _.each(this.columnViews, function(columnView){
            columnView.remove();
        });
        
        this.model.destroy();
        
        this.remove();
    },
    
    changeColumn: function(e) {
        this.model.set('columns', this.collection.toJSON());
    }
});