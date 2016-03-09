'use strict';

/**
 * LoginController
 */
app.controller('LoginController', function($scope) {
  $scope.isLogin = true;
  $scope.setLoginDialog = function(isLogin) {
    $scope.isLogin = isLogin;
  };
});
