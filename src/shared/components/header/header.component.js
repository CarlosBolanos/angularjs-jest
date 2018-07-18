angular.module('angular-test')
    .directive('appHeader', function(){        
        return {
            template: require('./header.component.html'),
            replace:true
        }
    })