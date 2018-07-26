angular.module('angular.jest.posts')    
    .factory('PostsListModel', function PostsListModel(){
        return function(posts){
            var result = {pinned: [], recent: []};
            if(posts && posts.length > 0 ){
                posts.forEach(p => {
                    if(p.type === 'pinned'){
                        result.pinned.push(p);
                    }                
                    if(p.type === 'recent'){
                        result.recent.push(p);
                    }
                });
            }
            return result;
        }
    })
    .service('postService', function postService($q, $http, API_BASE_URL, PostsListModel) {
        this.get = () => {
            var deferred = $q.defer();
            $http.get(`${API_BASE_URL}/posts`)
                .then(function(response){
                    deferred.resolve(new PostsListModel(response.data));
                }).catch(() => {
                    deferred.resolve(new PostsListModel([]));
                });
            return deferred.promise;
        };
    });

  {
    // import PostsListModel from './postsList.model';

    // class PostService {
    //     constructor($q, $http, API_BASE_URL){
    //         this.$q = $q;
    //         this.$http = $http;
    //         this.API_BASE_URL = API_BASE_URL;
    //     }
    
    //     get(){
    //         var deferred = this.$q.defer();
    //         this.$http.get(`${this.API_BASE_URL}/posts`)
    //             .then(function(response){
    //                 const model = new PostsListModel(response.data);
    //                 deferred.resolve(model);
    //             }).catch(() => {
    //                 const model = new PostsListModel();
    //                 deferred.resolve(model);
    //             });
    
    //         return deferred.promise;
    //     }
    // }
    // angular.module('angular.jest.posts')  
    //  .service('postService', PostService);
    
  }