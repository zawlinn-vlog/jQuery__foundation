'use strict';

$(document).ready(function () {
  const divEl = document.createElement('div');

  function loadData() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      console.log(this);
    };

    xhttp.open('GET', './assets/js/users.json');

    xhttp.send();

    console.log(xhttp);
  }

  loadData();
});
