module.exports = (function() {
    var mdl = angular.module('module.fake', []);

    mdl.mock = function() {
        var argumentObj = arguments;

        var args = Object.keys(argumentObj).map(function(key){
            return argumentObj[key];
        });

        args.splice(0, 0, 'module.fake');

        angular.mock.module.apply(null, args);
    };

    return mdl;
})();