var app = app || {};

var metaData = jQuery('.editor-meta');

window.templateData = jQuery.parseJSON(Base64.decode(metaData.val())) || {};



app.Editor = new app.EditorView({
    data: window.templateData.rows
});


jQuery('#editorApp').append(app.Editor.render());