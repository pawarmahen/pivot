$(function () {
    console.log('in pivot.js');
    $.when(
    $.getScript("/dist/jquery-1.12.4.min.js"),
    $.getScript("/dist/jquery-ui-1.12.1.min.js"),
    $.getScript("/dist/bootstrap.min.js"),
    $.getScript("/dist/d3.min.js"),
    $.getScript("/dist/c3.min.js"),
    $.getScript("/dist/vendor/pivot.js"),
    $.getScript("/dist/vendor/export_renderers.js"),
    $.getScript("/dist/vendor/d3_renderers.js"),
    $.getScript("/dist/vendor/c3_renderers.js"),
    $.Deferred(function (deferred) {
        $(deferred.resolve);
    })
).done(function () {
    console.log('done called');
    $("head").append(
    $('<link rel="stylesheet" type="text/css" href="/dist/c3.min.css">'),
    $('<link rel="stylesheet" type="text/css" href="/dist/vendor/pivot.css">'),
    $('<link rel="stylesheet" type="text/css" href="/dist/vendor/pivot.css">')
    );
    
    var pivot = (function (jQ) {
        var pivotModel = {};
        pivotModel.options = {
            rows: [],
            cols: [],
            renderers: $.extend(
                $.pivotUtilities.renderers,
                $.pivotUtilities.c3_renderers,
                $.pivotUtilities.export_renderers
                ),
            rendererName: "Table"
        }
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

        pivotModel.pivotUIJson = function (data, id, options) {
            if (data == undefined || id == undefined) {
                return 'data or id cannot be empty';
            }
            jQ(id).pivotUI(data, options || pivotModel.options);
        }
        return pivotModel;

    })(jQuery);

    console.log('executed pivot.js');
});
});


//pivotModel.pivotUIJson = function (data, id, rowVlaueArray, columnValueArray) {
//    var dateFormat = $.pivotUtilities.derivers.dateFormat;
//    var sortAs = $.pivotUtilities.sortAs;
//    var tpl = $.pivotUtilities.aggregatorTemplates;
//    var fmt = $.pivotUtilities.numberFormat({ suffix: " °C" });

//    if (data == undefined || id == undefined) {
//        return 'data or id cannot be empty';
//    }
//    jQ(id).pivotUI(data, {
//        hiddenAttributes: ["Date", "Max Temp (C)", "Mean Temp (C)",
//            "Min Temp (C)", "Total Rain (mm)", "Total Snow (cm)"],

//        derivedAttributes: {
//            "month name": dateFormat("Date", "%n", true),
//            "day name": dateFormat("Date", "%w", true)
//        },

//        rows: ["day name"],
//        cols: ["month name"],

//        sorters: {
//            "month name": sortAs(["Jan", "Feb", "Mar", "Apr", "May",
//                    "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]),
//            "day name": sortAs(["Mon", "Tue", "Wed", "Thu", "Fri",
//                    "Sat", "Sun"])
//        },

//        aggregators: {
//            "Mean Temperature":
//                function () { return tpl.average(fmt)(["Mean Temp (C)"]) },
//            "Max Temperature":
//                function () { return tpl.max(fmt)(["Max Temp (C)"]) },
//            "Min Temperature":
//                function () { return tpl.min(fmt)(["Min Temp (C)"]) }
//        },

//        renderers: $.extend(
//            $.pivotUtilities.renderers,
//            $.pivotUtilities.c3_renderers,
//            $.pivotUtilities.export_renderers
//            ),

//        rendererName: "Heatmap",

//        rendererOptions: {
//            heatmap: {
//                colorScaleGenerator: function (values) {
//                    return d3.scale.linear()
//                        .domain([-35, 0, 35])
//                        .range(["#77F", "#FFF", "#F77"])
//                }
//            }
//        }
//    });
//}