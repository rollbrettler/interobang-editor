var app = app || {};

//console.log(window.templateData);

Backbone.sync = function(method, model, options) {
    console.log(method, model, options);
};

/* Router version
app.Editor = new app.EditorRouter();
Backbone.history.start();
*/

jQuery(document).foundation();

// listen on DOM changes to reinit foundation maybe ne to be a nother solution
// #Todo
$(document).bind('DOMSubtreeModified', function () {
    jQuery(document).foundation('reflow');
});

app.EditorContentView = new app.EditorView();
app.EditorContentView.render();

//app.Editor.collection.add({});
//app.Editor.render();/**/

//console.log(app.Editor.collection);