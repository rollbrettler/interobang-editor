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

        // add modules
        this.setModulesObject(app.SettingsViewModules);

    },

    types: [],

    typesViews: [],

    events: {
        'click .save-settings': 'saveSettings'
    },

    render: function () {

        //console.log(this.model);
        
        // render main template
        var tmpl = _.template(this.template);
        templateData = this.model.toJSON();

        templateData.types = this.types;

        jQuery(this.el).html(tmpl(templateData));
        
        
        // render editor type chooser
        var editorChooser = this.$el.find(".editor-chooser");

        var that = this;

        if (this.types.length > 1) {
            _.each(this.types, function (type) {

                var count = that.typesViews.push(new app.ChooserView({
                    type: type,
                    parent: that
                }));

                editorChooser.append(that.typesViews[count - 1].render().el);
                
            });
        }
        
        this.on("changeType", this.setType);
        
        // render size chooser
        
        return this;
    },

    /*
    renderColumnSettings: function () {
        var tmpl = _.template(this.template);

        console.log("settings model: ", this.collection.toJSON());

        jQuery(this.el).html(tmpl(this.model.toJSON()));
    },*/

    saveSettings: function () {

        app.EditorContentView.trigger("save-content");

        //console.log(this.typesViews);

        _.each(this.typesViews, function (chooserView) {
            chooserView.remove()
        })

        this.remove();
    },
    
    setType: function (type) {
        this.model.set("type", type);
    }
});