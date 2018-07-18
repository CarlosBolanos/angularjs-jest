angular.module('angular-test')
    .component('recentPosts', {
        template: require('./recentPosts.component.html'),
        bindings: { posts: '<' },
        controller: function(){
            var $ctrl = this;

        }     
    })