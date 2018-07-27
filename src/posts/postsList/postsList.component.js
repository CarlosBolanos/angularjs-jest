angular.module('angular.jest.posts')
    .component('postsList', {
        template: require('./postsList.component.html'),
        bindings: { title:'<', posts: '<' }

    })