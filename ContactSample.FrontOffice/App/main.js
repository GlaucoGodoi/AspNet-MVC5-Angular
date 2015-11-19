(function() {
    'use strict';
    angular.module('contactApp', ['homeModule', 'contactMessageModule', 'ngRoute']);

    angular.module('contactApp').config(routeConfigurator);

    routeConfigurator.$inject = ['$routeProvider'];

    function routeConfigurator($routeProvider) {
        $routeProvider
            .when('/', { template: '<div class="jumbotron">This is the root. And I am set directly from the route!!!<br/><a href="#/initial">Home</a></div>' })
            .when('/initial', { templateUrl: 'static/home/Initial.html', controller: 'homeController', controllerAs: 'vm' })
            .when('/about', { templateUrl: 'static/home/About.html', controller: 'homeController', controllerAs: 'vm' })
            .when('/news', { templateUrl: 'static/home/News.html', controller: 'homeController', controllerAs: 'vm' })
            .otherwise('/');
    }

})();