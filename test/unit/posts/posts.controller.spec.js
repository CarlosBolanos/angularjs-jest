require('angular');
require('angular-mocks');

describe('posts.service tests', () => {
    let $scope;

    let validModel = { 
        recent:[ { type:'recent'  } ], 
        pinned:[ { type:'pinned'  } ]
    };

    const exceptionHandler = { throwError: jest.fn() };
    
    beforeAll(() => {
        angular.module('angular.jest.posts', []);        
        require('@/posts/posts.controller');
    });

    beforeEach(() => {
        angular.mock.module('angular.jest.posts')
    });

    describe('postService resolves request succesfully', () => {
        const postService = { 
            get: function(){
            var promise = new Promise((resolve, reject) => {
                resolve(validModel);
            });
            return promise;
        } };

        beforeEach(inject(($rootScope, $controller) => {
            $scope = $rootScope.$new();
            $controller('postsController', { $scope, postService, exceptionHandler });
        }));
        
        it('should initialize controller properly', inject(($rootScope) => {     
            expect($scope.posts).toEqual(validModel);
            expect($rootScope.loading).toBeFalsy();
        }));
    })


    describe('postService rejects request', () => {
        const postService = { 
            get: function(){
            var promise = new Promise((resolve, reject) => {
                reject(validModel);
            });
            return promise;
        } };

        beforeEach(inject(($rootScope, $controller) => {
            $scope = $rootScope.$new();
            $controller('postsController', { $scope, postService, exceptionHandler });
        }));
        
        it('should call exception handler if postService.get fails', inject(($rootScope) => {     
            expect(exceptionHandler.throwError).toHaveBeenCalled();
            expect($rootScope.loading).toBeFalsy();
        }));
    })
});