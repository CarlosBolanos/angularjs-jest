angular.module('angular-test')
    .component('recentPosts', {
        template: require('./recentPosts.component.html'),
        bindings: { recent: '<' },
        controller: function(){
            var $ctrl = this;

        }     
    })