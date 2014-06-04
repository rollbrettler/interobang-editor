// js/models/column.js

var app = app || {};

// Column Model
// ----------
// 

app.ColumnModel = Backbone.Model.extend({
    defaults: {
        type: 'text',
        value: '',
        xsmall: '4',
        small: '4',
        medium: '4',
        large: '4',
        xlarge: '4'
    },
    
    initialize: function () {
        if(!this.get('id')) {
            this.set('id', guid());
        }
    }
});