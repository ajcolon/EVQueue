(function() {
    'use strict';

    angular
        .module('EVQueue')
        .controller('QueueController', MainController);

    /** @ngInject */
    function MainController($log,QueueService,$timeout,LoginService) {
        var vm = this;
        $log.log("QueueController Init");
        vm.user = LoginService.getUser();

        vm.getQueue = function(){
            vm.queue = QueueService.getTestQueue();
        };

        vm.userIsQueued = false;

        vm.joinQueue = function(){
            vm.userIsQueued = true;
            QueueService.joinQueue(vm.user);
            vm.getQueue();
        };

        $timeout(function(){
            vm.getQueue();
        },30000);

        vm.getQueue();
    }
})();
