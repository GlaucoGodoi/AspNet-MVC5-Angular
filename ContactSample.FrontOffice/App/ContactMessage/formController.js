(function () {
    'use strict';
    angular.module('contactMessageModule').controller('formController', formController);

    formController.$inject = ['contactMessageUIService', 'contactMessageDataService'];

    function formController(uiService, dataService) {
        var vm = this;

        vm.data = {
            id: null,
            email: null,
            username: null,
            creationDate: null,
            text: null,
            Answer: null,
            messageType: null,
            businessArea: null,
            answerDate:null
        };

        vm.ui= {
            messageTypes: [],
            businessAreas:[],
            saving:false
        }

        vm.actions = {
            navigateToForm: uiService.toForm,
            navigateToDescription: uiService.toDescription,
            saveData: saveData
        };

        function init() {
            dataService.getDataLookup().then(processSuccess, processFail);

            function processSuccess(response) {
                vm.ui.messageTypes = response.data.messageTypes;
                vm.ui.businessAreas = response.data.businessAreas;
            }

            function processFail(response) {
                alert('error ' + response);
            }
        }

        function saveData() {
            vm.ui.saving = true;
            dataService.saveData(vm.data).then(handleSaveSuccess, handleSaveFail);

            function handleSaveSuccess(response) {
                vm.ui.saving = false;
                toastr.success('Data saved', 'Contact messages');
                uiService.toThanks();
            }

            function handleSaveFail(response) {
                vm.ui.saving = false;
                alert(response.data);
            }
        }

        init();
        return vm;
    }

})();