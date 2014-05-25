var app = app || {};

app.View = {};
app.ViewModules = {};

app.ViewModules.events = {};
app.ViewModules.functions = [];

_.extend(app.ViewModules.events, {
  "testevent": "testcallback"
});

app.ViewModules.functions.push("add");

app.ViewModules.object1 = {
  
  add: function(){
    console.log("add function");
  }
  
};

_.extend(app.ViewModules.events, {
  "testevent2": "testcallback2"
});

app.ViewModules.functions.push("add2");

app.ViewModules.object2 = {
  add2: function(){
    console.log("add 2 function");
  }
};

_.each(_.omit(app.ViewModules, ["events", "functions"]),function(_object){
  _.extend(app.View, _object);
});

_.each(app.ViewModules.functions, function(_function){
  app.View[_function]();
});

console.log(app.ViewModules.events)