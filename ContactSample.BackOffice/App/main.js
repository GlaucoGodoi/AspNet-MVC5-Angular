(function () {
    'use strict';

    angular.module('cmBackOffice', [
        // Angular modules 
        'ngRoute'

        // Custom modules 

        // 3rd Party Modules

    ]);

    angular.module('cmBackOffice').config(routeConfigurator);

    routeConfigurator.$inject = ['$routeProvider'];

    function routeConfigurator($routeProvider) {
        $routeProvider
        .when('/', { templateUrl: 'login.html', controller: 'loginController', controllerAs: 'vm' })
        .when('/loginerror', { templateUrl: 'loginError.html' })
        .when('/register', { templateUrl: 'register.html', controller: 'registerController', controllerAs: 'vm' })
        .when('/messageList/:page?', { templateUrl: 'messageList.html', controller: 'messageListController', controllerAs: 'vm' })
        .when('/messageEdit/:id', { templateUrl: 'messageEdit.html', controller: 'messageEditController', controllerAs: 'vm' })
        .otherwise({ redirectTo: '/' })
        ;
    }

    angular.module('cmBackOffice').config(httpInterceptionConfigurator);
    httpInterceptionConfigurator.$inject = ['$httpProvider'];

    function httpInterceptionConfigurator($httpProvider) {
        $httpProvider.interceptors.push('httpInterceptorService');
    }

})();