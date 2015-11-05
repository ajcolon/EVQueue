(function() {
    'use strict';

    angular
        .module('EVQueue')
        .controller('LoginController', MainController);

    /** @ngInject */
    function MainController($log) {
        //var vm = this;
        $log.log("LoginController Init")

    }
})();
