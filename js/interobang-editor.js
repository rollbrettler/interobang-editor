var app = app || {};

var metaData = jQuery('.editor-meta');

window.templateData = jQuery.parseJSON(Base64.decode(metaData.val())) || {};



app.Editor = new app.EditorView({});


//app.Editor.collection.add({});

console.log(app.Editor.collection);