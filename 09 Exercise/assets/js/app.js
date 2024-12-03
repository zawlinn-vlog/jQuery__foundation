"use strict";

$(document).ready(function () {
  //   console.log($(".col-1"));
  //   console.log($(".col-1")[0]);
  //   console.log($(".col-1").get($(".col-1").length - 1));
  //   console.log($(".col-1").get(2).className);
  //   console.log($(".col-1").get(2).classList);
  //   console.log([...$(".col-1").get(2).classList]);
  //   console.log(Array.from($(".col-1").get(2).classList).includes("col"));
  //   console.log($(".col-1").get(2).classList.contains("col-3"));

  $(".time").text(new Date());

  $(".reload").click(function () {
    location.reload();
  });

  $(".wrap").click(function () {
    $(".time").wrap('<div class="wrapper"> </div>');
  });

  $(".unwrap").click(function () {
    $(".time").unwrap();
  });

  let count = 1;
  $(".getOffset").click(function () {
    console.log($(".box-" + count).offset());

    count++;

    if (count > $(".col-1").length) count = 1;
  });

  $(".getPos").click(function () {
    console.log($(".box-" + count).position());

    count++;

    if (count > $(".col-1").length) count = 1;
  });

  $(".col-1").parent().css({
    background: "purple",
    color: "#fff",
  });

  //   $(".col-1").parentsUntil(".container").css({
  //     background: "purple",
  //     color: "#fff",
  //   });

  //   $(".col-1").parents().css({
  //     background: "purple",
  //     color: "#fff",
  //   });
});
