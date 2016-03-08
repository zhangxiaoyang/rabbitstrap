'use strict';

/**
 * SquareController
 */
app.controller('SquareController', function($scope, Square) {
  $scope.tab = new RSTab();

  $scope.square = {};
  Square.getQA(function(d) {
    $scope.square.qa = d;
  }).getServices(function(d) {
    $scope.square.services = d;
  }).getUsers(function(d) {
    $scope.square.users = d;
  });
});
