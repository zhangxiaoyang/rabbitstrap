'use strict';
// Last modifed by zhangxiaoyang(2016/2/8)

/**
 * HomeController
 */
app.controller('HomeController', function($scope, Trends, User, Attention, TopQuestions) {
  $scope.tab = new RSTab();
  $scope.tab2 = new RSTab();

  Trends.get(function(d) {
    $scope.trends = d;
  });

  User.get(function(d) {
    $scope.user = d;
  });

  $scope.attention = {};
  Attention.getCourses(function(d) {
    $scope.attention.courses = d;
  }).getUsers(function(d) {
    $scope.attention.users = d;
  }).getTags(function(d) {
    $scope.attention.tags = d;
  });

  TopQuestions.get(function(d) {
    $scope.topQuestions = d;
  });
});
