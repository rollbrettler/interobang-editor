// js/view/editor.draggable.js

var app = app || {};

// Editor Draggable Module
// ----------
// 

_.extend(app.EditorViewModules.events, {
    'update-sort': 'updateSortRow'
});

//app.EditorViewModules.functions.push("");

app.EditorViewModules.draggable = {

    updateSortRow: function (event, model, position) {

        this.removeRow(model);
        
        // console.log("updateSortRow", model);
        
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

        //console.log('post ids to server: ' + ids.join(', '));

        this.render();
    }

}