'use strict';
// Last modifed by zhangxiaoyang(2016/2/8)

var app = angular.module('rsApp', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/home',
  {
    controller: 'HomeController',
    templateUrl: '/static/partial/home.html'
  })
  .otherwise({ redirectTo: '/home' });
});
