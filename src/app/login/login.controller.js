(function() {
    'use strict';

    angular
        .module('EVQueue')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($log,LoginService,$state) {
        var vm = this;
        vm.user = null;
        vm.logUser = function(){
            $log.log("user");
            LoginService.logUser(vm.user);
            $state.go("queue");
        };

    }
})();
