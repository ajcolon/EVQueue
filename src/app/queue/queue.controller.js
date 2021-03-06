(function() {
    'use strict';

    angular
        .module('EVQueue')
        .controller('QueueController', MainController);

    /** @ngInject */
    function MainController($log,QueueService,$interval) {
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
            if(vm.user == "" || vm.user == null){return};
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
            "fa-battery-full",
            "fa-battery-empty",
            "fa-battery-empty",
            "fa-battery-empty"
        ];
        vm.currentChargingClass = chargingStates[0];
        $interval(function(){

            var currindex = chargingStates.indexOf(vm.currentChargingClass);

            if(currindex < 5){
                currindex++;
            }else{
                currindex = 0;
            }
            vm.currentChargingClass = chargingStates[currindex];
        },1500);

        vm.removeFromQueue = function(user){
            QueueService.removeQueue(user.uuid).then(function(data){
                vm.queue = data;
            });
        };

        $interval(function(){
            vm.getQueue();
        },30000);

        vm.getQueue();
    }
})();
