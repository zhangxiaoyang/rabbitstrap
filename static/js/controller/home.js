'use strict';
// Last modifed by zhangxiaoyang(2016/2/8)

/**
 * HomeController
 */
app.controller('HomeController', function($scope, Trends, User, Attention) {
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

  $scope.courses = [
    {'name': '数据结构', 'location': ['清华大学', '计算机系', '计算机专业', '数据结构'], 'time': '昨天 11:20'},
    {'name': '数据结构与算法', 'location': ['清华大学', '计算机系', '计算机专业', '数据结构与算法'], 'time': '前天 11:00'},
    {'name': 'C++程序设计', 'location': ['清华大学', '计算机系', '计算机专业', 'C++程序设计'], 'time': '11月5日 9:00'},
    {'name': '计算机组成原理', 'location': ['清华大学', '计算机系', '计算机专业', '计算机组成原理'], 'time': '11月5日 3:00'},
    {'name': '计算机网络', 'location': ['清华大学', '计算机系', '计算机专业', '计算机网络'], 'time': '11月5日 3:00'},
    {'name': '组合数学', 'location': ['清华大学', '计算机系', '计算机专业', '组合数学'], 'time': '11月5日 3:00'},
    {'name': 'C++程序设计', 'location': ['清华大学', '计算机系', '计算机专业', 'C++程序设计'], 'time': '11月5日 3:00'},
    {'name': '计算机组成原理', 'location': ['清华大学', '计算机系', '计算机专业', '计算机组成原理'], 'time': '11月5日 3:00'},
    {'name': '计算机网络', 'location': ['清华大学', '计算机系', '计算机专业', '计算机网络'], 'time': '11月5日 3:00'},
    {'name': '组合数学', 'location': ['清华大学', '计算机系', '计算机专业', '组合数学'], 'time': '2011年11月5日 3:00'},
  ];
});
