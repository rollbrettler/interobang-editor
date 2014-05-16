// js/collections/columns.js

var app = app || {};

// Columns Collection
// ---------------

app.ColumnsCollection = Backbone.Collection.extend({

    // Reference to this collection's model.
    model: app.ColumnModel,
    comparator: function (model) {
        return model.get('ordinal');
    }

});