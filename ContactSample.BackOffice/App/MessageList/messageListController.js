(function () {
    'use strict';

    angular
        .module('cmBackOffice')
        .controller('messageListController', messageListController);

    messageListController.$inject = ['$location', 'messageListDataService', 'localStorageService', '$routeParams'];

    function messageListController($location, dataService, storageService, $routeParams) {
        /* jshint validthis:true */
        var vm = this;
        vm.ui = {
            messages: [],
            username: null,
            nextLink: null,
            previousLink: null
        };

        vm.actions = {
            displayMessage: displayMessage
        };

        activate();

        function activate() {
            var pageToShow = $routeParams.page;
            dataService.getMessages(pageToShow).then(showMessages, handleError);

            var sData = storageService.getAuthData();
            var data = JSON.parse(sData);
            vm.ui.username = data.username;
            function showMessages(response) {
                vm.ui.messages = response.data.data;
                vm.ui.nextLink = response.data.nextPage;
                vm.ui.previousLink = response.data.previousPage;
            }

            function handleError(response) {
                alert('error: ' + response.data);
            }
        }

        function displayMessage(id) {
            $location.path('/messageEdit/' + id);

        }

    }
})();
