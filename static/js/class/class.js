'use strict';

var RSTab = function(tabs) {
  this.resetTabs(tabs);
};
RSTab.prototype.resetTabs = function(tabs) {
  this._tabs = tabs;
  this._currentTab = null;
};
RSTab.prototype.getTabs = function(tabs) {
  return this._tabs;
};
RSTab.prototype.setCurrentTab = function(tab) {
  this._currentTab = tab;
};
RSTab.prototype.getCurrentTab = function(tab) {
  return this._currentTab;
};
RSTab.prototype.isCurrentTab = function(tab) {
  return this._currentTab == tab; 
};

var RSTrans = function() {
  this.dict = {
    'question': '提问了',
    'answer': '回答了',
    'upload': '上传了',
    'teach': '辅导了',
    
    '提问了': 'question',
    '回答了': 'answer',
    '上传了': 'upload',
    '辅导了': 'teach',
  }
};
RSTrans.prototype.toChs = function(en) {
  return this.dict[en];
};
RSTrans.prototype.toEn = function(chs) {
  return this.dict[chs];
};

var RSLike = function() {
  this.dict = {
    'question': '想知道',
    'answer': '觉得赞',
    'upload': '觉得赞',
    'teach': '觉得赞',
  };
};
RSLike.prototype.toChs = function(type) {
  return this.dict[type];
};