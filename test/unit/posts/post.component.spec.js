require('angular');
require('angular-mocks');

const $ = require('jquery');
const dbData = require('@/../db.json');

describe('post.component tests', () => {
    let _$scope, _$compile;
    let postData, element;
    
    beforeAll(() => {
        angular.module('angular.jest.posts', []);        
        require('@/posts/post/post.component');
    });

    beforeEach(() => {
        angular.mock.module('angular.jest.posts');
        postData = dbData.posts[0];
    });

    function compileComponent(){
        element = angular.element('<post data="data"></post-component>');
        element = _$compile(element)(_$scope)
        _$scope.$apply();
    }

    beforeEach(inject(($rootScope, $compile) => {
        _$scope = $rootScope.$new();
        _$compile = $compile;

        _$scope.data = postData;
    }));
    
    it('should render the post component with html content', () => {
        compileComponent();
        expect($(element).find('.post-title').text()).toEqual(postData.title);
        expect($(element).find('.post-author').text()).toEqual(postData.author.name);
        expect($(element).find('.post-avatar').attr('src')).toEqual(postData.author.profile_image);
        expect($(element).find('.post-category').length).toBe(2);
        expect($(element).find('.post-category-design').text()).toEqual(postData.tags[0].name);
        expect($(element).find('.post-category-pure').text()).toEqual(postData.tags[1].name);
                
        expect($(element).find('.post-content').html()).toEqual(postData.content.$$unwrapTrustedValue())
    });

    it('should render the post component with images', () => {
        postData = dbData.posts[2];
        _$scope.data = postData;
        compileComponent();
        expect($(element).find('.post-title').text()).toEqual(postData.title);
        expect($(element).find('.post-author').text()).toEqual(postData.author.name);
        expect($(element).find('.post-avatar').attr('src')).toEqual(postData.author.profile_image);
        expect($(element).find('.post-category').length).toBe(1);
        expect($(element).find('.post-category-none').text()).toEqual(postData.tags[0].name);

        expect($(element).find('.post-images .pure-u-1').length).toEqual(2);
        expect($(element).find('.post-images .pure-img-responsive').attr('src')).toEqual(postData.images[0].url);
        expect($(element).find('.post-images .post-image-meta').first().text().trim()).toEqual(postData.images[0].meta);        
    });
});