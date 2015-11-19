(function () {
    'use strict';

    angular
        .module('cmBackOffice')
        .factory('loginDataService', loginDataService);

    loginDataService.$inject = ['$http'];

    function loginDataService($http) {
        var service = {
            checkCredentials: checkCredentials,
            registerUser: registerUser
        };

        return service;

        function checkCredentials(credentials) {
            var data = "grant_type=password&username=" + credentials.username + "&password=" + credentials.password;
            return $http({
                url: 'http://localhost:24218/token',
                method: 'POST',
                data: data,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        }

        function registerUser(userData) {
            return $http({
                url: 'http://localhost:24218/api/account/register',
                method: 'POST',
                data: userData
            });
        }
    }
})();