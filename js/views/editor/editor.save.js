// js/view/editor/editor.save.js

var app = app || {};

// Editor Wordpress specific save module
// ----------
// 

_.extend(app.EditorViewModules.events, {
    
});

app.EditorViewModules.functions.push("saveInit");

app.EditorViewModules.save = {

    /**
    * add eventlistenders on init    
    */
    saveInit: function() {
        // save collection to hidden input field
        
        this.listenTo(this.collection, "all", this.saveCollection);
        
        this.on("save-content", this.saveCollection);
        
        this.metaData = jQuery('#editor-meta');
    },
    
    /**
    * save collection to hidden input field    
    */
    saveCollection: function(e) {
        this.metaData.val(
            Base64.encode(
                JSON.stringify(
                    this.collection.toJSON()
                )
            )
        );
        //console.log(this.collection.toJSON());
    }

}