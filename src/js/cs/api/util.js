(function() {
  'use strict';

  /**
   * Get all the URL Parameters from the querystring
   * Base code is at http://stackoverflow.com/a/2880929
   * @return {Object} Object with key/value pairs for the querystring
   */
  var urlParams = function() {
    var urlParams = {};
    var match;
    var pl = /\+/g;  // Regex for replacing addition symbol with a space
    var search = /([^&=]+)=?([^&]*)/g;
    var decode = function(s) {
      return decodeURIComponent(s.replace(pl, ' '));
    };
    var query = window.location.search.substring(1);

    /* jshint -W084 */
    while (match = search.exec(query)) {
      urlParams[decode(match[1])] = decode(match[2]);
    }
    /* jshint +W084 */

    return urlParams;
  };

  module.exports = {
    urlParams: urlParams
  };
})();
