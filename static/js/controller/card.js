'use strict';

/**
 * CardController
 */
app.controller('CardController', function($scope, User) {
  var userId = '1234';
  User.get(function(d) {
    $scope.user = d;
  }, userId);
});
