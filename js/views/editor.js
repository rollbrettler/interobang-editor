// js/view/editor.js

var app = app || {};

// Editor Main View
// ----------
// 

app.EditorView = Backbone.View.extend({
    el: jQuery("#editorApp"),
    initialize: function (attr) {

        this.data = attr.data;
        
        this.collection = new app.RowsCollection(attr.data || {});

        this.editorContent = this.$el.find('.editor-content');
        this.editorSettings = this.$el.find('.editor-settings');
        
        this.listenTo(this.collection, "all", this.saveCollection);
        
        //this.render();
    },

    events: {
        
    },

    render: function () {
        
        var that = this;
        
        this.editorContent.children().remove();
        
        _.each(this.collection.models, function (row) {
            console.log(row);
            that.renderRow(row);
        });
        
        return this;
    },

    renderRow: function (row) {
        
        var rowView = new app.RowView({
            model: row
        });
        
        var $row = rowView.render().el;
        /*
        if (this.$el.find('.editor-add-row').length) {
            this.$el.find('.editor-add-row').before($row);
        } else {
            this.editorContent.append($row);
        }*/
        
        this.el.append($row);
        
        if(typeof rowView.bind_drag === "function") {
            rowView.bind_drag();
        }
    },
    
    saveCollection: function() {
        this.render();
    }
});