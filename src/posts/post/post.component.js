require('postsModule')
    .component('pinnedPost', {
        template: require('./post.component.html'),
        bindings: { post: '<' },
        controller: function($sce){
            var $ctrl = this;
            this.$onInit = function(){
                $ctrl.post.content = $sce.trustAsHtml($ctrl.post.content);
            }
        }
    })