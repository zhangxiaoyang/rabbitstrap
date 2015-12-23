'use strict';

var app = angular.module('rsApp', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
  .when('/home',
  {
    //controller: 'HomeController',
    templateUrl: '/static/partial/home.html'
  })
  .otherwise({ redirectTo: '/home' });
});
app.controller('RootCtrl', function($scope, $interval) {
  var flag = true;
  $scope.notice = "有10条新的问答哦，点我查看。";
  $interval(function() {
    $scope.notice = flag
      ? "有10条新的问答哦，点我查看。"
      : "您还没有订阅标签哦！赶紧点我订阅，尊享个性化推荐。";
    flag = !flag;
  }, 5000);


  $scope.goReadingMode = function() {
    $scope.readingMode = true;
  }
  $scope.goPublishMode = function() {
    $scope.publishMode = true;
  }
});


$(function() {
  $('.rs-modal .rs-close').click(function () {
    $(this).closest('.rs-modal').hide();
  });
  $('.notice').click(function() {
    $('.rs-modal').show();
  });
});
