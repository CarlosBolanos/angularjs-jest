angular.module('angular.jest.posts')
    .service('postService', function($q, $http, API_BASE_URL) {
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
                }).catch(() => {
                    var result = { pinned: [], recent: [] };
                    deferred.resolve(result);
                });

            return deferred.promise;
        };
    });

