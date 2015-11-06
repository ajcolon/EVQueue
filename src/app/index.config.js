(function () {
    'use strict';

    angular
        .module('EVQueue')
        .config(config);

    /** @ngInject */
    function config($logProvider, $stateProvider,$urlRouterProvider) {
        // Enable log
        $logProvider.debugEnabled(true);

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/login/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })
            .state('queue', {
                url: '/',
                templateUrl: 'app/queue/queue.html',
                controller: 'QueueController',
                controllerAs: 'vm'
            });
    }

})();
