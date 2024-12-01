"use strict";

$(function () {
  $("#changesty").on("click", function () {
    $("h3").add("h4, h5").css({
      background: "purple",
      color: "white",
      padding: ".5rem 1rem",
      display: "inline-block",
    });
  });

  $("#addAttr").click(function () {
    $("h3").add("h4").attr("class", "text-primary");
  });

  $("#addAttrs").click(function () {
    $("h3").add("h4").attr({
      title: "This is Title",
      id: "Header",
      class: "text-danger",
    });
  });

  $("#removeAttr").click(function () {
    $("h3").add("h4").removeAttr("id title class");
  });

  $("#addClass").click(function () {
    $("p").addClass("text-primary");
  });

  $("#removeClass").click(function () {
    $("p").removeClass("text-primary");
  });

  $("#toggleClass").click(function () {
    $("p").toggleClass("text-primary");
  });

  $("#cloneBtn").click(function () {
    $(".targetEl").clone().appendTo($(".clone"));
  });
});
