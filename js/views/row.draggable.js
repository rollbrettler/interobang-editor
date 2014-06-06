// js/view/row.draggable.js

var app = app || {};

// draggable row View module
// ----------
// 
_.extend(app.RowViewModules.events, {
    'drop': 'drop',
    'update-sort-column': 'updateSortColumn'
});

app.RowViewModules.functions.push("bind_drag");

app.RowViewModules.draggable = {

    drop: function (event, index) {
        this.$el.trigger('update-sort-row', [this.model, index]);
    },

    bind_drag: function () {

        // sortable settings
        jQuery(".editor-rows").sortable({
            cursor: "move",
            handle: ".editor-drag:not(.column-container .editor-drag)",
            items: ".editor-row:not(.editor-add-column)",
            placeholder: "editor-row row",
            revert: true,
            stop: function (event, ui) {
                ui.item.trigger('drop', ui.item.index());
                console.log(ui.item.index());
            }
        });
        
    },

    unbind_drag: function () {
        jQuery(".editor-rows").sortable("destroy");
    },

    updateSortColumn: function (event, model, position) {

        this.collection.remove(model);
        
        // console.log("updateSortColumn", model);
        
        this.collection.each(function (model, index) {
            var ordinal = index;
            if (index >= position)
                ordinal += 1;
            model.set('ordinal', ordinal);
        });

        model.set('ordinal', position);

        this.collection.add(model, {
            at: position
        });
        
        // to update ordinals on server:
        var ids = this.collection.pluck('id');

        console.log('post ids to server: ' + ids.join(', '));

        this.render();
    }
};