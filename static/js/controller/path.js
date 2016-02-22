'use strict';

/**
 * PathController
 */
app.controller('PathController', function($scope, Path, HotQA) {
  var pathId = '1234';
  Path.get(function(d) {
    $scope.path = d;
  });

  HotQA.getByTag(function(d) {
    $scope.hotQA = d;
  }, pathId);
});
