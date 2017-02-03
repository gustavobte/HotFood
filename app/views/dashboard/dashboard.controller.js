(function () {
    'use strict';

    angular
        .module('hotFood')
        .controller('DashboardController', DashboardController);


    function DashboardController($scope, $mdSidenav) {

        $scope.showMobileMainHeader = true;
        $scope.openSideNavPanel = function() {
            $mdSidenav('left').open();
        };
        $scope.closeSideNavPanel = function() {
            $mdSidenav('left').close();
        };
    }



})();

