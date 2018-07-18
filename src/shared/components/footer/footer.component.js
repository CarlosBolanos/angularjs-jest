angular.module('angular-test')
    .directive('appFooter', function(){        
        return {
            template: require('./footer.component.html'),
            replace:true
        }
    })