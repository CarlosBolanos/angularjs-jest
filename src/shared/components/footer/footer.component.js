require('sharedModule')
    .directive('appFooter', function(){        
        return {
            template: require('./footer.component.html'),
            replace:true
        }
    })