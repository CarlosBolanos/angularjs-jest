require('angular');
require('angular-mocks');
import $ from 'jquery';

describe('post.component tests', () => {
    let $scope, element, _$compile;
    
    const postData = {
        "id": 1,
        "type":"pinned",
        "title": "Introducing Pure",
        "author": {
          "name":"Tilo Mitra",
          "profile_image":"https://purecss.io/img/common/tilo-avatar.png"
        },
        "content": "Yesterday at CSSConf, we launched Pure – a new CSS library. Phew! <a href=\"https://speakerdeck.com/tilomitra/pure-bliss\"> Here are the slides from the presentation</a>. Although it looks pretty minimalist, we’ve been working on Pure for several months. After many iterations, we have released Pure as a set of small, responsive, CSS modules that you can use in every web project.",
        "tags": [{"type":"design", "name":"CSS"}, {"type":"pure", "name":"Pure"}]      
    };

    beforeAll(() => {
        angular.module('angular.jest.posts', []);        
        // require('@/posts/post/post.component');
    });

    beforeEach(() => {
        angular.mock.module('angular.jest.posts')
    });

    function compileComponent(){
        element = angular.element('<post-component post="post"></post-component>');
        // element = _$compile(element)($scope)
        // $scope.$apply();
    }

    beforeEach(inject(($rootScope, $sce, $compile, $componentController) => {
        $scope = $rootScope.$new();
        _$compile = $compile;
        $scope.post = postData;

        // ctrl = $componentController('postComponent');
    }));
    
    it('x and y ', () => {
        expect(true).toBeTruthy()
    })

});