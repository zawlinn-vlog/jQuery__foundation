"use strict";

$(document).ready(function () {
  $("input").on("keyup", function () {
    if ($("input").val() === "") {
      $(this).addClass("border border-danger");

      $(this).removeClass("border border-success");
    } else {
      $(this).removeClass("border border-danger");

      $(this).addClass("border border-success");
    }
  });
});
