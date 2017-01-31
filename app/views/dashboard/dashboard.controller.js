(function () {
    'use strict';

    angular
        .module('hotFood')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['dependency'];

    /* @ngInject */
    function DashboardController(dependency) {
        var vm = this;
        vm.title = 'DashboardController';

        activate();

        ////////////////

        function activate() {
            code
        }
    }

})();

