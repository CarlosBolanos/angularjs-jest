require('postsModule')
.controller('postsController',  
    function($scope, $rootScope, postService, exceptionHandler) {
        $rootScope.loading = true;
        
        postService.get()
            .then(function(posts) {    
                $scope.posts = posts;
                $rootScope.loading = false;
            })
            .catch(exceptionHandler.throwError);   
});