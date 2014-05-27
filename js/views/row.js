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
        
        templateData.id = this.model.cid;
        
        this.$el.html(this.template(templateData));
        
        this.columnElement = this.$('.column-container');

        _.each(this.collection.models, function (column) {
            that.renderColumn(column);
        });
        
        return this;
    },

    renderColumn: function (column) {
        
        // console.info("renderColumn",column);
        
        var columnView = new app.ColumnView({
            model: column
        });
        
        var $column = columnView.render().el;
        
        this.columnElement.append($column);
        
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
        
        this.model.destroy();
        
        this.remove();
    },
    
    changeColumn: function(e) {
        this.model.set('columns', this.collection.toJSON());
    }
});