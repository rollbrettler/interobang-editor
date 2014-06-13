// js/models/column.js

var app = app || {};

// Column Model
// ----------
// 

app.ColumnModel = Backbone.Model.extend({
    defaults: {
        xsmall: '12',
        small: '12',
        medium: '4',
        large: '4',
        xlarge: '4',
        elements: [
            {
                type: 'text',
                value: ''
            }
        ]
    },

    initialize: function () {
        if (!this.get('id')) {
            this.set('id', guid());
        }
    }
});