'use strict';

/**
 * HomeController
 */
app.controller('HomeController', function($scope, User, TopQuestions) {
  $scope.tab = new RSTab();

  User.get(function(d) {
    $scope.user = d;
  });

  TopQuestions.get(function(d) {
    $scope.topQuestions = d;
  });
});
