(function() {
  'use strict';

  /**
   * Slightly modified version of https://git.io/vtlVO
   */
  var loadCSS = function(href, id) {
    // Arguments explained:
    // `href` is the URL for your CSS file.
    // `before` optionally defines the element we'll use as a reference for injecting our <link>
    // By default, `before` uses the last <script> element in the head.
    // However, since the order in which stylesheets are referenced matters, you might need a more specific location in your document.
    // If so, pass a different reference element to the `before` argument and it'll insert before that instead
    // note: `insertBefore` is used instead of `appendChild`, for safety re: http://www.paulirish.com/2011/surefire-dom-element-insertion/
    var scripts = window.document.head.getElementsByTagName('script');
    var lastScript = scripts[scripts.length - 1];

    var ss;
    var previousElement = document.getElementById(id);

    // Check whether there is a CSS file that has been added before.
    // If so, don't add it again, but move it to the last element in the HEAD
    if (previousElement) {
      ss = previousElement;
    } else {
      ss = window.document.createElement('link');
      ss.rel = 'stylesheet';
      ss.href = href;
      ss.id = id;
      ss.media = 'all';
    }

    // inject link
    lastScript.parentNode.insertBefore(ss, lastScript);
    return ss;
  };

  // Random number for cache busting
  var randomNumber = Math.round(Math.random() * 10000000000000);

  // Count how many times we try to add the CSS
  var counter = 0;
  var interval = setInterval(function() {
    counter++;
    // We do this 50 times just to make sure the CSS is always the last CSS on the page
    if (counter === 50) {
      clearInterval(interval);
    }
    loadCSS('/uc_cust/data/portal/css/sis_cs.css' + '?_=' + randomNumber, 'sis_cs_css');
  }, 100);
})();
