'use strict';

var app = angular.module('rsApp', ['ngRoute', 'ngAnimate']);

/*
 * Config
 */
app.config(function($routeProvider) {
  $routeProvider
  .when('/home',
  {
    controller: 'HomeController',
    templateUrl: '/static/partial/home.html'
  })
  .when('/qa/:id',
  {
    controller: 'QAController',
    templateUrl: '/static/partial/qa.html'
  })
  .when('/user/:id',
  {
    controller: 'UserController',
    templateUrl: '/static/partial/user.html'
  })
  .when('/tag/:id',
  {
    controller: 'TagController',
    templateUrl: '/static/partial/tag.html'
  })
  .when('/file/:id',
  {
    controller: 'FileController',
    templateUrl: '/static/partial/file.html'
  })
  .when('/path/:id',
  {
    controller: 'PathController',
    templateUrl: '/static/partial/path.html'
  })
  .when('/service/:id',
  {
    controller: 'ServiceController',
    templateUrl: '/static/partial/service.html'
  })
  .otherwise({ redirectTo: '/home' });
});


/*
 * Constants
 */
app.constant('TrendsType', {question: 0, answer: 1, upload: 2, serve: 3});
app.run(function ($rootScope, TrendsType) {
  $rootScope.TrendsType = TrendsType;
});


/*
 * Filters
 */
app.filter('transToChs', function(TrendsType) {
  return function(input, type) {
    if(type == 'trends') {
      var dict = {};
      dict[TrendsType.question] = '发起问题';
      dict[TrendsType.answer] = '回答问题';
      dict[TrendsType.upload] = '上传资料';
      dict[TrendsType.serve] = '发布服务';
      return dict[input];
    } else if(type == 'like') {
      var dict = {};
      dict[TrendsType.question] = '想知道';
      dict[TrendsType.answer] = '觉得赞';
      dict[TrendsType.upload] = '觉得赞';
      dict[TrendsType.serve] = '觉得赞';
      return dict[input];
    } else {
      console.log("transToChs Error!")
    }
  };
});
