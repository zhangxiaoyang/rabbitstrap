'use strict';

var LONG_TEXT = 'SpaceX的创始人Elon Musk就是Draper大学的Speaker之一。Elon Musk在硅谷Draper大学的课堂上提到他做SpaceX这个公司的时候说，“这个想法就算在思想开放、创新大胆的硅谷，周边也有99%的人都是嗤之以鼻不屑一顾的，但是会有1%的人愿意认同这个奇葩的想法，甚至愿意放弃大公司的高薪酬和他一起干。而这1%，可能就是世界上最聪明的1%”。 　　其实这个故事对我的创业影响非常大，我也经常把这个故事和更多的人去分享，因为这个故事鼓励我们坚持自己的想法，就算与众不同，也要坚持做自己。 　　我们最早融资的时候，也遇到了类似的情况。我的创业项目叫做“厅客”，“厅客”其实是“客厅”这个词语反过来，因为我看到很多lifestyle business和一些有意思的创业，都是从家里的客厅里面开始的。他们在客厅里面做星盘占卜，做服装设计，做私家美厨，甚至有人直接把房间改造成了密室逃脱。于是做厅客的想法横空出世，用一个app连接这些有意思的服务提供者和消费者。有了这个想法，我们做了一个demo，满怀信心地开始约见投资人。但是见投资人的过程就像是过山车，在见了30多个投资人之后，都不太顺利。但是我们坚信这个方向，直到我们的天使投资人像天使一样出现了，聊了10分钟，他淡定地说“好”。我和我的合伙人当时都有点不太敢相信，就这样了？后来我问我们的天使投资人，为什么投我们，他说“看起来奇葩的想法，才更有潜力”。于是我更加坚信，创业初期，要坚持找到认可自己的1%。 ';
var IMG_URL = 'http://ww4.sinaimg.cn/large/659dc7b4jw1e96tf7pynej20u00gvwii.jpg';
var PREVIEW_URL = 'http://v.youku.com/v_show/id_XNzU3NDI2MzMy.html';
var GET_RANDOM = function() {
  return Math.floor(Math.random() * 500);
};


/*
 * 动态
 */
app.factory('Trends', function($http, TrendsType) {
  return {
    get: function(callback, tagId) {
      var result = [
        {
          id: 'ad3dfad4',
          type: TrendsType.question,
          author: {id: 'e20fea12', name: '小明', desc: LONG_TEXT, logo: IMG_URL, path: '清华大学;信息学院;计算机专业'},
          name: '如何快速复习C++',
          desc: LONG_TEXT,
          tags: [
            {id: 'e20fea12', name: '编程'},
            {id: 'e20fea12', name: '教程'},
            {id: 'e20fea12', name: 'C++'},
          ],
          path: { id: 'e20fea12', name: '清华大学;信息学院;计算机专业'},
          achievement: {
            like: GET_RANDOM(),
          },
          image: IMG_URL,
          time: '今天 23:12',
        },
        {
          id: 'ad3dfad4',
          type: TrendsType.question,
          author: {id: 'e20fea12', name: '小明', desc: LONG_TEXT, logo: IMG_URL, path: '清华大学;信息学院;计算机专业'},
          name: '如何快速复习C++',
          desc: LONG_TEXT,
          tags: [
            {id: 'e20fea12', name: '编程'},
            {id: 'e20fea12', name: '教程'},
            {id: 'e20fea12', name: 'C++'},
          ],
          path: { id: 'e20fea12', name: '清华大学;信息学院;计算机专业'},
          achievement: {
            like: GET_RANDOM(),
          },
          image: null,
          time: '昨天 23:12',
        },
        {
          id: 'ad3dfad4',
          type: TrendsType.answer,
          author: {id: 'e20fea12', name: '小明', desc: LONG_TEXT, logo: IMG_URL, path: '清华大学;信息学院;计算机专业'},
          name: '如何快速复习C++',
          desc: LONG_TEXT,
          tags: [
            {id: 'e20fea12', name: '编程'},
            {id: 'e20fea12', name: '教程'},
            {id: 'e20fea12', name: 'C++'},
          ],
          path: { id: 'e20fea12', name: '清华大学;信息学院;计算机专业'},
          achievement: {
            like: GET_RANDOM(),
          },
          image: null,
          time: '11月12日 23:12',
        },
        {
          id: 'ad3dfad4',
          type: TrendsType.upload,
          author: {id: 'e20fea12', name: '小明', desc: LONG_TEXT, logo: IMG_URL, path: '清华大学;信息学院;计算机专业'},
          name: '如何快速复习C++.pdf',
          desc: LONG_TEXT,
          tags: [
            {id: 'e20fea12', name: '编程'},
            {id: 'e20fea12', name: '教程'},
            {id: 'e20fea12', name: 'C++'},
          ],
          path: { id: 'e20fea12', name: '清华大学;信息学院;计算机专业'},
          achievement: {
            like: GET_RANDOM(),
          },
          image: null,
          time: '2014年11月12日 23:12',
        },
        {
          id: 'ad3dfad4',
          type: TrendsType.serve,
          author: {id: 'e20fea12', name: '小明', desc: LONG_TEXT, logo: IMG_URL, path: '清华大学;信息学院;计算机专业'},
          name: '算法辅导',
          desc: LONG_TEXT,
          tags: [
            {id: 'e20fea12', name: '编程'},
            {id: 'e20fea12', name: '教程'},
            {id: 'e20fea12', name: 'C++'},
          ],
          path: { id: 'e20fea12', name: '清华大学;信息学院;计算机专业'},
          achievement: {
            like: GET_RANDOM(),
          },
          image: null,
          time: '2014年11月12日 23:12',
        },
      ];
      callback(result);
    },
  };
});


/*
 * 用户
 */
app.factory('User', function($http) {
  return {
    get: function(callback) {
      var result = {
        id: 'ad3dfad4',
        name: '小明',
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
        experiences: [
          {time: '2015年1月', place: '网易', desc: '实习'},
          {time: '2014年8月', place: '腾讯', desc: '实习'},
          {time: '2013年12月', place: '中科院', desc: '三好学生'},
        ],
      };
      callback(result);
    },
  };
});


/*
 * 关注
 */
app.factory('Attention', function($http) {
  var thisService = {
    getCourses: function(callback, userId) {
      var result = [
        {
          id: 'ad3dfad4',
          name: '数据结构',
          logo: IMG_URL,
          desc: LONG_TEXT,
          path: { id: 'e20fea12', name: '清华大学;信息学院;计算机专业'},
          achievement: {
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
            question: GET_RANDOM(),
            answer: GET_RANDOM(),
            upload: GET_RANDOM(),
          },
        },
      ];
      callback(result);
      return thisService;
    },
    getUsers: function(callback, userId) {
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
      ];
      callback(result);
      return thisService;
    },
    getTags: function(callback, userId) {
      var result = [
        {
          id: 'ad3dfad4',
          name: '编程',
          logo: IMG_URL,
          desc: LONG_TEXT,
          achievement: {
            question: GET_RANDOM(),
            answer: GET_RANDOM(),
          },
        },
        {
          id: 'ad3dfad4',
          name: 'C++',
          logo: IMG_URL,
          desc: LONG_TEXT,
          achievement: {
            question: GET_RANDOM(),
            answer: GET_RANDOM(),
          },
        },
        {
          id: 'ad3dfad4',
          name: '计算机',
          logo: IMG_URL,
          desc: LONG_TEXT,
          achievement: {
            question: GET_RANDOM(),
            answer: GET_RANDOM(),
          },
        },
      ];
      callback(result);
      return thisService;
    },
  };
  return thisService;
});


/*
 * 广场
 */
app.factory('Square', function($http, TrendsType) {
  var thisService = {
    getQA: function(callback) {
      var result = [
        {
          id: 'ad3dfad4',
          type: TrendsType.question,
          author: {id: 'e20fea12', name: '小明', desc: LONG_TEXT, logo: IMG_URL, path: '清华大学;信息学院;计算机专业'},
          name: '如何快速复习C++',
          desc: LONG_TEXT,
          tags: [
            {id: 'e20fea12', name: '编程'},
            {id: 'e20fea12', name: '教程'},
            {id: 'e20fea12', name: 'C++'},
          ],
          path: { id: 'e20fea12', name: '清华大学;信息学院;计算机专业'},
          achievement: {
            like: GET_RANDOM(),
          },
          image: IMG_URL,
          time: '今天 23:12',
        },
        {
          id: 'ad3dfad4',
          type: TrendsType.question,
          author: {id: 'e20fea12', name: '小明', desc: LONG_TEXT, logo: IMG_URL, path: '清华大学;信息学院;计算机专业'},
          name: '如何快速复习C++',
          desc: LONG_TEXT,
          tags: [
            {id: 'e20fea12', name: '编程'},
            {id: 'e20fea12', name: '教程'},
            {id: 'e20fea12', name: 'C++'},
          ],
          path: { id: 'e20fea12', name: '清华大学;信息学院;计算机专业'},
          achievement: {
            like: GET_RANDOM(),
          },
          image: null,
          time: '昨天 23:12',
        },
      ];
      callback(result);
      return thisService;
    },
    getServices: function(callback) {
      var result = [
        {
          id: 'ad3dfad4',
          type: TrendsType.serve,
          author: {id: 'e20fea12', name: '小明', desc: LONG_TEXT, logo: IMG_URL, path: '清华大学;信息学院;计算机专业'},
          name: '算法辅导',
          desc: LONG_TEXT,
          tags: [
            {id: 'e20fea12', name: '编程'},
            {id: 'e20fea12', name: '教程'},
            {id: 'e20fea12', name: 'C++'},
          ],
          path: { id: 'e20fea12', name: '清华大学;信息学院;计算机专业'},
          achievement: {
            like: GET_RANDOM(),
          },
          image: null,
          time: '2014年11月12日 23:12',
        },
      ]
      callback(result);
      return thisService;
    },
    getUsers: function(callback, userId) {
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
      ];
      callback(result);
      return thisService;
    },
  };
  return thisService;
});
/*
 * 问答
 */
app.factory('QA', function($http, TrendsType) {
  return {
    getQuestion: function(callback, qaId) {
      var result = {
        id: 'ad3dfad4',
        type: TrendsType.question,
        author: {id: 'e20fea12', name: '小明', desc: LONG_TEXT, logo: IMG_URL, path: '清华大学;信息学院;计算机专业'},
        name: '如何快速复习C++',
        desc: LONG_TEXT,
        tags: [
          {id: 'e20fea12', name: '编程'},
          {id: 'e20fea12', name: '教程'},
          {id: 'e20fea12', name: 'C++'},
        ],
        path: { id: 'e20fea12', name: '清华大学;信息学院;计算机专业'},
        image: IMG_URL,
        time: '今天 23:12',
        achievement: {
          like: GET_RANDOM(),
          view: GET_RANDOM(),
          comment: GET_RANDOM(),
          answer: GET_RANDOM(),
        },
      };
      callback(result);
    },
    getAnswers: function(callback, qaId) {
      var result = [
        {
          id: 'ad3dfad4',
          type: TrendsType.answer,
          author: {id: 'e20fea12', name: '小明', desc: LONG_TEXT, logo: IMG_URL, path: '清华大学;信息学院;计算机专业'},
          name: '如何快速复习C++',
          desc: LONG_TEXT,
          achievement: {
            like: GET_RANDOM(),
          },
          image: IMG_URL,
          time: '今天 23:12',
        },
        {
          id: 'ad3dfad4',
          type: TrendsType.answer,
          author: {id: 'e20fea12', name: '小明', desc: LONG_TEXT, logo: IMG_URL, path: '清华大学;信息学院;计算机专业'},
          name: '如何快速复习C++',
          desc: LONG_TEXT,
          achievement: {
            like: GET_RANDOM(),
          },
          image: null,
          time: '昨天 23:12',
        },
      ];
      callback(result);
    },
  };
});


/*
 * 标签
 */
app.factory('Tag', function($http) {
  return {
    get: function(callback, tagId) {
      var result = {
        id: 'ad3dfad4',
        name: '编程',
        desc: LONG_TEXT,
        logo: IMG_URL,
        achievement: {
          attention: GET_RANDOM(),
          question: GET_RANDOM(),
          answer: GET_RANDOM(),
        },
      };
      callback(result);
    },
  };
});


/*
 * 文件
 */
app.factory('File', function($http, TrendsType) {
  return {
    get: function(callback, tagId) {
      var result = {
        id: 'ad3dfad4',
        type: TrendsType.upload,
        author: {id: 'e20fea12', name: '小明', desc: LONG_TEXT, logo: IMG_URL, path: '清华大学;信息学院;计算机专业'},
        name: '数据结构.pdf',
        desc: LONG_TEXT,
        path: { id: 'e20fea12', name: '清华大学;信息学院;计算机专业'},
        preview: PREVIEW_URL,
        time: '今天 23:12',
        achievement: {
          like: GET_RANDOM(),
          view: GET_RANDOM(),
          download: GET_RANDOM(),
          comment: GET_RANDOM(),
        },
      };
      callback(result);
    },
  };
});


/*
 * 评论
 */
app.factory('Comments', function($http) {
  return {
    get: function(callback, objectId) {
      var result = [
        {
          id: 'ad3dfad4',
          author: {id: 'e20fea12', name: '小明', desc: LONG_TEXT, logo: IMG_URL, path: '清华大学;信息学院;计算机专业'},
          desc: LONG_TEXT,
          time: '今天 23:12',
        },
        {
          id: 'ad3dfad4',
          author: {id: 'e20fea12', name: '小明', desc: LONG_TEXT, logo: IMG_URL, path: '清华大学;信息学院;计算机专业'},
          desc: LONG_TEXT,
          time: '昨天 23:12',
        },
      ];
      callback(result);
    },
  };
});


/*
 * 路径
 */
app.factory('Path', function($http) {
  return {
    get: function(callback, pathId) {
      var num = Math.round(Math.random() * 3) + 1;
      var result = {
        id: 'ad3dfad4',
        paths: [
          {id: 'ad3dfad4', name: '清华大学'},
          {id: 'ad3dfad4', name: '信息学院'},
          {id: 'ad3dfad4', name: '计算机专业'},
          {id: 'ad3dfad4', name: '数据结构'},
        ].slice(0, num),
        subpaths: (function() {
          console.log(num)
          switch(num) {
            case 1:
              return [
                {id: 'ad3dfad4', name:'清华大学;信息学院'},
                {id: 'ad3dfad4', name:'清华大学;美术学院'},
                {id: 'ad3dfad4', name:'清华大学;管理学院'},
                {id: 'ad3dfad4', name:'清华大学;艺术学院'},
                {id: 'ad3dfad4', name:'清华大学;汽车学院'},
                {id: 'ad3dfad4', name:'清华大学;航天学院'},
              ];
            case 2:
              return [
                {id: 'ad3dfad4', name:'清华大学;信息学院;计算机专业'},
                {id: 'ad3dfad4', name:'清华大学;信息学院;软件专业'},
                {id: 'ad3dfad4', name:'清华大学;信息学院;信息专业'},
                {id: 'ad3dfad4', name:'清华大学;信息学院;硬件专业'},
                {id: 'ad3dfad4', name:'清华大学;信息学院;情报专业'},
                {id: 'ad3dfad4', name:'清华大学;信息学院;密码专业'},
              ];
            case 3:
              return [
                {id: 'ad3dfad4', name:'清华大学;信息学院;计算机专业;C++程序设计'},
                {id: 'ad3dfad4', name:'清华大学;信息学院;计算机专业;数据结构'},
                {id: 'ad3dfad4', name:'清华大学;信息学院;计算机专业;算法分析'},
                {id: 'ad3dfad4', name:'清华大学;信息学院;计算机专业;操作系统'},
                {id: 'ad3dfad4', name:'清华大学;信息学院;计算机专业;计算机组成原理'},
                {id: 'ad3dfad4', name:'清华大学;信息学院;计算机专业;计算机网络'},
                {id: 'ad3dfad4', name:'清华大学;信息学院;计算机专业;微型机原理'},
              ];
          }
        })(),
        desc: LONG_TEXT,
        logo: IMG_URL,
        achievement: {
          attention: GET_RANDOM(),
          question: GET_RANDOM(),
          answer: GET_RANDOM(),
          upload: GET_RANDOM(),
        },
      };
      callback(result);
    },
  };
});


/*
 * 热门问答
 */
app.factory('HotQA', function($http) {
  return {
    getByTag: function(callback, tagId) {
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
    getByPath: function(callback, pathId) {
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
  };
});
