angular.module("EVQueue").run(["$templateCache", function($templateCache) {$templateCache.put("app/login/login.html","<div class=\"row marketing\"><form><div class=\"form-group\"><label for=\"username\">Username</label> <input type=\"text\" ng-model=\"vm.user\" id=\"username\" placeholder=\"username\"></div><button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.logUser()\">Login</button></form></div>");
$templateCache.put("app/queue/queue.html","<div class=\"container queue-view\"><button type=\"button\" class=\"btn btn-info\" ng-click=\"vm.joinQueue()\">Refresh List</button> <button type=\"button\" class=\"btn btn-info\" ng-disabled=\"vm.userIsQueued\" ng-click=\"vm.joinQueue()\">Join Queue</button><div class=\"row item\" ng-repeat=\"q in vm.queue\"><div ng-bind=\"q.username\"></div></div></div>");}]);