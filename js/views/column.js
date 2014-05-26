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
        
        this.setModulesObject(app.ColumnViewModules);
        
        this.listenTo(this.model, 'change', this.render);
        
        this.render();
    },

    render: function () {
        
        if (typeof this.model.get('type') === "string") {
            var type = _.findWhere(ajax_editor.some_value.types, {
                'name': this.model.get('type')
            });
        }
        
        var templateData = this.model.toJSON();
        
        templateData.type = type;
        templateData.id = this.model.cid;
        
        this.$el.html( this.template( templateData ) );
        
        return this;
    },
    
    deleteColumn: function(e) {
        
        e.preventDefault();
        
        this.model.destroy();
        
        this.remove();
        
    }
});
