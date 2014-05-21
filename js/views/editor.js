// js/view/editor.js

var app = app || {};

// Editor Main View
// ----------
// 

app.EditorView = Backbone.View.extend({
    el: jQuery("#editorApp"),
    initialize: function (attr) {

        this.data = attr.data;
        
        this.editorRows = this.$('.editor-rows');
        this.editorAddRow = this.$('.editor-row-add');
        
        this.editorSettings = this.$('.editor-settings');
        
        this.renderRowAdd();
        
        this.collection = new app.RowsCollection(attr.data || {});
        
        this.listenTo(this.collection, "all", this.saveCollection);
        
        this.listenTo(this.collection, "add", this.renderRow);
        this.listenTo(this.collection, "remove", this.removeRow);
        
        this.i = 0;
        
    },

    events: {
        "click #add-row": "addRow" 
    },

    render: function () {
        
        var that = this;
        
        this.editorRows.children().remove();
        
        this.collection.each(function (row) {
            console.log(++that.i);
            that.renderRow(row);
        });
        
        return this;
    },

    renderRow: function (row) {
        console.log("row: ",row);
        var rowView = new app.RowView({
            model: row
        });
        
        var $row = rowView.render().el;
        
        this.editorRows.append($row);
        
        if(typeof rowView.bind_drag === "function") {
            rowView.bind_drag();
        }
    },
    
    addRow: function() {
        this.collection.add({});
    },
    
    renderRowAdd: function(){
        var rowAddView = Backbone.View.extend({
            tagName: "div",
            className: "editor-row editor-add-row row",
            template: jQuery("#rowLastTemplate").html(),
            
            render: function () {
                
                var tmpl = _.template(this.template);
                
                jQuery(this.el).html(tmpl({}));
                
                return this;
            }
        });
        
        this.editorAddRow.html(new rowAddView().render().el);
    },
    
    removeRow: function(row) {
        row.destroy();
    },
    
    saveCollection: function(e) {
        console.log("save & render", this.collection.toJSON());
        
    }
});