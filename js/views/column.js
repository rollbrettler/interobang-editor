// js/view/column.js

var app = app || {};

// Column View
// ----------
// 
app.ColumnView = Backbone.View.extend({
    tagName: "div",
    className: function () {
        var className = "columns";
        
        className += " small-" + this.model.get('sizeSmall');
        className += " medium-" + this.model.get('sizeMedium');
        className += " large-" + this.model.get('sizeLarge');
        
        return className;
    },

    events: {
        "click .edit-content": "editColumn",
        "click .editor-delete": "deleteColumn",
        'drop': 'drop'
    },

    template: _.template( $('#columnTemplate').html() ),

    initialize: function () {
        
        this.listenTo(this.model, 'change', this.render);
        
        this.render();
    },

    render: function () {
        
        if (typeof this.model.get('type') === "string") {
            this.model.set('type', _.findWhere(ajax_editor.some_value.types, {
                'name': this.model.get('type')
            }));
        }
        
        this.$el.html( this.template( this.model.toJSON() ) );
        
        return this;
    },
    
    deleteColumn: function(e) {
        
        e.preventDefault();
        
        this.model.destroy();
        
    }
});
