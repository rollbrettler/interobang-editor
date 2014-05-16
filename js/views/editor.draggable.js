// js/view/editor.draggable.js

var app = app || {};

// Editor Main View
// ----------
// 

app.EditorView = app.EditorView.extend({

    events: {
        'update-sort': 'updateSortRow'
    },

    updateSortRow: function (event, model, position) {

        this.collection.remove(model);
        
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
});