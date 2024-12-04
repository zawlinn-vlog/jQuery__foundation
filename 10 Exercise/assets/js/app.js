"use strict";

$(document).ready(function () {
  $(".box").width("100px");
  $(".box").height("100px");

  //   $(".is").click(function () {
  //     if ($(".box").is($(".bg-success"))) {
  //       $(".bg-primary").hide("slow");
  //     }
  //   });

  //   $(".not").click(function () {
  //     $(".box").not(".bg-primary").css({
  //       backgroundColor: "purple",
  //       color: "#fff",
  //     });
  //     // console.log($(".box").not(".bg-primary"));
  //   });

  let count = 0;
  $(".even").on("click", function () {
    const arr = $(".box").even().get(count).classList;
    console.log(arr);
    count++;

    if (count >= arr.length) count = 0;
  });

  console.log($.isFunction(function show() {}));

  console.log(Array("a", "b"));

  let arr = [1, 2, 3, 4];

  console.log($.isArray([]));
  console.log($.isArray(Array("a", "b")));
  console.log($.isArray(new Array()));
  console.log($.isArray([...arr]));

  console.log($.isPlainObject({}));
  console.log($.isPlainObject(new Object()));

  console.log($.isEmptyObject({}));
  console.log($.isEmptyObject({ name: "Zaw Linn" }));

  $(".hide").on("click", function () {
    // Show - Hide - Toggle

    // $(".box").hide("slow");
    // $(".box").show("slow");
    // $(".box").toggle("slow");

    // FadeIn - FadeOut - FadeToggle

    // $(".box").fadeOut("slow");
    // $(".box").fadeIn("slow");
    // $(".box").fadeToggle("slow");

    // $(".box").slideUp("slow");
    // $(".box").slideDown("slow");
    // $(".box").slideToggle("slow");

    // count++;

    // $(".bg-primary").animate(
    //   {
    //     width: "200px",
    //     height: "200px",
    //     background: "purple",
    //   },
    //   1000
    // );
    $(".bg-primary").delay(1000).animate(
      {
        width: "200px",
        height: "200px",
        background: "purple",
      },
      1000
    );
  });
});
