'use strict';

/**
 * MessageController
 */
app.controller('MessageController', function($scope, Message) {
  $scope.tab = new RSTab();

  Message.getNotifications(function(d) {
    $scope.notifications = d;
  });
  Message.getLetters(function(d) {
    $scope.letters = d;
  });
});
