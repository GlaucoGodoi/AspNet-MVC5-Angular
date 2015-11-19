(function () {
    'use strict';

    angular
        .module('cmBackOffice')
        .controller('messageEditController', messageEditController);

    messageEditController.$inject = ['$location', '$routeParams', 'messageEditDataService', 'localStorageService']; 

    function messageEditController($location, $routeParams, dataService, localStorage) {
        /* jshint validthis:true */
        var vm = this;

        vm.ui = {
            username:null
        };

        vm.actions = {
            saveData:saveData
        };

        activate();

        function activate() {
            var param = $routeParams.id;

            dataService.getData(param).then(showData, handleError);

            var sData = localStorage.getAuthData();
            var data = JSON.parse(sData);

            vm.ui.username = data.username;

            function showData(response) {
                vm.data = response.data;
            }

            function handleError(response) {
                alert('error: ' + response.data);
            }
        }

        function saveData() {
            dataService.saveData(vm.data).then(handleSaveSuccess, handleSaveFailure);

            function handleSaveSuccess(response) {
                toastr.success('Data saved', 'Contact message');
                $location.path('/messageList');
            }

            function handleSaveFailure(response) {
                alert('error: ' + response.data);
            }
        }
    }
})();
