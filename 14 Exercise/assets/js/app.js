"use strict";

$(document).ready(function () {
  $("#tooltip").tooltip({
    // show: 500,
    // hide: 500,

    // show: "bounce",
    // hide: "explode",

    show: {
      effect: "shake",
      duration: 1000,
    },
    hide: {
      effect: "explode",
      duration: 500,
    },

    // content: `This is jQuery UI. Thanks for using our libs.`,
    content: function () {
      return `<img src='../img/logo.png' width=60 /> <h1> This is Heading </h1><p> lorem Ipsum is simply dummy text of the printing and typesetting industry </p>`;
    },
  });

  $("#dob")
    .datepicker({
      changeMonth: true,
      changeYear: true,
    })
    .tooltip({
      show: "slideDown",
    });

  //   $("p").scroll(function () {
  //     console.log($(this).scrollTop());
  //   });

  $(".btn-danger").click(function () {
    console.log($(".text-secondary").scrollTop());
  });

  // :empty
  //
  //   $(":empty").addClass("text-bg-dark");
  //   $("ul li:empty").addClass("text-bg-dark");

  //   $("p:empty").css("background-color", "purple");

  // :not

  //   $("li:not(ul li)").addClass("text-bg-info");
  //   $("ol li:not(li:empty)").addClass("text-bg-info");

  // :first
  //   $("li:first").addClass("text-bg-success");

  // :last

  //   $("ol li:last)").addClass("text-bg-info");

  // visible

  //   $(":visible").css("background-color", "purple");

  // hidden

  //   $(":hidden").show();

  $(".box.box-3").css({
    width: "100px",
    height: "100px",
    // backgroundColor: "purple",
  });
});
