"use strict";

$(document).ready(function () {
  $(".table-1 tbody").sortable({
    // axis: "x",
    // axis: "y",
    // containment: ".left",

    items: ".move",
    cancel: ".stop",
    connectWith: ".table-2 tbody",
    cursor: "grab",
    placeholder: "ui-state-highlight",
  });

  $(".table-2 tbody").sortable({
    connectWith: ".table-1 tbody",
    cancel: ".move",
  });

  $(".box").width("100px");
  $(".box").height("100px");
  $(".box").dialog({
    // autoOpen: false,
    autoOpen: true,
    width: 400,
    height: 200,
    title: "Are You sure to close",
    hide: "slide", // slideUp
    show: "slideDown",

    position: {
      at: "right bottom", // left top, left bottom, right, right top, right bottom, top, bottom
    },
  });
});
