(function () {
    'use strict';
    angular.module('homeModule').controller('homeController', homeController);

    homeController.$inject = ['$location'];

    function homeController($location) {

        var vm = this;

        vm.actions = {
            navigateToInitial: navigateToInitial,
            navigateToAbout: navigateToAbout
        };


        function navigateToInitial() {
            $location.path ('/initial');
        }

        function navigateToAbout() {
            $location.path('/about');
        }

        return vm;
    }
})();