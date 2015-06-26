(function() {
  'use strict';

  /**
   * Slightly modified version of https://git.io/vtlVH
   */
  var loadJS = function(src, cb) {
    var ref = window.document.getElementsByTagName('script')[ 0 ];
    var script = window.document.createElement('script');
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
    if (cb && typeof(cb) === 'function') {
      script.onload = cb;
    }
    return script;
  };

  // Random number for cache busting
  var randomNumber = Math.round(Math.random() * 10000000000000);
  loadJS('/uc_cust/data/portal/js/sis_cs.js' + '?_=' + randomNumber);
})();
