'use strict';

/*
 * 大家想知道
 */
app.factory('TopQuestions', function($http, TrendsType) {
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
