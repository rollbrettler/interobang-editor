// js/collections/columns.js

var app = app || {};

// Columns Collection
// ---------------

app.ElementsCollection = Backbone.Collection.extend({

    // Reference to this collection's model.
    model: app.ElementModel,
    
    comparator: function (model) {
        return model.get('ordinal');
    }
    
});