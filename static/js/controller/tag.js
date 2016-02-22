'use strict';

/**
 * TagController
 */
app.controller('TagController', function($scope, Tag, HotQA) {
  var tagId = '1234';
  Tag.get(function(d) {
    $scope.tag = d;
  });

  HotQA.getByTag(function(d) {
    $scope.hotQA = d;
  }, tagId);
});
