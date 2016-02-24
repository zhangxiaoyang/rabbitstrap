'use strict';

/**
 * UserController
 */
app.controller('UserController', function($scope, User, Visitors) {
  $scope.tab = new RSTab();

  var userId = '1234';
  User.get(function(d) {
    $scope.user = d;
  }, userId);

  Visitors.get(function(d) {
    $scope.visitors = d;
  }, userId);
});
