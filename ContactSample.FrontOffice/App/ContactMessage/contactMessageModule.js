(function () {
    'use strict';

    angular.module('contactMessageModule', ['ngRoute']);

    angular.module('contactMessageModule').config(routeConfigurator);
    angular.module('contactMessageModule').run(run);

    routeConfigurator.$inject = ['$routeProvider'];
    run.$inject = ['$location'];

    function routeConfigurator($routeProvider) {
        $routeProvider
            .when('/contact', { template: '<div class="jumbotron text-center">Contact landing page.<br/><a href="#description">Description</a></div>' })
            .when('/description', { templateUrl: '../static/contactMessage/description.html', controller: 'descriptionController', controllerAs: 'vm' })
            .when('/form', { templateUrl: '../static/contactMessage/form.html', controller: 'formController', controllerAs: 'vm' })
            .when('/thanks', { templateUrl: '../static/contactMessage/Thanks.html', controller: 'formController', controllerAs: 'vm' });
    }

    function run($location) {
        if ($location.$$absUrl.indexOf('Contact') > 0) {
            $location.path('/contact');
        }
    }
})();