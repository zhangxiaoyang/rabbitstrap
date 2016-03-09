'use strict';

/*
 * 相关服务
 */
app.factory('RelatedServices', function($http) {
  return {
    get: function(callback, fileId) {
      var result = [
        {
          id: 'ad3dfad4',
          name: '数据结构.pdf',
        },
        {
          id: 'ad3dfad4',
          name: '数据结构.pdf',
        },
        {
          id: 'ad3dfad4',
          name: '数据结构.pdf',
        },
        {
          id: 'ad3dfad4',
          name: '数据结构.pdf',
        },
        {
          id: 'ad3dfad4',
          name: '数据结构.pdf',
        },
      ];
      callback(result);
    },
  }
});
