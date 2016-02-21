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
  .when('/doc',
  {
    controller: 'DocController',
    templateUrl: '/static/partial/doc.html'
  })
  .when('/topic',
  {
    controller: 'TopicController',
    templateUrl: '/static/partial/topic.html'
  })
  .otherwise({ redirectTo: '/home' });
});


/*
 * Constants
 */
app.constant('TrendsType', {question: 0, answer: 1, upload: 2});
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
      dict[TrendsType.question] = '提问了';
      dict[TrendsType.answer] = '回答了';
      dict[TrendsType.upload] = '上传了';
      return dict[input];
    } else if(type == 'like') {
      var dict = {};
      dict[TrendsType.question] = '想知道';
      dict[TrendsType.answer] = '觉得赞';
      dict[TrendsType.upload] = '觉得赞';
      return dict[input];
    } else {
      console.log("transToChs Error!")
    }
  };
});
