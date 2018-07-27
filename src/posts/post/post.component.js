angular.module('angular.jest.posts')
    .component('post', {
        template: require('./post.component.html'),
        bindings: { post: '<' },
        controller: function($sce){
            var $ctrl = this;
            this.$onInit = function(){
                console.log($ctrl.post)
                $ctrl.post.content = $sce.trustAsHtml($ctrl.post.content);
            }
        }
    })