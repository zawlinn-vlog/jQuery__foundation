"use strict";

$(() => {
  $("#firstname").blur(function () {
    console.log("Firstname is working by blur.");
  });
  //
  $("#lastname").focus(function () {
    console.log("Last Name is Working by focus"); // active state
  });
  $("#lastname").focusin(function () {
    console.log("Last Name is Working by focus in");
  });
  $("#lastname").focusout(function () {
    console.log("Last Name is Working by focus out");
  });
  //
  //   $("#country").change(function () {
  //     console.log(`${this.value}`);
  //   });

  //   $("#lastname").select(function () {
  //     console.log(`${this.value}`);
  //   });

  let count = 0;

  $("#age").keydown(function () {
    count++;
    console.log(`Age Working by keydown - ${count < 10 ? "0" + count : count}`);
  });

  $("#nrc-symbol").keyup(function () {
    count++;
    console.log(`Age Working by keydown - ${count < 10 ? "0" + count : count}`);
  });
});
