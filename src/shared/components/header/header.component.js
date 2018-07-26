require('sharedModule')
    .directive('appHeader', function(){        
        return {
            template: require('./header.component.html'),
            replace:true
        }
    })