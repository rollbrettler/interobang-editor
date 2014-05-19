// js/view/row.js

var app = app || {};

// Column View
// ----------
// 
app.RowView = Backbone.View.extend({
    tagName: "div",
    className: "editor-row row",
    template: jQuery("#rowTemplate").html(),

    events: {
        "click .remove-row": "deleteRow",
        "click .editor-add": "addColumn",
        'drop': 'drop'
    },

    initialize: function () {

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
        this.listenTo(this.collection, "add", this.renderColumn);
        
    },

    render: function () {

        var that = this;

        var tmpl = _.template(this.template);
        
        var templateData = this.model.toJSON();
        
        templateData.id = this.model.cid;
        
        console.log(this.model.cid);
        
        this.$el.html(tmpl(templateData));

        _.each(this.collection.models, function (column) {
            that.renderColumn(column);
        });
        
        return this;
    },

    renderColumn: function (column) {

        var columnView = new app.ColumnView({
            model: column
        });

        var $column = columnView.render().el;
        
        if(typeof columnView.bind_drag === "function") {
            columnView.bind_drag();
        }
        
        this.$el.append($column);

    },
    
    addColumn: function(e) {
        
        this.collection.add({});
        
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
    }
});