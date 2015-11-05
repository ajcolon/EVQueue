(function() {
  'use strict';

  angular
    .module('EVQueue')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log) {
    //var vm = this;
    $log.log("Controller Init")

  }
})();
