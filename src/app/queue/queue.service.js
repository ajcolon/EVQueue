(function () {
    'use strict';

    angular
        .module('EVQueue')
        .factory('QueueService', QueueService);


    function QueueService($http, $log, $q,API) {

        return {
            getQueue: getQueue,
            joinQueue:joinQueue,
            getTestQueue:getTestQueue
        };

        function getQueue() {
            return $http.get(API)
                .then(getQueueSuccess)
                ['catch'](getQueueFailed);

            function getQueueSuccess(response) {
                return response.data;
            }

            function getQueueFailed(error) {
                $log.error('XHR Failed for getQueue.' + error.data);
                return $q.reject(error);
            }
        }

        function getTestQueue() {
            return [{"username":"Joel"},{"username":"Test"}];
        }

        function joinQueue() {
            return $http.post(API)
                .then(joinQueueSuccess)
                ['catch'](joinQueueFailed);

            function joinQueueSuccess(response) {
                return response.data;
            }

            function joinQueueFailed(error) {
                $log.error('XHR Failed for getQueue.' + error.data);
                return $q.reject(error);
            }
        }
    }

})();
