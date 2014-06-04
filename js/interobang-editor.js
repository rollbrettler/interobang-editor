var app = app || {};

//console.log(window.templateData);

Backbone.sync = function(method, model, options) {
    console.log(method, model, options);
};

/* Router version
app.Editor = new app.EditorRouter();
Backbone.history.start();
*/

app.EditorContentView = new app.EditorView();
app.EditorContentView.render();

jQuery(document).foundation();

//app.Editor.collection.add({});
//app.Editor.render();/**/

//console.log(app.Editor.collection);