// js/view/settings/settings.text.js

var app = app || {};

// Editor Draggable Module
// ----------
// 

_.extend(app.SettingsViewModules.events, {

});

app.SettingsViewModules.functions.push(["addVideo"]);

app.SettingsViewModules.video = {

    addVideo: function () {

        type = {
            "name": "video",
            "icon_css": "fa fa-film"
        }

        this.types.push(type);
        
        this.listenTo(this, 'changeType:video', this.renderVideo);

    },
    
    renderVideo: function() {
        
    }
}