'use strict';

/*
 * 相关标签
 */
app.factory('RelatedTags', function($http) {
  return {
    get: function(callback, tagId) {
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
