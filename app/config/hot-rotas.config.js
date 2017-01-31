angular
    .module('hotFood')  // Qual dos2  modulos qual devo registrar na ROUTES
    .config(config);

function config($stateProvider) {

    const appStart = {
        name:'appStart',
        url:'/app-start',
        templateUrl:'app/views/dashboard/app.html'
        // resolve:{
        //     deps: function ($ocLazyLoad) {
        //         return $ocLazyLoad.load('app/views/login/login-controller.js')
        //     }
        // }
    };

    const appLogout = {
        name:'appLogout',
        url:'/applogout',
        templateUrl:'index.html',
        controllerAs: 'vm'
        // resolve:{
        //     deps: function ($ocLazyLoad) {
        //         return $ocLazyLoad.load('app/views/login/login-controller.js')
        //     }
        // }
    };

    $stateProvider
        .state('appStart',appStart)
        .state('appLogout',appLogout)

}
