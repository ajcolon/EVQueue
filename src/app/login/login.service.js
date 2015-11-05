(function () {
    'use strict';

    angular
        .module('EVQueue')
        .service('LoginService', LoginService);


    function LoginService() {
        var user = null;
        this.logUser = function(username){
            user = username;
        };
        this.getUser = function(){
            return user;
        }
    }

})();
