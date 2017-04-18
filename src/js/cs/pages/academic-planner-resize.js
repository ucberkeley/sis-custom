(function(document) {
  'use strict';

  // Make sure we only execute this on the planner page
  var isOnPlanner = window.location.href.indexOf('SCI_PLNR_FL.SCI_PLNR_FL.GBL') !== -1;

  var resizeWindow = function() {
    document.addEventListener('DOMContentLoaded', function() {
      window.dispatchEvent(new Event('resize'));
    });
  };

  var init = function() {
    if (isOnPlanner) {
      resizeWindow();
    }
  };

  init();
})(document);
