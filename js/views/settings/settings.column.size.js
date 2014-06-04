app.SizeView = Backbone.View.extend({
    tagName: "div",
    className: "row",
    template: jQuery("#sizeTemplate").html(),

    events: {
        "click .editor-content-chooser": "changeType"
    },
    
    initialize: function(options) {
        
    },
    
    render: function () {
        
        //console.log(this.type);
        
        var tmpl = _.template(this.template);
        
        jQuery(this.el).html(tmpl(this.type));
        
        return this;
    },
    
    changeType: function () {
        this.parent.trigger("changeType:" + this.type.name);
    }
});