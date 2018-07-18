angular.module('angular-test')
    .service('exceptionHandler', ['$rootScope',
        function($rootScope){
            this.throwError = () => {
                $rootScope.loading = false;            
            }
        }
    ]);