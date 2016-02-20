'use strict';

/*
 * RSTab Class
 */
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


/*
 * Add replaceAll to String object
 */
/**
 * ReplaceAll by Fagner Brack (MIT Licensed)
 * Replaces all occurrences of a substring in a string
 */
String.prototype.replaceAll = function( token, newToken, ignoreCase ) {
  var _token;
  var str = this + '';
  var i = -1;

  if(typeof token === 'string') {
    if(ignoreCase ) {
      _token = token.toLowerCase();
      while((
        i = str.toLowerCase().indexOf(
         _token, i >= 0 ? i + newToken.length : 0
        )) !== -1
      ) {
        str = str.substring( 0, i ) +
        newToken +
        str.substring( i + token.length );
      }
    } else {
      return this.split( token ).join( newToken );
    }
  }
  return str;
};
