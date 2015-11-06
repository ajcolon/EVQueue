(function() {
    'use strict';

    angular
        .module('EVQueue')
        .controller('QueueController', MainController);

    /** @ngInject */
    function MainController($log,QueueService,$timeout) {
        $log.log("QueueController Init");
        var vm = this;
        vm.user = null;
        vm.isCollapsed = false;
        vm.queue =  {
            unplugged:[
                {"username":"unplugged","uuid":"21312"}
            ],
            plugged:[
                {"username":"plugged1","uuid":"12312"}
            ]
        };

        vm.getQueue = function(){
            QueueService.getQueue().then(function(data){
                vm.queue = data;
            });
        };

        vm.userIsQueued = false;

        vm.joinQueue = function(){
            vm.userIsQueued = true;
            QueueService.joinQueue({"username":vm.user}).then(function(data){
                vm.queue = data;
            });
        };

        vm.removeFromQueue = function(user){
            QueueService.removeQueue(user.uuid).then(function(data){
                vm.queue = data;
            });
        };

        $timeout(function(){
            vm.getQueue();
        },30000);

        vm.getQueue();
    }
})();
