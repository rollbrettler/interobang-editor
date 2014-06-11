app.tinymceReady = function() {
    // this is executed from within an iframe as an event proxy
    app.EditorContentView.trigger('tinymceReady');
}