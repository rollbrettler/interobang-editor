// js/view/settings/settings.text.js

var app = app || {}

// Editor Draggable Module
// ----------
// 

_.extend(app.SettingsViewModules.events, {

})

app.SettingsViewModules.functions.push(["addText"])

app.SettingsViewModules.text = {

    addText: function () {

        type = _.findWhere(app.Settings.types, {
            'name': 'text'
        })

        this.types.push(type)

        this.listenTo(this, 'changeType:text', this.renderText)
        this.listenTo(this, 'save-content:text', this.saveText)

    },

    renderText: function () {
        
        // 
        if (typeof this.settingsContentView.remove === "function") {
            console.log(this.settingsContentView)
            this.settingsContentView.remove()
        }
        
        var text = this
        
        // render text settings view
        this.settingsContentView = Backbone.View.extend({
            tagName: "div",
            className: "edit-text",
            template: _.template($('#textEditTemplate').html()),
            
            render: function() {
                
                this.$el.html(this.template({
                        content: text.model.toJSON(),
                        url: "http://localhost:8888/wordpress/wp-content/plugins/interobang-editor/templates/wp-editor.php"
                    })
                )
                
                return this
            }
        })
        
        this.settingsTextView = new this.settingsContentView()
        this.settingsContent.append(this.settingsTextView.render().el)
        
        // get iframe
        this.textIframe = document.getElementById('textEditIframe')
        
        // debug
        // console.log(document.getElementById('textEditIframe'))
        
        // add enentlisteners if tinymce is ready
        app.EditorContentView.on("tinymceReady",this.setIframeHeight, this)
        app.EditorContentView.on("tinymceReady",this.setIframeContent, this)
        
    },
    
    saveText: function() {
        
        // save data
        this.model.set("value", this.textIframe.contentWindow.tinymce.activeEditor.getContent())
        
        // destroy settings view and remove listener
        app.EditorContentView.off("tinymceReady")
        this.settingsTextView.remove()
        
        // remove iframe reference
        this.textIframe = ""
    },
    
    setIframeContent: function() {
        // set tinymce content in iframe
        this.textIframe.contentWindow.tinymce.activeEditor.setContent(this.model.get("value"))
    },
    
    setIframeHeight: function() {
        // the iframe height based on content height
        console.log(this.textIframe.contentWindow.document.body.scrollHeight)
        this.textIframe.height = this.textIframe.contentWindow.document.getElementById('wp-interobang_editor-wrap').offsetHeight
    }
}