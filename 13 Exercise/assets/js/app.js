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

  // param

  /*

    {
    scroll: true,
    scrollSensitivity:100
    scrollSpeed: 100
    }


  */
});
