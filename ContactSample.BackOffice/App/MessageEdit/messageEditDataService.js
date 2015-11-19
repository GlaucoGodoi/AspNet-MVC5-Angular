(function () {
    'use strict';

    angular
        .module('cmBackOffice')
        .factory('messageEditDataService', messageEditDataService);

    messageEditDataService.$inject = ['$http'];

    function messageEditDataService($http) {
        var service = {
            getData: getData,
            saveData:saveData
        };

        return service;

        function getData(id) {
            return $http({
                url: 'http://localhost:24218/api/contactmessages/' + id,
                method:'GET'
            });
        }

        function saveData(data) {
            return $http({
                url: 'http://localhost:24218/api/contactmessages/' + data.id,
                method: 'PUT',
                data: data
            });
        }
    }
})();