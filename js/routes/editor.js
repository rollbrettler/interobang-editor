//create instance of master view

app.EditorRouter = Backbone.Router.extend({
    
    routes: {
        "edit/:id": "EditorSettingsView",
        "*default": "EditorContentView"
    },
    
    initialize: function() {
        app.EditorContentView = new app.EditorView();
    },

    EditorContentView: function () {
        app.EditorContentView.render();
    },
    
    EditorSettingsView: function(id) {
        //app.EditorContentView.destroy();
        
        console.log(id, app.EditorContentView.data)
        
        var tet = _.findWhere(app.EditorContentView.data, {id: id} );
        
        console.log(id,tet);
    }
});