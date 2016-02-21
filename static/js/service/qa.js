'use strict';

/*
 * 相关问题
 */
app.factory('RelatedQuestions', function($http) {
  return {
    get: function(callback) {
      var result = [
        {
          id: 'ad3dfad4',
          name: '数据结构',
        },
        {
          id: 'ad3dfad4',
          name: '数据结构',
        },
        {
          id: 'ad3dfad4',
          name: '数据结构',
        },
        {
          id: 'ad3dfad4',
          name: '数据结构',
        },
        {
          id: 'ad3dfad4',
          name: '数据结构',
        },
      ];
      callback(result);
    },
  }
});
