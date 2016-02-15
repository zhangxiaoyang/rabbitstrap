'use strict';
// Last modifed by zhangxiaoyang(2016/2/8)

/**
 * RootController
 */
app.controller('RootController', function($rootScope) {
  $rootScope.Trans = new RSTrans();
  $rootScope.Like = new RSLike();
});
