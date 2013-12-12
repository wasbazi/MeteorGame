Handlebars.registerHelper("forEach", function(obj, fn) {
    var buffer = "",
        key;

    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          buffer += Spark.labelBranch(key, function () { // added labelBranch
            var updatedValue = _.extend({_key: key}, obj[key]);
            return fn(updatedValue);
          });
        }
    }

    return buffer;
});
