(function() {
  'use strict';

  angular
    .module('EVQueue')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
