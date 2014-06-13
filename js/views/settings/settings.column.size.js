app.SizeView = Backbone.View.extend({

    tagName: "div",
    className: "row editor-sizes",
    template: jQuery("#sizeTemplate").html(),

    events: {
        "change [data-slider]": "changeSize"
    },

    initialize: function (options) {
        this.size = options.size
        this.parent = options.parent
    },

    render: function () {

        //console.log(this.type)

        var tmpl = _.template(this.template)

        jQuery(this.el).html(tmpl({
            size: this.size,
            value: this.model.get(this.size.slug)
        }))
        
        //_.bindAll(this, 'changeSize')
        
        this.slider = this.$('[data-slider]')
        this.sliderValue = this.slider.attr("data-slider")
        this.sliderHandle = this.slider.find(".range-slider-handle");
        
        this.sliderHandle.html(this.sliderValue);
        
        return this
    },

    changeSize: function (event, test) {
        
        if(this.sliderValue != jQuery(event.currentTarget).attr("data-slider")){

            this.sliderValue = jQuery(event.currentTarget).attr("data-slider")
            
            this.parent.trigger("changeSize", this.size.slug, this.sliderValue)
            
            this.sliderHandle.empty()
            this.sliderHandle.html(this.sliderValue)
        }
        
    }
})