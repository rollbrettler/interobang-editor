// js/view/editor.js

var app = app || {};

// Editor Main View
// ----------
// 

app.EditorView = Backbone.View.extend({
    el: jQuery("#editorApp"),
    initialize: function (attr) {

        this.collection = new app.RowsCollection(attr.data);


        this.editorContent = this.$el.find('.editor-content');
        this.editorSettings = this.$el.find('.editor-settings');

    },

    events: {

    },

    render: function () {
        
        var that = this;
        
        _.each(this.collection.models, function (row) {
            that.renderRow(row);
        });
    },

    renderRow: function (row) {
        
        var rowView = new app.RowView({
            model: row
        });

        var $row = rowView.render().el;

        if (this.$el.find('.editor-add-row').length) {
            this.$el.find('.editor-add-row').before($row);
        } else {
            this.editorContent.append($row);
        }
    },

    renderColumnSettings: function (event, model) {

        this.editorContent.hide();

        var settingsView = new SettingsView({
            model: model
        });

        console.log(this.editorSettings);

        settingsView.renderColumnSettings();

        this.editorSettings.show();

        event.preventDefault();
    },
    saveSettings: function (event, model) {

        console.log(this.collection.toJSON());
        this.collection.remove(model);
        console.log(this.collection.toJSON());
        this.showContent();

    }
});