'use strict';

/**
 * RootController
 */
app.controller('RootController', function($rootScope, $location, $window) {
  $rootScope.goPage = function(path) {
    $location.path(path);
    $window.location.reload();
  };
});
