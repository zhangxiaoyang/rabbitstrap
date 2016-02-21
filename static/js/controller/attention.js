'use strict';

/**
 * AttentionController
 */
app.controller('AttentionController', function($scope, Attention) {
  $scope.tab = new RSTab();

  $scope.attention = {};
  Attention.getCourses(function(d) {
    $scope.attention.courses = d;
  }).getUsers(function(d) {
    $scope.attention.users = d;
  }).getTags(function(d) {
    $scope.attention.tags = d;
  });
});
