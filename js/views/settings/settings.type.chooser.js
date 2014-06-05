app.ChooserView = Backbone.View.extend({
    tagName: "div",
    className: "columns small-2",
    template: jQuery("#typesTemplate").html(),

    events: {
        "click .editor-content-chooser": "changeType"
    },
    
    initialize: function(options) {
        this.type = options.type;
        this.parent = options.parent;
    },
    render: function () {
        
        //console.log(this.type);
        
        var tmpl = _.template(this.template);
        
        var active = "";
        
        //console.log(this.type.name,this.parent.model.get("type"));
        
        if(this.type.name === this.parent.model.get("type")) {
            active = "editor-content-chooser-active";
        }
        
        var templateData = {
            type: this.type,
            active: active
        };
        
        jQuery(this.el).html(tmpl(templateData));

        return this;
    },
    
    changeType: function () {
        this.parent.trigger("changeType", this.type.name);
        
        this.$el.find(".editor-content-chooser").addClass("editor-content-chooser-active");
        
        this.parent.trigger("changeType:" + this.type.name);
    }
    
});