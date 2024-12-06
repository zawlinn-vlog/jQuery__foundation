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
});
