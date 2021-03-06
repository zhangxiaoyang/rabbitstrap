'use strict';

var app = angular.module('rsApp', ['ngRoute']);
var gQA = [
    {'type': '关注了该问题', 'name': '周杰伦', 'content': '周杰伦1979年1月18日出生于台湾台北县（现新北市）[26]  ，祖籍福建省永春县[27]  。父亲周耀中是淡江中学的物理老师，母亲叶惠美是淡江中学的美术老师，周杰伦读初中二年级时，周耀中和叶惠美办理了离婚手续，并协议商定周杰伦归叶惠美抚养。因担心离婚不利于周杰伦的成长，他们决定先瞒着他。然而，不久后发生的一件事，却让周杰伦知道了事情的真相。周杰伦的作文《孝顺的老爸》被老师评为优秀作文，老师让他在课堂上将其作为范文朗读。课后一个男同学却嘲笑道：“你爸和你妈都离婚了，你骗谁呢?”父母的离异给周杰伦带来了巨大的伤害。[28]  课堂上他会经常走神，中考时周杰伦因为成绩差被拒绝入校，幸好因为擅长钢琴才被破格录取。', 'title': '东风破是一种怎样的体验66666是一种怎样的体验666', 'tags': ['IT', '计算机', '中国科学院'], 'like': '10.2k', 'award': '3.1w', 'datetime': '今天 10:12'},
    {'type': '', 'name': '周杰伦', 'content': '周杰伦1979年1月18日出生于台湾台北县（现新北市）[26]  ，祖籍福建省永春县[27]  。父亲周耀中是淡江中学的物理老师，母亲叶惠美是淡江中学的美术老师，周杰伦读初中二年级时，周耀中和叶惠美办理了离婚手续，并协议商定周杰伦归叶惠美抚养。因担心离婚不利于周杰伦的成长，他们决定先瞒着他。然而，不久后发生的一件事，却让周杰伦知道了事情的真相。周杰伦的作文《孝顺的老爸》被老师评为优秀作文，老师让他在课堂上将其作为范文朗读。课后一个男同学却嘲笑道：“你爸和你妈都离婚了，你骗谁呢?”父母的离异给周杰伦带来了巨大的伤害。[28]  课堂上他会经常走神，中考时周杰伦因为成绩差被拒绝入校，幸好因为擅长钢琴才被破格录取。', 'title': '东风破是一种怎样的体验66666是一种怎样的体验666', 'tags': ['IT', '计算机', '中国科学院'], 'like': '10.2k', 'award': '3.1w', 'datetime': '昨天 10:12'},
    {'type': '赞同了该回答', 'name': '周杰伦', 'content': '周杰伦1979年1月18日出生于台湾台北县（现新北市）[26]  ，祖籍福建省永春县[27]  。父亲周耀中是淡江中学的物理老师，母亲叶惠美是淡江中学的美术老师，周杰伦读初中二年级时，周耀中和叶惠美办理了离婚手续，并协议商定周杰伦归叶惠美抚养。因担心离婚不利于周杰伦的成长，他们决定先瞒着他。然而，不久后发生的一件事，却让周杰伦知道了事情的真相。周杰伦的作文《孝顺的老爸》被老师评为优秀作文，老师让他在课堂上将其作为范文朗读。课后一个男同学却嘲笑道：“你爸和你妈都离婚了，你骗谁呢?”父母的离异给周杰伦带来了巨大的伤害。[28]  课堂上他会经常走神，中考时周杰伦因为成绩差被拒绝入校，幸好因为擅长钢琴才被破格录取。', 'title': '东风破是一种怎样的体验66666是一种怎样的体验666', 'tags': ['IT', '计算机', '中国科学院'], 'like': '10.2k', 'award': '3.1w', 'datetime': '5月10日 10:12'},
    {'type': '', 'name': '周杰伦', 'content': '周杰伦1979年1月18日出生于台湾台北县（现新北市）[26]  ，祖籍福建省永春县[27]  。父亲周耀中是淡江中学的物理老师，母亲叶惠美是淡江中学的美术老师，周杰伦读初中二年级时，周耀中和叶惠美办理了离婚手续，并协议商定周杰伦归叶惠美抚养。因担心离婚不利于周杰伦的成长，他们决定先瞒着他。然而，不久后发生的一件事，却让周杰伦知道了事情的真相。周杰伦的作文《孝顺的老爸》被老师评为优秀作文，老师让他在课堂上将其作为范文朗读。课后一个男同学却嘲笑道：“你爸和你妈都离婚了，你骗谁呢?”父母的离异给周杰伦带来了巨大的伤害。[28]  课堂上他会经常走神，中考时周杰伦因为成绩差被拒绝入校，幸好因为擅长钢琴才被破格录取。', 'title': '东风破是一种怎样的体验66666是一种怎样的体验666', 'tags': ['IT', '计算机', '中国科学院'], 'like': '10.2k', 'award': '3.1w', 'datetime': '5月10日 10:12'},
    {'type': '打赏了该回答', 'name': '蔡依林', 'content': '蔡依林本名蔡宜凌，蔡依林本名蔡宜凌，蔡依林本名蔡宜凌，蔡依林本名蔡宜凌，蔡依林本名蔡宜凌，蔡依林本名蔡宜凌，蔡依林本名蔡宜凌，蔡依林本名蔡宜凌，蔡依林本名蔡宜凌，蔡依林本名蔡宜凌，蔡依林本名蔡宜凌，祖籍福建省泉州市[34]  ，1980年9月15日出生于中国台湾台北县新庄市（现新北市新庄区），在家中排行老二，有一个姐姐，父亲蔡柱陈从事过会计工作；母亲黄春美为人低调，鲜少在媒体面前出现，在台北医院担任志工有十年时间[35]  。蔡依林毕业于景美女中、并以保送方式进入辅仁大学英文系就读，与F.I.R乐队女主唱Faye为同班同学。[36]', 'title': '琴键上透着光 彩绘的玻璃窗 装饰着歌特式教堂 谁谁谁弹一段 一段流浪忧伤 顺着琴声方向看见 蔷薇依附十八世纪的油画上 在旁 静静欣赏 在想 你的浪漫 在看 是否多久都一样 a a fu shou a a fu shou yap so so sorry so so so moderato andantino portmento fortissimo 盗贼他偷走 修道士说no 梦醒来后我 一切都都没有', 'tags': ['IT', '动态规划', 'ACM'], 'like': '200', 'award': '30', 'datetime': '5月10日 14:35'},
    {'type': '收藏了该回答', 'name': '周杰伦', 'content': '周杰伦1979年1月18日出生于台湾台北县（现新北市）[26]  ，祖籍福建省永春县[27]  。父亲周耀中是淡江中学的物理老师，母亲叶惠美是淡江中学的美术老师，周杰伦读初中二年级时，周耀中和叶惠美办理了离婚手续，并协议商定周杰伦归叶惠美抚养。因担心离婚不利于周杰伦的成长，他们决定先瞒着他。然而，不久后发生的一件事，却让周杰伦知道了事情的真相。周杰伦的作文《孝顺的老爸》被老师评为优秀作文，老师让他在课堂上将其作为范文朗读。课后一个男同学却嘲笑道：“你爸和你妈都离婚了，你骗谁呢?”父母的离异给周杰伦带来了巨大的伤害。[28]  课堂上他会经常走神，中考时周杰伦因为成绩差被拒绝入校，幸好因为擅长钢琴才被破格录取。', 'title': '东风破是一种怎样的体验66666是一种怎样的体验666', 'tags': ['IT', '计算机', '中国科学院'], 'like': '10.2k', 'award': '3.1w', 'datetime': '5月10日 10:12'},
    {'type': '分享了该回答', 'name': '周杰伦', 'content': '周杰伦1979年1月18日出生于台湾台北县（现新北市）[26]  ，祖籍福建省永春县[27]  。父亲周耀中是淡江中学的物理老师，母亲叶惠美是淡江中学的美术老师，周杰伦读初中二年级时，周耀中和叶惠美办理了离婚手续，并协议商定周杰伦归叶惠美抚养。因担心离婚不利于周杰伦的成长，他们决定先瞒着他。然而，不久后发生的一件事，却让周杰伦知道了事情的真相。周杰伦的作文《孝顺的老爸》被老师评为优秀作文，老师让他在课堂上将其作为范文朗读。课后一个男同学却嘲笑道：“你爸和你妈都离婚了，你骗谁呢?”父母的离异给周杰伦带来了巨大的伤害。[28]  课堂上他会经常走神，中考时周杰伦因为成绩差被拒绝入校，幸好因为擅长钢琴才被破格录取。', 'title': '东风破是一种怎样的体验66666是一种怎样的体验666', 'tags': ['IT', '计算机', '中国科学院'], 'like': '10.2k', 'award': '3.1w', 'datetime': '5月10日 10:12'},
    {'type': '收藏了该回答', 'name': '周杰伦', 'content': '周杰伦1979年1月18日出生于台湾台北县（现新北市）[26]  ，祖籍福建省永春县[27]  。父亲周耀中是淡江中学的物理老师，母亲叶惠美是淡江中学的美术老师，周杰伦读初中二年级时，周耀中和叶惠美办理了离婚手续，并协议商定周杰伦归叶惠美抚养。因担心离婚不利于周杰伦的成长，他们决定先瞒着他。然而，不久后发生的一件事，却让周杰伦知道了事情的真相。周杰伦的作文《孝顺的老爸》被老师评为优秀作文，老师让他在课堂上将其作为范文朗读。课后一个男同学却嘲笑道：“你爸和你妈都离婚了，你骗谁呢?”父母的离异给周杰伦带来了巨大的伤害。[28]  课堂上他会经常走神，中考时周杰伦因为成绩差被拒绝入校，幸好因为擅长钢琴才被破格录取。', 'title': '东风破是一种怎样的体验66666是一种怎样的体验666', 'tags': ['IT', '计算机', '中国科学院'], 'like': '10.2k', 'award': '3.1w', 'datetime': '5月10日 10:12'},
];

app.config(function ($routeProvider) {
  $routeProvider
  // QA
  .when('/qa',
  {
    controller: 'QAController',
    templateUrl: '/static/partial/qa.html'
  })
  .when('/qadetail',
  {
    controller: 'QADetailController',
    templateUrl: '/static/partial/qadetail.html'
  })
  .when('/topic',
  {
    controller: 'TopicController',
    templateUrl: '/static/partial/topic.html'
  })
  // Course
  .when('/course',
  {
    controller: 'CourseController',
    templateUrl: '/static/partial/course.html'
  })
  .when('/course/:courseId',
  {
    controller: 'CourseIdController',
    templateUrl: '/static/partial/courseid.html'
  })
  .otherwise({ redirectTo: '/qa' });
});

/**
 * RootController
 */
app.controller('RootController', function($rootScope, $location, $window) {
  $rootScope.setReadingMode = function(mode) {
    $rootScope.readingMode = mode;
  };
  $rootScope.setAskMode = function(mode) {
    $rootScope.askMode = mode;
  };
  $rootScope.currNavTab = {
    'qa': '首页',
    'classmate': '同学帮',
    'course': '课程堂',
    '': '首页'
  }[($location.path() + '/').split('/')[1]];
  $rootScope.setCurrNavTab = function(tab) {
    $rootScope.currNavTab = tab;
  };
  $rootScope.isCurrNavTab = function(tab) {
    return $rootScope.currNavTab == tab;
  };
  $rootScope.goPath = function(path) {
    $location.path(path);
    $window.location.reload();
  };
});

/**
 * QAController
 */
app.controller('QAController', function($scope, $rootScope, $window) {
  $scope.selectedTab = '本校';
  $scope.isSelected = function(tab) {
     return $scope.selectedTab == tab; 
  };
  $scope.setSelectedTab = function(tab) {
    $scope.selectedTab = tab;
  };
  $scope.getSelectedTab = function() {
    return $scope.setSelectedTab;
  };

  var resetSideUI = function() {
    var nodes = document.querySelectorAll('.rs-card.sub-card');
    var rightSide = angular.element(nodes[nodes.length - 1]);
    var windowTop = rightSide.prop('offsetTop') + rightSide.prop('offsetHeight') - $window.pageYOffset;
    $scope.$apply(function() {
      $scope.showProfile = windowTop <= 0;
      $scope.profileWidth = rightSide.prop('offsetWidth') - 20 + 'px';
    });
  }
  angular.element($window).on('resize', resetSideUI);
  angular.element($window).bind('scroll', resetSideUI);

  $scope.readingOpen = {};
  $scope.setReadingOpen = function(index, open) {
    $scope.readingOpen[index] = open;
  }

  $scope.replySomebody = function(index) {
    $scope.reply = '回复 周杰伦: ';
  };

  $scope.qa = gQA;

  $scope.helperMode = false;
  $scope.isHelperMode = function() {
    return $scope.helperMode;
  }
  $scope.setHelperMode = function(mode) {
    $scope.helperMode = mode;
    if (mode) {
      alert("我可以帮你辅导考研哦，快到碗里来");
    }
  }
});

/**
 * QADetailController
 */
app.controller('QADetailController', function($scope, $rootScope, $window) {
  var resetSideUI = function() {
    var nodes = document.querySelectorAll('.rs-card.sub-card');
    var rightSide = angular.element(nodes[nodes.length - 1]);
    var windowTop = rightSide.prop('offsetTop') + rightSide.prop('offsetHeight') - $window.pageYOffset;
    $scope.$apply(function() {
      $scope.showProfile = windowTop <= 0;
      $scope.profileWidth = rightSide.prop('offsetWidth') - 20 + 'px';
    });
  }
  angular.element($window).on('resize', resetSideUI);
  angular.element($window).bind('scroll', resetSideUI);

  $scope.readingOpen = {};
  $scope.setReadingOpen = function(index, open) {
    $scope.readingOpen[index] = open;
  }

  $scope.replySomebody = function(index) {
    $scope.reply = '回复 周杰伦: ';
  };

  $scope.qa = gQA;
});

/**
 * TopicController
 */
app.controller('TopicController', function($scope, $rootScope, $window) {
  var resetSideUI = function() {
    var nodes = document.querySelectorAll('.rs-card.sub-card');
    var rightSide = angular.element(nodes[nodes.length - 1]);
    var windowTop = rightSide.prop('offsetTop') + rightSide.prop('offsetHeight') - $window.pageYOffset;
    $scope.$apply(function() {
      $scope.showProfile = windowTop <= 0;
      $scope.profileWidth = rightSide.prop('offsetWidth') - 20 + 'px';
    });
  }
  angular.element($window).on('resize', resetSideUI);
  angular.element($window).bind('scroll', resetSideUI);

  $scope.readingOpen = {};
  $scope.setReadingOpen = function(index, open) {
    $scope.readingOpen[index] = open;
  }

  $scope.replySomebody = function(index) {
    $scope.reply = '回复 周杰伦: ';
  };

  $scope.qa = gQA;
});

/**
 * CourseController
 */
app.controller('CourseController', function($scope, $rootScope, $window) {
  $scope.selectedTab = '课程';
  $scope.isSelected = function(tab) {
     return $scope.selectedTab == tab; 
  };
  $scope.setSelectedTab = function(tab) {
    $scope.selectedTab = tab;
  };
  $scope.getSelectedTab = function() {
    return $scope.setSelectedTab;
  };

  var resetSideUI = function() {
    var nodes = document.querySelectorAll('.rs-card.sub-card');
    var rightSide = angular.element(nodes[nodes.length - 1]);
    var windowTop = rightSide.prop('offsetTop') + rightSide.prop('offsetHeight') - $window.pageYOffset;
    $scope.$apply(function() {
      $scope.showProfile = windowTop <= 0;
      $scope.profileWidth = rightSide.prop('offsetWidth') - 20 + 'px';
    });
  }
  angular.element($window).on('resize', resetSideUI);
  angular.element($window).bind('scroll', resetSideUI);

  $scope.readingOpen = {};
  $scope.setReadingOpen = function(index, open) {
    $scope.readingOpen[index] = open;
  }

  $scope.replySomebody = function(index) {
    $scope.reply = '回复 周杰伦: ';
  };

  $scope.qa = gQA;
});

/**
 * CourseIdController
 */
app.controller('CourseIdController', function($scope, $rootScope, $window) {
  $scope.selectedTab = '资源';
  $scope.isSelected = function(tab) {
     return $scope.selectedTab == tab; 
  };
  $scope.setSelectedTab = function(tab) {
    $scope.selectedTab = tab;
  };
  $scope.getSelectedTab = function() {
    return $scope.setSelectedTab;
  };

  var resetSideUI = function() {
    var nodes = document.querySelectorAll('.rs-card.sub-card');
    var rightSide = angular.element(nodes[nodes.length - 1]);
    var windowTop = rightSide.prop('offsetTop') + rightSide.prop('offsetHeight') - $window.pageYOffset;
    $scope.$apply(function() {
      $scope.showProfile = windowTop <= 0;
      $scope.profileWidth = rightSide.prop('offsetWidth') - 20 + 'px';
    });
  }
  angular.element($window).on('resize', resetSideUI);
  angular.element($window).bind('scroll', resetSideUI);

  $scope.readingOpen = {};
  $scope.setReadingOpen = function(index, open) {
    $scope.readingOpen[index] = open;
  }

  $scope.replySomebody = function(index) {
    $scope.reply = '回复 周杰伦: ';
  };

  $scope.qa = gQA;
});

