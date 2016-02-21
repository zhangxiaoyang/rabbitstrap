'use strict';

/**
 * TrendsController
 */
app.controller('TrendsController', function($scope, Trends) {
  $scope.tab = new RSTab();

  Trends.get(function(d) {
    $scope.trends = d;
  });
});
