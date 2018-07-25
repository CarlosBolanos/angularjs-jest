angular.module('angular-test')
    .component('pinnedPosts', {
        template: require('./pinnedPosts.component.html'),    
        bindings: { pinned: '<' }
    });