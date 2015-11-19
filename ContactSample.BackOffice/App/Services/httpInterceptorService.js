(function () {
    'use strict';

    angular
        .module('cmBackOffice')
        .factory('httpInterceptorService', httpInterceptorService);

    httpInterceptorService.$inject = ['$q', '$location', 'localStorageService'];

    function httpInterceptorService($q, $location, localStorageService) {
        var service = {
            request: request,
            responseError:responseError
        };

        return service;

        function request(config) {
            config.headers = config.headers || {};

            var sAuthData = localStorageService.getData('authorizationData');
            var authData = JSON.parse(sAuthData);
            if (authData) {
                config.headers.Authorization = 'Bearer ' + authData.token;
            }

            return config;
        }

        function responseError(rejection) {
            if (rejection.status === 401) {
                $location.path('/login');
            }
            return $q.reject(rejection);
        }
    }
})();