'use strict';

var api = require('./api');

var interval;

/**
 * Prepend an HTML node to another one
 */
var prependChild = function(parent, child) {
  parent.insertBefore(child, parent.firstChild);
};

/**
 * Remove the native Oracle bar
 */
var removeNativeBar = function() {
  var nativeBar = document.querySelector('#PT_HEADER');
  if (nativeBar) {
    nativeBar.parentNode.removeChild(nativeBar);
  }
};

/**
 * Decode a parameter until it no longer needs any decoding
 * @param {String} param The param you would like to decode
 * @return {String} Decoded param
 */
var decodeParam = function(param) {
  if (param && param.indexOf('%') !== -1) {
    return decodeParam(decodeURIComponent(param));
  }

  return param;
};

/**
 * Create the CalCentral bar
 * Example URL:
 * https://bcs-web-dev-03.is.berkeley.edu:8443/psc/bcsdev/EMPLOYEE/HRMS/c/UC_KITCHEN_SINK_FL.UC_FL_KITCHSINK_FL.GBL?ucFrom=CalCentral&ucFromLink=https://calcentral.berkeley.edu&ucFromText=Financial%20Aid
 * @param {Object} params Parameters passed through from the URL
 */
var createCalCentralBar = function(params) {
  var text = decodeParam(params.ucFromText) || 'CalCentral';
  var ucFromLink = decodeParam(params.ucFromLink);
  var calcentralBar = '<div class="uc-calcentral-logo-container">' +
    '<a href="' + ucFromLink + '" class="uc-calcentral-logo">' +
      'Back to CalCentral' +
    '</a>' +
  '</div>' +
  '<div class="uc-calcentral-back-container">' +
    '<a href="' + ucFromLink + '" class="uc-calcentral-back">' +
      'Return to ' + text +
    '</a>' +
  '</div>';

  var wrapper = document.createElement('div');
  wrapper.setAttribute('class', 'uc-calcentral-header');
  wrapper.innerHTML = calcentralBar;

  return wrapper;
};

/**
 * Add the CalCentral bar to the page
 * @param {Object} params Parameters passed through from the URL
 */
var addCalCentralBar = function(params) {
  var body = document.querySelector('body');
  var calcentralBar = createCalCentralBar(params);
  prependChild(body, calcentralBar);
};

/**
 * Add this class to the body so we know that the CalCentral bar has been added
 */
var addCalCentralCSSClass = function() {
  var body = document.querySelector('body');
  body.className += ' uc-calcentral-header-added';
};

/**
 * Load the bar when the correct query params are being passed through
 */
var loadBar = function() {
  var params = api.util.urlParams();
  var checkParams = (params.ucFrom && params.ucFromLink);

  // Make sure we check the params and only add it when it hasn't been added before
  if (checkParams && !document.querySelector('.uc-calcentral-header')) {
    removeNativeBar();
    addCalCentralBar(params);
    addCalCentralCSSClass();
  }
};

/**
 * We need to stop the interval when the DOM is loaded correctly
 */
var stopInterval = function() {
  clearInterval(interval);
};

/**
 * Check whether the body element exists
 */
var checkBody = function() {
  var body = document.querySelector('body');
  if (body) {
    stopInterval();
    loadBar();
  }
};

interval = setInterval(checkBody, 1);
