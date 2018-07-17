import './app.css';

angular.module('angular-test', [
    require('./mathservice').name
])
.controller('homeController', ['$scope','postService', function($scope, postService){
    $scope.greeting = 'hello world!!';

    postService.get().then(response => {
        $scope.posts = response.data;
    })
}])
.service('postService', () => {
    this.get = ($http, API_BASE_URL) => {
        return $http.get(`${API_BASE_URL}/posts`);
    }
})