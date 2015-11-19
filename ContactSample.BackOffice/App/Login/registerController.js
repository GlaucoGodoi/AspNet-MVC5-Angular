(function () {
    'use strict';
    angular
        .module('cmBackOffice')
        .controller('registerController', registerController);

    registerController.$inject = ['$location','loginDataService']; 

    function registerController($location, dataServices) {
        /* jshint validthis:true */
        var vm = this;

        vm.data = {
            email: null,
            password: null,
            confirmPassword: null
        };

        vm.actions = {
            registerUser: registerUser
        };

        vm.ui= {
            errors:[]
        }

        function registerUser() {
            vm.ui.errors = [];
            dataServices.registerUser(vm.data).then(handleSuccessRegister, handleFailedRegister);

            function handleSuccessRegister(response) {
                toastr.success('User registered.', 'Contact message'); 
                $location.path('/login');
                vm.ui.errors = [];
            }

            function handleFailedRegister(response) {
                
                if (response.data.modelState) {
                    for (var property in response.data.modelState) {
                        if (response.data.modelState.hasOwnProperty(property)) {
                            vm.ui.errors.push(response.data.modelState[property][0]);
                        }
                    }
                    
                }
            }
        }

        return vm;
    }
})();
