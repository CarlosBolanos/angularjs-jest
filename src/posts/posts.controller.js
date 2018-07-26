angular.module('angular.jest.posts')    
.controller('postsController',  
    function($scope, $rootScope, postService, exceptionHandler) {
        $rootScope.loading = true;    
        postService.get()
            .then(function(posts) {                   
                $scope.posts = posts;                                      
                $rootScope.loading = false;
            })
            .catch((err) => {
                $rootScope.loading = false;
                exceptionHandler.throwError(err);
            });   
});

{
    // class PostsController {
    //     constructor($scope, $rootScope, postService, exceptionHandler){
    //         this.$scope = $scope;
    //         this.$rootScope = $rootScope; 
    //         this.postService = postService; 
    //         this.exceptionHandler = exceptionHandler;    
    
    //         this.initialize();
    //     }
    
    //     initialize(){
    //         var self = this;
    //         self.$rootScope.loading = true;
    
    //         self.postService.get()
    //         .then(function(posts) {                   
    //             self.$scope.posts = posts;                                      
    //             self.$rootScope.loading = false;
    //         })
    //         .catch((err) => {
    //             self.$rootScope.loading = false;
    //             self.exceptionHandler.throwError(err);
    //         });   
    //     }
    // }
    
    // angular.module('angular.jest.posts') 
    //     .controller('postsController', PostsController)
}