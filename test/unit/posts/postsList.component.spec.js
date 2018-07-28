require('angular');
require('angular-mocks');

const $ = require('jquery');
const dbData = require('@/../db.json');

describe('post.component tests', () => {
    let _$scope, _$compile;
    let postData, element;
    
    beforeAll(() => {
        angular.module('angular.jest.posts', []);        
        require('@/posts/postsList/postsList.component.js');
    });

    beforeEach(() => {
        angular.mock.module('angular.jest.posts');
        postData = dbData.posts;
    });

    beforeEach(inject(($rootScope, $compile) => {
        _$scope = $rootScope.$new();
        _$compile = $compile;
        _$scope.posts = { 
            pinned: postData.filter(p => p.type === 'pinned'),
            recent: postData.filter(p => p.type === 'recent'),
        };        
    }));

    function compileComponent(title, data){
        element = angular.element(`<posts-list title="\'${title}'\" posts="${data}"></posts-list>`);
        element = _$compile(element)(_$scope)
        _$scope.$apply();
    }
    
    it('it should render the post-list component', () => {
        compileComponent('Pinned Post', 'posts.pinned');
        
        expect($(element).find('h1.content-subhead').text()).toEqual('Pinned Post');
        expect($(element).find('post').length).toBe(1);

        compileComponent('Recent Posts', 'posts.recent');
        expect($(element).find('h1.content-subhead').text()).toEqual('Recent Posts');
        expect($(element).find('post').length).toBe(3);
    });

});