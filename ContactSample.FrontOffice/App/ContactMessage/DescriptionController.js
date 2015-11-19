(function () {
    'use strict';
    angular.module('contactMessageModule').controller('descriptionController', descriptionController);

    descriptionController.$inject = ['contactMessageUIService'];

    function descriptionController(uiService) {
        var vm = this;
        vm.actions = {
            navigateToForm: uiService.toForm,
            navigateToDescription: uiService.toDescription
        };
        return vm;
    }

})();