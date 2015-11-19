(function () {
    'use strict';

    angular
        .module('cmBackOffice')
        .factory('messageListDataService', messageListDataService);

    messageListDataService.$inject = ['$http'];

    function messageListDataService($http) {
        var service = {
            getMessages: getMessages,
            getPage: getPage
        };

        return service;

        function getMessages(page) {
            return $http({
                url: 'http://localhost:24218/api/contactmessages/' + (page||1) + '/5',
                method: 'GET'
            });
        }

        function getPage(url) {
            return $http({
                url: url,
                method:'GET'
            });
        }
    }
})();