(function () {
    'use strict';

    angular
        .module('EVQueue')
        .factory('QueueService', QueueService);


    function QueueService($http, $log, $q,API) {

        return {
            getQueue: getQueue,
            joinQueue:joinQueue,
            getTestQueue:getTestQueue,
            removeQueue:removeQueue
        };

        function getQueue() {
            return $http.get(API + 'queue')
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
            return {
                unplugged:[
                    {"username":"unplugged","uuid":"21312"},
                    {"username":"unplugged","uuid":"12312"}
                ],
                plugged:[
                    {"username":"plugged1","uuid":"12312"},
                    {"username":"plugged2","uuid":"42142"}
                ]
            };
        }

        function joinQueue(user) {
            return $http.post(API+ 'queue',user)
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

        function removeQueue(uid) {
            return $http.delete(API+ 'queue/'+uid)
                .then(removeQueueSuccess)
                ['catch'](removeQueueFailed);

            function removeQueueSuccess(response) {
                return response.data;
            }

            function removeQueueFailed(error) {
                $log.error('XHR Failed for getQueue.' + error.data);
                return $q.reject(error);
            }
        }
    }

})();
