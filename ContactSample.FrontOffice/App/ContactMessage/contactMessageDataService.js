(function () {
    'use strict';

    angular
        .module('contactMessageModule')
        .factory('contactMessageDataService', contactMessageDataService);

    contactMessageDataService.$inject = ['$http'];

    function contactMessageDataService($http) {
        var service = {
            getDataLookup: getDataLookup,
            saveData: saveData
        };

        return service;

        function getDataLookup() {
            return $http({
                url: 'http://localhost:24218/api/lookupdata',
                method:'GET'
            });
        }

        function saveData(dataToSave) {
            return $http({
                url: 'http://localhost:24218/api/contactMessages',
                method: 'POST',
                data: dataToSave
            });
        }
    }
})();