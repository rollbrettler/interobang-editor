// js/models/row.js

var app = app || {};

// Row Model
// ----------
// 

app.RowModel = Backbone.Model.extend({
    defaults: {
        "id": "",
        "visible": true,
        "bg_color": "",
        "bg_image": "",
        "fullsize": false,
        "margin": {
            "bottom": 0,
            "top": 0
        },
        "padding": {
            "bottom": 0,
            "left": 0,
            "right": 0,
            "top": 0
        },
        "columns": false
    },
    
    url: ""
});