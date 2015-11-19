(function() {
    'use strict';

    angular.module('cmBackOffice').controller('loginController', loginController);

    loginController.$inject = ['loginDataService', '$location', 'localStorageService'];

    function loginController(loginDataService, $location, localStorage) {

        var vm = this;
        
        vm.data = {
            username: null,
            password: null,
            grant_type:'password'
        };

        vm.actions= {
            checkCredentials:checkCredentials,
            registerUser: registerUser
        }

        function registerUser() {
            $location.path('/register');
        }

        function checkCredentials() {
            loginDataService.checkCredentials(vm.data).then(handleLoginSuccess, handleLoginFailure);

            function handleLoginSuccess(response) {
                localStorage.saveData('authorizationData', { token: response.data.access_token, username: response.data.userName });
                $location.path('/messageList/1');
            }

            function handleLoginFailure(response) {
                $location.path('/loginerror');
            }
        }

        return vm;
    }

})();