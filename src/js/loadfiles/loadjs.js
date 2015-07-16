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

    var ref = window.document.getElementsByTagName('script')[0];
    var script = window.document.createElement('script');
    script.src = src;
    script.id = id;
    ref.parentNode.insertBefore(script, ref);
    return script;
  };

  // Random number for cache busting
  var randomNumber = Math.round(Math.random() * 10000000000000);
  loadJS('/uc_cust/data/portal/js/sis_cs.js' + '?_=' + randomNumber, 'sis_cs_js');
})();
