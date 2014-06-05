app.SizeView = Backbone.View.extend({

    tagName: "div",
    className: "row editor-sizes",
    template: jQuery("#sizeTemplate").html(),

    events: {
        "click .editor-content-chooser": "changeSize"
    },

    initialize: function (options) {
        this.size = options.size;
    },

    render: function () {

        //console.log(this.type);

        var tmpl = _.template(this.template);

        jQuery(this.el).html(tmpl({
            selector: this.setCssSelector(),
            size: this.size
        }));

        return this;
    },

    setCssSelector: function () {
        var className = app.Settings.css_selector.main;

        var that = this;

        _.each(app.Settings.css_selector.sizes, function (size) {
            if (size.css) {
                className += " " + size.css + "1"
            }
        });

        return className;
    },

    changeSize: function (event, size, slug) {
        //console.log(event, size, slug);
        //this.model.set(slug, size);
    }
});