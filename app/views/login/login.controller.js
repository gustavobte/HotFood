(function () {
    'use strict';

    angular
        .module('hotFood')
        .controller('LoginController', LoginController);

    function LoginController($scope , $location) {

        $scope.alteraRota = alteraRota;

        function alteraRota() {
        }

    }


})();

