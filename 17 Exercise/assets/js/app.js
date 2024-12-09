'use strict';

$(document).ready(function () {
  $('tbody').load(
    'assets/js/users.json',
    function (responsiveTxt, statusTxt, xhr) {
      console.log(responsiveTxt, statusTxt, xhr);
    }
  );
});
