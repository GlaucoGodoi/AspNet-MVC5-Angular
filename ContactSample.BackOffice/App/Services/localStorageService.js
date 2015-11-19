(function () {
    'use strict';

    angular
        .module('cmBackOffice')
        .factory('localStorageService', localStorageService);

    localStorageService.$inject = ['$window'];

    function localStorageService($window) {
        var service = {
            getData: getData,
            saveData: saveData,
            saveAuthData:saveAuthData,
            getAuthData:getAuthData
        };

        return service;

        function saveAuthData(value) {
            saveData('authorizationData', value);
        }

        function getAuthData() {
            return getData('authorizationData');
        }

        function getData(key)
        {
            return $window.localStorage.getItem(key);
        }

        function saveData(key, value) {
            $window.localStorage.setItem(key, JSON.stringify(value) );
        }
    }
})();