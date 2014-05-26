var app = app || {};

app.modulesView = Backbone.View.extend({


    setModulesObject: function (modulesObject) {
        this.modulesObject = modulesObject;
        
        // iterate trough object and add functions
        this.loadModules();
        
        // append modules events
        this.appendEvents();
        
        // executes the module initit functions
        this.executeModule();
    },

    loadModules: function () {
        
        var view = this;
        
        //only load modules, without events object and functions array
        _.each(_.omit(this.modulesObject, ["events", "functions"]), function (_object) {
            _.extend(view, _object);
        });

    },

    executeModule: function () {
        
        var view = this;
        
        _.each(this.modulesObject.functions, function (_function) {
            view[_function]();
        });
    },

    appendEvents: function () {
        _.extend(this.events, this.modulesObject.events);
        
        this.delegateEvents();
    }
});