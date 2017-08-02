var pivot = (function (jQ) {
    var pivotModel = {};
    var renderes = jQ.extend(
            jQ.pivotUtilities.renderers,
            jQ.pivotUtilities.c3_renderers,
            jQ.pivotUtilities.d3_renderers,
            jQ.pivotUtilities.export_renderers
        );

    pivotModel.derivers = jQ.pivotUtilities.derivers;
    pivotModel.simplePivot = function (data, id) {
        if (data == undefined || id == undefined) {
            return 'data or id cannot be empty';
        }
        jQ(id).pivot(
            [
                { color: "blue", shape: "circle" },
                { color: "red", shape: "triangle" }
            ],
            {
                rows: ["color"],
                cols: ["shape"]
            }
        );
    }

    pivotModel.pivotWithJson = function (data, id, rowValueArray, columnValueArray) {
        if (data == undefined || id == undefined) {
            return 'data or id cannot be empty';
        }

        jQ(id).pivot(data, { rows: rowValueArray, cols: columnValueArray });
    }

    pivotModel.pivotUIJson = function (data, id, rowVlaueArray, columnValueArray) {
        if (data == undefined || id == undefined) {
            return 'data or id cannot be empty';
        }
        jQ(id).pivotUI(data, { rows: rowVlaueArray, cols: columnValueArray });
    }
    return pivotModel;

})(jQuery);

