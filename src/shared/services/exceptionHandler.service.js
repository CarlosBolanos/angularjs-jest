require('sharedModule')
    .service('exceptionHandler', function($rootScope){
        this.throwError = () => {
            $rootScope.loading = false;            
        }
    });