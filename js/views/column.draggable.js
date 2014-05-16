// js/view/column.draggable.js

var app = app || {};

// Column View
// ----------
// 
app.ColumnView = app.ColumnView.extend({

    drop: function (event, index) {
        this.$el.trigger('update-sort', [this.model, index]);
    },

    bind_drag: function () {
        $(".editor-row").sortable({
            cursor: "move",
            handle: ".editor-drag",
            items: ".columns",
            placeholder: "",
            revert: true,
            stop: function (event, ui) {
                ui.item.trigger('drop', ui.item.index());
                //console.log(ui.item.index());
            }
        });
    },

    unbind_drag: function () {
        jQuery(".editor-row").sortable("destroy");
    }
});