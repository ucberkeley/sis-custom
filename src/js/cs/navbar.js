'use strict';

var api = require('./api');

var isBarLoaded = false;

var prependChild = function(parent, child) {
  parent.insertBefore(child, parent.firstChild);
};

var removeNativeBar = function() {
  var nativeBar = document.querySelector('#PT_HEADER');
  if (nativeBar) {
    nativeBar.parentNode.removeChild(nativeBar);
  }
};

// https://bcs-web-dev-03.is.berkeley.edu:8443/psc/bcsdev/EMPLOYEE/HRMS/c/UC_KITCHEN_SINK_FL.UC_FL_KITCHSINK_FL.GBL?ucFrom=CalCentral&ucFromLink=https://calcentral.berkeley.edu&ucFromText=Financial%20Aid
var createCalCentralBar = function(params) {
  var text = params.ucFromText || 'CalCentral';
  var calcentralBar = '<div class="uc-calcentral-logo-container">' +
    '<a href="' + params.ucFromLink + '" class="uc-calcentral-logo">' +
      'Back to CalCentral' +
    '</a>' +
  '</div>' +
  '<div class="uc-calcentral-back-container">' +
    '<a href="' + params.ucFromLink + '" class="uc-calcentral-back">' +
      'Return to ' + text +
    '</a>' +
  '</div>';

  var wrapper = document.createElement('div');
  wrapper.setAttribute('class', 'uc-calcentral-header');
  wrapper.innerHTML = calcentralBar;

  return wrapper;
};

var addCalCentralBar = function(params) {
  var body = document.querySelector('body');
  var calcentralBar = createCalCentralBar(params);
  prependChild(body, calcentralBar);
};

var loadBar = function() {
  if (isBarLoaded) {
    return;
  }
  isBarLoaded = true;
  var params = api.util.urlParams();
  var checkParams = (params.ucFrom && params.ucFromLink);

  if (checkParams) {
    removeNativeBar();
    addCalCentralBar(params);
  }
};

// We need both, 1 for testing and the other one when it's loaded on the page
loadBar();
document.addEventListener('DOMContentLoaded', loadBar);
