angular.module("EVQueue").run(["$templateCache", function($templateCache) {$templateCache.put("app/login/login.html","<div class=\"row marketing\"><form><div class=\"form-group\"><label for=\"username\">Username</label> <input type=\"text\" ng-model=\"vm.user\" id=\"username\" placeholder=\"username\"></div><button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.logUser()\">Login</button></form></div>");
$templateCache.put("app/queue/queue.html","<div class=\"queue-view\"><div class=\"head-container\"><div class=\"container\"><div class=\"header\">EVQueue</div><div class=\"subhead\">Financial Engines</div><p>Simple utility app to keep track of the EV Cars queue. Go ahead and set your username and join the queue from your computer / phone whenever.</p><input placeholder=\"Username\" type=\"text\" class=\"form-control\" id=\"usr\" ng-model=\"vm.user\"> <button ng-disabled=\"vm.userIsQueued\" type=\"button\" class=\"btn btn-head\" ng-click=\"vm.joinQueue()\">Join Queue</button></div></div><div class=\"plugged row\"><div class=\"cols\" ng-repeat=\"p in vm.queue.plugged.slice().reverse() | limitTo: 4\"><span class=\"charging\"><i class=\"fa fa-battery-empty\" ng-class=\"vm.currentChargingClass\"></i></span> <span class=\"charging-text\" ng-bind=\"p.username\"></span></div></div><div class=\"row item\" ng-repeat=\"q in vm.queue.unplugged\" ng-click=\"vm.removeFromQueue(q)\"><div class=\"battery\"><i class=\"fa fa-battery-empty\"></i></div><div ng-bind=\"q.username\"></div><div class=\"close-btn\"><i class=\"fa fa-times-circle\"></i></div></div></div>");}]);