var app = app || {};

var metaData = jQuery('.editor-meta');

window.templateData = jQuery.parseJSON(Base64.decode(metaData.val())) || {};

//console.log(window.templateData);

Backbone.sync = function(method, model, options) {
    console.log(method, model, options);
};

app.Editor = new app.EditorView({});

//app.Editor.collection.add({});
app.Editor.render();/**/

//console.log(app.Editor.collection);

/*
app.bottstrap = []

app.bottstrap.push("test");
app.bottstrap.push("test2");

var Pannel = function (options) {

    // put all of Panel's initialization code here
    //console.log('Pannel initialized');
    this.bootstrap = app.bottstrap;
    this.addEvents = [];

    Backbone.View.apply(this, [options]);
};

_.extend(Pannel.prototype, Backbone.View.prototype, {

    // put all of Panel's methods here. For example:
    sayHi: function () {
        console.log('hello from Pannel', this.bootstrap);
    }
});

Pannel.extend = Backbone.View.extend;

// other classes inherit from Panel like this:
var PannelAdvanced = Pannel.extend({
    
    initialize: function (options) {
        console.log('PannelAdvanced initialized');
        console.log(this.bootstrap);
    }
});

var pannelAdvanced = new PannelAdvanced(); //Log: Pannel initialized, PannelAdvanced initialized, bar
pannelAdvanced.sayHi(); // Log: hello from Pannel*/