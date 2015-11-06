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

            //vm.queue = QueueService.getTestQueue();
        };

        vm.userIsQueued = false;

        vm.joinQueue = function(){
            vm.userIsQueued = true;
            QueueService.joinQueue({"username":vm.user}).then(function(data){
                vm.queue = data;
            });
        };


        var chargingStates = [
            "fa-battery-empty",
            "fa-battery-quarter",
            "fa-battery-half",
            "fa-battery-three-quarters",
            "fa-battery-full"
        ];
        var currChargingIndex = 0;
        vm.currentChargingClass = chargingStates[currChargingIndex];
        $timeout(function(){
            if(currChargingIndex > chargingStates.length){
                currChargingIndex = 0;
            }else{
                currChargingIndex += 1;
            }
            vm.currentChargingClass = chargingStates[currChargingIndex];
        },1000);

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
