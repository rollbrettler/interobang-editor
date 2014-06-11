// js/view/column.draggable.js

var app = app || {};

// Column View
// ----------
// 

_.extend(app.ColumnViewModules.events, {
    'drop': 'drop'
});

app.ColumnViewModules.functions.push("bindDragEvent");

app.ColumnViewModules.draggable = {

    drop: function (event, index) {
        this.$el.trigger('update-sort-column', [this.model, index]);
    },
    
    bindDragEvent: function(){
        //this.row.on("render", this.unbindDragUi);
        this.row.on("render", this.bindDragUi);
    },

    bindDragUi: function () {
        jQuery(".column-container").sortable({
            cursor: "move",
            handle: ".editor-drag",
            items: ".columns",
            placeholder: "",
            revert: true,
            //connectWith: ".editor-row",
            stop: function (event, ui) {
                ui.item.trigger('drop', ui.item.index());
                //console.log(ui.item.index());
            }
        });
        
    },

    unbindDragUi: function () {
        this.row.off("render");
        jQuery(".column-container").sortable("destroy");
    }
};