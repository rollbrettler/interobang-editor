// js/view/row.js

var app = app || {};

// Row View
// ----------
// 

app.SettingsViewModules = {};
app.SettingsViewModules.events = {};
app.SettingsViewModules.functions = [];

app.SettingsView = app.modulesView.extend({
    //el: jQuery('.editor-settings'),
    template: jQuery("#settingsTemplate").html(),
    initialize: function (options) {

        //this. = options.;

        this.types = [];
        
        this.parent = options.parent;
        
        // add modules
        this.setModulesObject(app.SettingsViewModules);
        
    },

    types: [],

    subViews: [],
    
    settingsContentView: {},
    
    events: {
        'click .save-settings': 'saveSettings'
    },

    renderColumnSettings: function () {

        //console.log(this.model);

        // render main template
        var tmpl = _.template(this.template);
        templateData = this.model.toJSON();

        templateData.types = this.types;

        jQuery(this.el).html(tmpl(templateData));

        this.settingsContent = this.$el.find('#content');
        this.settingsElement = this.$el.find('#settings');
        
        // render editor type chooser
        this.editorChooser = this.$el.find(".editor-chooser");

        var that = this;

        if (this.types.length > 1) {
            _.each(this.types, function (type) {

                var count = that.subViews.push(new app.ChooserView({
                    type: type,
                    parent: that
                }));

                that.editorChooser.append(that.subViews[count - 1].render().el);

            });
        }

        this.on("changeType", this.setType);

        // render size chooser
        _.each(app.Settings.css_selector.sizes, function (size) {
            if (size.css) {

                var sizeView = new app.SizeView({
                    size: size,
                    model: that.model,
                    parent: that
                });
                
                that.settingsElement.append(sizeView.render().el);
                
                that.subViews.push(sizeView);
            }
        });
        
        this.on("changeSize", this.setSize, this);

        return this;
    },

    saveSettings: function () {

        app.EditorContentView.trigger("save-content");
        
        this.trigger("save-content:" + this.model.get("type"));
        
        this.parent.trigger("save-content");
        
        //console.log(this.typesViews);
        
        // remove all subviews
        _.each(this.subViews, function (subView) {
            subView.remove()
        })

        this.remove();
    },

    setType: function (type) {
        
        this.settingsContent.empty();
        
        _.each(this.editorChooser.find(".editor-content-chooser"), function(chooser) {
            jQuery(chooser).removeClass("editor-content-chooser-active");
        });
        
        this.model.set("type", type);
    },
    
    setSize: function(slug, size) {
        
        this.model.set(slug, size);
        
    }
});