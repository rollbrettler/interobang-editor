var app = app || {};

var metaData = jQuery('.editor-meta');

window.templateData = jQuery.parseJSON(Base64.decode(metaData.val())) || {};

//console.log(window.templateData);

Backbone.sync = function(method, model, options) {
    console.log(method, model, options);
};

app.Editor = new app.EditorView({});

//app.Editor.collection.add({});
app.Editor.render();

//console.log(app.Editor.collection);