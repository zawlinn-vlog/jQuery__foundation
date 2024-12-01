"use strict";

$(document).ready(function () {
  //   console.log($("p"));
  //   console.log($("p")[0]); // element
  //   console.log($("p").eq(3)); // obj
  //   $("h1").css("background", "gold");
  //
  //   $("p").eq(5).css({
  //     background: "red",
  //     color: "white",
  //     fontSize: "5rem",
  //   });
  //   $("p").mouseenter(function () {
  //     console.log("Mouse enter");
  //   });
  //   $("p").mouseover(function () {
  //     console.log("Mouse Over");
  //   });
  //   $("p").mouseleave(function () {
  //     console.log("Mouse leave");
  //   });
  //   $("p").mouseout(function () {
  //     console.log("Mouse Out");
  //   });
  //   $("p").hover(
  //     function () {
  //       console.log("IN");
  //     },
  //     function () {
  //       console.log("OUT");
  //     }
  //   );
  //   $("p").mousedown(function () {
  //     $(this).css({
  //       background: "purple",
  //       color: "white",
  //     });
  //   });
  //   $("p").mouseup(function () {
  //     $(this).css({
  //       background: "gold",
  //       color: "black",
  //     });
  //   });

  $(".container").on("click", function () {
    $(this).find(".color").css({
      background: "purple",
      borderRadius: "8px",
    });
  });

  let wrd = "                Welcome to my Party            ";
  console.log("Before using trim", wrd);

  wrd = $.trim(wrd);

  console.log("After using trim", wrd);

  wrd = "\n\n                Welcome to my Party            \n\n";

  console.log("Before using trim", wrd);

  wrd = $.trim(wrd);

  console.log("After using trim", wrd);
});
