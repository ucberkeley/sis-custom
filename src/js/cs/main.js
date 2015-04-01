(function() {
  'use strict';

  var api = require('./api.js');


  var params = api.util.urlParams();

  if (params.ucFrom && params.ucFromLink) {

    // Make sure the back-button is actually shown
    var backContainer = document.querySelector('.ps_button_backnav');
    backContainer.classList.remove('psc_disabled');

    // Change the text of the back button and the actual link
    var backButton = document.querySelector('#PT_WORK_PT_BUTTON_BACK');
    var backButtonText = document.querySelector('.ps-text', backButton);
    backButtonText.textContent = params.ucFrom;
    backButton.setAttribute('href', decodeURIComponent(params.ucFromLink));

    // Hide the Campus solutions navigation
    var nav = document.querySelector('.ps_actions_cont');
    nav.style.display = 'none';
  }
})();
