'use strict';

// $(document).ready(function () {
//   $(".header").html("jQuery Initiate...");
// });

jQuery(document).ready(function () {
  /*   CLICK EVENT   */
  //   $(".header").click(function () {
  //     console.log(this);
  //     $(this).html("Change Text...").fadeOut("slow");
  //     // $(this).fadeOut("slow");
  //   });
  /*     Double Click Event */
  //   $(".header").dblclick(function () {
  //     $(this).html("Double Click...");
  //   });
  /*     BIND EVENT    */
  //   $(".header").bind("click", function () {
  //     $(this).html("Single Clck ....");
  //   });
  //   $('.header').bind('dblclick', function () {
  //     $(this).html('Double Click ....');
  //   });
  /* ON EVENT */
  //   $('.header').on('click', function () {
  //     $(this).html('This is ON event...');
  //   });
  $('.header').on('dblclick', function () {
    $(this).html('This is ON event...');
  });
});
