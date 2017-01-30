angular
    .module('hotFood')  // Qual dos2  modulos qual devo registrar na ROUTES
    .config(config);

function config($stateProvider) {

    const appStart = {
        name:'appStart',
        url:'/app',
        templateUrl:'app/app.html',
        controllerAs: 'vm',
        resolve:{
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load('app/views/login/login-controller.js')
            }
        }
    };

    $stateProvider
        .state('appStart',appStart)
}
