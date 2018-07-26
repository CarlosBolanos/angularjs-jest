require('angular');
require('angular-mocks');

describe('posts.service tests', () => {

    beforeAll(() => {
        angular.module('angular.jest.posts', []);        
        require('@/posts/posts.service');
    });

    beforeEach(() => {
        angular.mock.module('angular.jest.posts', {
            API_BASE_URL: 'host.com/api'
        })        
    });

    it('if GET:posts return data  -> postService.get split into recent/pinned posts', 
        inject(($q, $httpBackend, postService, API_BASE_URL) => {
            var mockResponse = [
                {id:0, type:'pinned'},
                {id:1, type:'pinned'},
                {id:2, type:'recent'}
            ];

            const splitPosts = { 
                pinned: [ { id: 0, type: 'pinned' }, { id: 1, type: 'pinned' }],
                recent: [ { id: 2, type: 'recent' } ] 
            }

            $httpBackend.expectGET(API_BASE_URL+'posts').respond(200, mockResponse);
            
            let result;
            postService.get().then(response => {
                result = response;
            });
            
            $httpBackend.flush();

            expect(result).toEqual(splitPosts);
    }));

    it('if GET:posts return 0 rows -> postService.get return an empty object', 
        inject(($httpBackend, postService, API_BASE_URL) => {
            var mockResponse = [ ];
            const splitPosts = {  pinned: [ ], recent: [ ]  }

            $httpBackend.expectGET(API_BASE_URL+'posts').respond(200, mockResponse);
            
            let result;
            postService.get().then(response => {
                result = response;
            });
            
            $httpBackend.flush();

            expect(result).toEqual(splitPosts);
    }));

    it('if GET:posts fails -> postService.get return empty object', 
        inject(($httpBackend, postService, API_BASE_URL) => {
            var mockResponse = [ ];
            const defaultModel = {  pinned: [ ], recent: [ ]  }

            $httpBackend.expectGET(API_BASE_URL+'posts').respond(500, mockResponse);
            
            let result;
            postService.get().then(response => {
                result = response;
            });
            
            $httpBackend.flush();

            expect(result).toEqual(defaultModel);
    }));


    afterEach(inject($httpBackend => {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    }));

});