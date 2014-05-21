// js/collections/rows.js

var app = app || {};

// Rows Collection
// ---------------

app.RowsCollection = Backbone.Collection.extend({

    // Reference to this collection's model.
    model: app.RowModel,
    
    comparator: function (model) {
        return model.get('ordinal');
    }
    
});
