// js/view/settings/settings.text.js

var app = app || {};

// Editor Draggable Module
// ----------
// 

_.extend(app.SettingsViewModules.events, {

});

app.SettingsViewModules.functions.push(["addText"]);

app.SettingsViewModules.text = {
    
    addText: function () {
        
        type = _.findWhere(app.Settings.types, {
            'name': 'text'
        });
        
        this.types.push(type);
        
        this.listenTo(this, 'changeType:text', this.renderText);
        
    },
    
    renderText: function() {
        
    }
}