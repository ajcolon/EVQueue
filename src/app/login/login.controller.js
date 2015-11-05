(function() {
    'use strict';

    angular
        .module('EVQueue')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($log,LoginService) {
        //var vm = this;
        $log.log("LoginController Init")

    }
})();
