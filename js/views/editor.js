// js/view/editor.js

var app = app || {};

// Editor Main View
// ----------
// 

app.EditorViewModules = {};
app.EditorViewModules.events = {};
app.EditorViewModules.functions = [];

app.EditorView = app.modulesView.extend({
    el: jQuery("#editorApp"),
    
    initialize: function (attr) {

        // add modules
        this.setModulesObject(app.EditorViewModules);
        
        //set some references for HTML elements
        this.editorRows = this.$('.editor-rows');
        this.editorAddRow = this.$('.editor-row-add');
        this.metaData = jQuery('#editor-meta');
        
        this.editorSettings = this.$('.editor-settings');
        
        // render the add row segment
        this.renderRowAdd();
        
        
        // get Collection data and set it
        this.getCollection();
        
        this.collection = new app.RowsCollection(this.data || {});
        
        this.listenTo(this.collection, "all", this.saveCollection);
        
        this.listenTo(this.collection, "add", this.renderRow);
        this.listenTo(this.collection, "remove", this.removeRow);
        
        this.i = 0;
        
    },

    events: {
        "click #add-row": "addRow"
    },

    render: function () {
        
        var that = this;
        
        this.editorRows.children().remove();
        
        this.collection.each(function (row) {
            //console.log(++that.i);
            that.renderRow(row);
        });
        
        return this;
    },

    renderRow: function (row) {
        //console.log("row: ",row);
        
        var rowView = new app.RowView({
            model: row
        });
        
        var $row = rowView.render().el;
        
        this.editorRows.append($row);
        
    },
    
    addRow: function(e) {
        e.preventDefault();
        this.collection.add({});
    },
    
    renderRowAdd: function(){
        var rowAddView = Backbone.View.extend({
            tagName: "div",
            className: "editor-row editor-add-row row",
            template: jQuery("#rowLastTemplate").html(),
            
            render: function () {
                
                var tmpl = _.template(this.template);
                
                jQuery(this.el).html(tmpl({}));
                
                return this;
            }
        });
        
        this.editorAddRow.html(new rowAddView().render().el);
    },
    
    removeRow: function(row) {
        row.destroy();
    },
    
    saveCollection: function(e) {
        this.metaData.val(
            Base64.encode(
                JSON.stringify(
                    this.collection.toJSON()
                )
            )
        );
        console.log(this.collection.toJSON());
    },
    
    getCollection: function() {
        if(this.metaData.val().length) {
            this.data = jQuery.parseJSON(
                Base64.decode(
                    this.metaData.val()
                )
            );
        }
    }
});