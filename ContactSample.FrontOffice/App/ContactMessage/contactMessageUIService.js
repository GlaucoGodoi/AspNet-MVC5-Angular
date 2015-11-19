(function() {
    'use static';

    angular.module('contactMessageModule').service('contactMessageUIService', contactMessageUIService);
    contactMessageUIService.$inject = ['$location'];

    function contactMessageUIService($location) {
        var vm = this;

        vm = {
            toForm: toForm,
            toDescription: toDescription,
            toThanks: toThanks
        };

        function toForm() {
            $location.path("/form");
        }


        function toDescription() {
            $location.path("/description");
        }

        function toThanks() {
            $location.path("/thanks");
        }

        return vm;
    }
})();