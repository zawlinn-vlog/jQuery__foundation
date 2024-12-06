"use strict";

$(document).ready(function () {
  //   $(".text-primary").parent().draggable();
  $(".text-primary")
    .parent()
    .draggable({
      // containment: "parent",
      containment: ".row",
      cursor: "grab",
      cursorAt: {
        top: 5,
      },
    });

  // $("form").controlgroup();

  $("#dob").datepicker({
    changeMonth: true,
    changeYear: true,
    // numberOfMonths: [1, 2],
    showAnim: "slideDown", // slide,
    duration: 1000,
    dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

    // minDate: 0, // Start form today, Today is index number 0
    //  maxDate: 5,

    minDate: "12/01/2024", // mm/dd/yy
    maxDate: "12/20/2024",

    dateFormat: "dd-mm-yy",
  });

  // $("input").checkboxradio({
  //   // disabled: true,
  // });

  // $("button").button({
  //   icon: "ui-icon-caret-2-e-w",
  // });

  // param

  /*

    {
    scroll: true,
    scrollSensitivity:100
    scrollSpeed: 100
    }


  */

  $("#startBooking").datepicker({
    numberOfMonths: 1,
    showAnim: "slideDown",
    dateFormat: "dd-mm-yy",
    minDate: 0,

    onClose: function (selectdate) {
      $("#endBooking").datepicker("option", "minDate", selectdate);
    },
  });

  $("#endBooking").datepicker({
    numberOfMonths: 1,
    showAnim: "slideDown",
    dateFormat: "dd-mm-yy",

    onClose: function (selectdate) {
      $("#startBooking").datepicker("option", "maxDate", selectdate);
    },
  });

  $(".submit").click(function () {
    console.log($("#dob").val());
  });
});
