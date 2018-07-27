
angular.module('angular.jest.posts')
    .component('post', {
        template: require('./post.component.html'),
        bindings: { data: '<' },
        controller: function($sce){
            var $ctrl = this;
            angular.extend($ctrl, {
                $onInit() {   
                    $ctrl.data.content = $sce.trustAsHtml($ctrl.data.content);
                }
            });
        }
    })