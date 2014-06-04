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

        jQuery(this.el).html(tmpl(this.type));

        return this;
    },
    
    changeType: function () {
        this.parent.trigger("changeType", this.type.name);
        this.parent.trigger("changeType:" + this.type.name);
    }
    
});