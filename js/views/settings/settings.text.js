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
        this.listenTo(this, 'save-content:text', this.saveText);

    },

    renderText: function () {
        
        if (typeof this.settingsContentView.remove === "function") {
            console.log(this.settingsContentView)
            this.settingsContentView.remove();
        }
        
        var text = this;
        
        this.settingsContentView = Backbone.View.extend({
            tagName: "div",
            className: "edit-text",
            template: _.template($('#textEditTemplate').html()),
            
            render: function() {
                
                this.$el.html(this.template({content: text.model.toJSON()}));
                
                return this;
            }
        });
        
        this.settingsContent.append(new this.settingsContentView().render().el);
        
    },
    
    saveText: function() {
        console.log(this.settingsContent.find("textarea"));
        this.model.set("value", this.settingsContent.find("textarea").val());
    }
}