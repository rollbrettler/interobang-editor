var app = app || {};

var metaData = jQuery('.editor-meta');

window.templateData = jQuery.parseJSON(Base64.decode(metaData.val())) || {rows:{}};



app.Editor = new app.EditorView({
    data: {rows:{}}
});

app.Editor.collection.add({});
jQuery('#editorApp').append(app.Editor.render());

//console.log(app.Editor.collection);