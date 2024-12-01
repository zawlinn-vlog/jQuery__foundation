"use strict";

$(function () {
  // jQuery methods go here....

  $("#beforeBtn").on("click", function () {
    $("h3").before("<del class='text-danger'> Before Text </del>");
  });

  $("#afterBtn").on("click", function () {
    $("h3").after("<del class='text-danger'> After Text </del>");
  });

  $("#prepend").on("click", function () {
    $("h3").prepend("<del class='text-danger'> After Text </del>");
  });

  $("#append").on("click", function () {
    $("h3").append("<del class='text-danger'> After Text </del>");
  });

  $("#prependto").on("click", function () {
    $("<del class='text-danger'> After Text </del>").prependTo("h3");
  });

  $("#appendto").on("click", function () {
    $("<del class='text-danger'> After Text </del>").appendTo("h3");
  });

  $("#remove").click(function () {
    $("h3").remove();
  });

  $("#empty").click(function () {
    $("h3").empty();
  });

  $("#detach").click(function () {
    $("h3").detach();
  });
});
