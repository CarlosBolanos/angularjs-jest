require('postsModule')
    .component('pinnedPosts', {
        template: require('./pinnedPosts.component.html'),    
        bindings: { pinned: '<' }
    });