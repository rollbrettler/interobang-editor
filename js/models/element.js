// js/models/column.js

var app = app || {};

// Column Model
// ----------
// 

app.ElementModel = Backbone.Model.extend({
    defaults: {
        type: 'text',
        value: ''
    },

    initialize: function () {
        if (!this.get('id')) {
            this.set('id', guid());
        }
    }
});