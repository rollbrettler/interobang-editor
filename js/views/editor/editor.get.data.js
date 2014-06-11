// js/view/editor/editor.get.data.js

var app = app || {};

// Editor Wordpress specific get module
// ----------
// 

_.extend(app.EditorViewModules.events, {
    
});

app.EditorViewModules.functions.push("getInit");

app.EditorViewModules.get = {

    /**
    * add eventlistenders on init
    */
    getInit: function() {
        // get Collection data and set it
        this.metaData = jQuery('#editor-meta');
        this.getCollection();
        
        this.collection = new app.RowsCollection(app.Data || {});
        
    },
    
    /**
    * get collection from hidden input field    
    */
    getCollection: function() {
        if(this.metaData.val().length) {
            app.Data = jQuery.parseJSON(
                Base64.decode(
                    this.metaData.val()
                )
            );
        }
    },

}