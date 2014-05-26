var app = app || {};

//console.log(window.templateData);

Backbone.sync = function(method, model, options) {
    console.log(method, model, options);
};

app.Editor = new app.EditorView();

//app.Editor.collection.add({});
app.Editor.render();/**/

//console.log(app.Editor.collection);