'use strict';

/*
 * 最近访客
 */
app.factory('Visitors', function($http) {
  return {
    get: function(callback, userId) {
      var result = [
        {
          id: 'ad3dfad4',
          name: '数据结构',
          logo: IMG_URL,
          desc: LONG_TEXT,
          path: { id: 'e20fea12', name: '清华大学;信息学院;计算机专业'},
          achievement: {
            like: GET_RANDOM(),
            flower: GET_RANDOM(),
            question: GET_RANDOM(),
            answer: GET_RANDOM(),
            upload: GET_RANDOM(),
          },
        },
        {
          id: 'ad3dfad4',
          name: '数据结构',
          logo: IMG_URL,
          desc: LONG_TEXT,
          path: { id: 'e20fea12', name: '清华大学;信息学院;计算机专业'},
          achievement: {
            like: GET_RANDOM(),
            flower: GET_RANDOM(),
            question: GET_RANDOM(),
            answer: GET_RANDOM(),
            upload: GET_RANDOM(),
          },
        },
        {
          id: 'ad3dfad4',
          name: '数据结构',
          logo: IMG_URL,
          desc: LONG_TEXT,
          path: { id: 'e20fea12', name: '清华大学;信息学院;计算机专业'},
          achievement: {
            like: GET_RANDOM(),
            flower: GET_RANDOM(),
            question: GET_RANDOM(),
            answer: GET_RANDOM(),
            upload: GET_RANDOM(),
          },
        },
        {
          id: 'ad3dfad4',
          name: '数据结构',
          logo: IMG_URL,
          desc: LONG_TEXT,
          path: { id: 'e20fea12', name: '清华大学;信息学院;计算机专业'},
          achievement: {
            like: GET_RANDOM(),
            flower: GET_RANDOM(),
            question: GET_RANDOM(),
            answer: GET_RANDOM(),
            upload: GET_RANDOM(),
          },
        },
        {
          id: 'ad3dfad4',
          name: '数据结构',
          logo: IMG_URL,
          desc: LONG_TEXT,
          path: { id: 'e20fea12', name: '清华大学;信息学院;计算机专业'},
          achievement: {
            like: GET_RANDOM(),
            flower: GET_RANDOM(),
            question: GET_RANDOM(),
            answer: GET_RANDOM(),
            upload: GET_RANDOM(),
          },
        },
      ];
      callback(result);
    },
  };
});
