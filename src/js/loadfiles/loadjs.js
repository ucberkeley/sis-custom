(function() {
  'use strict';

  /**
   * Slightly modified version of https://git.io/vtlVH
   */
  var loadJS = function(src, id) {
    var previousElement = document.getElementById(id);

    // Only add the JavaScript once to the page
    if (previousElement) {
      return;
    }

    /**
     * We need to be a bit evil here to avoid the flickering of the header
     * https://jira.berkeley.edu/browse/SISRP-7370
     */
    /* jshint evil: true */
    document.write('<script type="text/javascript" id="' + id + '" src="' + src + '"></script>');
  };

  // Random number for cache busting
  var randomNumber = Math.round(Math.random() * 10000000000000);
  loadJS('/uc_cust/data/portal/js/sis_cs.js' + '?_=' + randomNumber, 'sis_cs_js');
})();
