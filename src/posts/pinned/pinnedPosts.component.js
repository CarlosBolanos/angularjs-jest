angular.module('angular-test')
    .component('pinnedPosts', {
        template: require('./pinnedPosts.component.html'),
        bindings: { posts: '@' },
        controller: function(){
            var $ctrl = this;

        }
    })
    .component('pinnedPost', {
        template: require('./pinnedPost.component.html'),
        bindings: { post: '<' },
        controller: function(){
            var $ctrl = this;
        }
    })