// js/view/row.js

var app = app || {};

// Row View
// ----------
// 

app.SettingsViewModules = {};
app.SettingsViewModules.events = {};
app.SettingsViewModules.functions = [];

app.SettingsView = app.modulesView.extend({
    el: jQuery('.editor-settings'),
    template: jQuery("#settingsTemplate").html(),
    initialize: function (attr) {
        console.log(this.model)
    },

    events: {
        'click .save-settings': 'saveSettings'
    },
    
    render: function(){
        
        console.log(this.model);
        
        var tmpl = _.template(this.template);
        //templateData.id = this.model.cid;
        
        jQuery(this.el).html(tmpl(this.model.toJSON()));
        
        return this;
    },

    renderColumnSettings: function () {
        var tmpl = _.template(this.template);
        console.log("settings model: ", this.collection.toJSON());
        jQuery(this.el).html(tmpl(this.model.toJSON()));
    },

    saveSettings: function () {
        
        app.EditorContentView.trigger("save-content");
        
        this.remove();
    },
    
    remove: function() {
        this.stopListening();
        
        this.undelegateEvents();
        
        this.$el.empty();
        
        return this;
    }
});