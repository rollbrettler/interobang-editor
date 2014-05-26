// js/models/column.js

var app = app || {};

// Column Model
// ----------
// 

app.ColumnModel = Backbone.Model.extend({
    defaults: {
        type: 'text',
        value: '',
        sizeSmall: '4',
        sizeMedium: '4',
        sizeLarge: '4'
    },
    
    initialize: function () {
        if(!this.get('id')) {
            this.set('id', guid());
        }
    }
});