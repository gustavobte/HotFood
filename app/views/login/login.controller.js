(function () {
    'use strict';

    angular
        .module('hotFoodLogin')
        .controller('LoginController', LoginController);


    function LoginController($state, $scope) {
        var vm = this;
        vm.title = 'LoginController';

        $scope.alteraRota = alteraRota;

        function alteraRota($state) {
            console.log("Foi");
            $state.go(state);
        }
    }

})();

