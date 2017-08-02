var pivot = (function (jQ) {
    var pivotModel = {};

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

    return pivotModel;

})(jQuery);

