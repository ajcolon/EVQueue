(function () {
    'use strict';

    angular
        .module('EVQueue')
        .config(config);

    /** @ngInject */
    function config($logProvider, $stateProvider) {
        // Enable log
        $logProvider.debugEnabled(true);

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'login/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })
            .state('queue', {
                url: '/queue',
                templateUrl: 'login/queue.html',
                controller: 'QueueController',
                controllerAs: 'vm'
            })
            .otherwise('/queue');

    }

})();
