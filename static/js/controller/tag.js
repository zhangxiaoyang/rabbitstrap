'use strict';

/**
 * TagController
 */
app.controller('TagController', function($scope, Tag, RelatedTags) {
  var tagId = '1234';
  Tag.get(function(d) {
    $scope.tag = d;
  });

  RelatedTags.get(function(d) {
    $scope.relatedTags = d;
  }, tagId);
});
