'use strict';

/**
 * FileController
 */
app.controller('FileController', function($scope, File, RelatedFiles, Comments) {
  var fileId = '1234';
  File.get(function(d) {
    $scope.file = d;
  });
  Comments.get(function(d) {
    $scope.comments = d;
  });

  RelatedFiles.get(function(d) {
    $scope.relatedFiles = d;
  }, fileId);
});
