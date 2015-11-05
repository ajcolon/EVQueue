(function() {
    'use strict';

    angular
        .module('EVQueue')
        .controller('QueueController', MainController);

    /** @ngInject */
    function MainController($log) {
        //var vm = this;
        $log.log("QueueController Init")

    }
})();
