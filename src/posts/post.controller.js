angular.module('angular-test')
.controller('homeController', ['$scope', '$rootScope', '$timeout', 'postService', 'exceptionHandler',
    function($scope, $rootScope, $timeout, postService, exceptionHandler) {
    // $rootScope.loading = true;

    postService.get()
        .then(split)
        .catch(exceptionHandler.throwError);   

    function split(posts) {    
        $scope.posts = posts;
        $rootScope.loading = false;
    }

}])
.service('postService', ['$q', '$http', 'API_BASE_URL',
    function($q, $http, API_BASE_URL) {
        this.get = () => {
            var deferred = $q.defer();

            $http.get(`${API_BASE_URL}posts`)
                .then(function(response){
                    var result = { pinned: [], recent: [] };

                    response.data.forEach(p => {
                        if(p.type === 'pinned'){
                            result.pinned.push(p);
                        }                
                        if(p.type === 'recent'){
                            result.recent.push(p);
                        }
                    });
                    deferred.resolve(result);
                });

             return deferred.promise;
        };
    }
]);