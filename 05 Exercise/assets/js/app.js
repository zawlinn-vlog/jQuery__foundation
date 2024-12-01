"use strict";

$(document).ready(function () {
  // get Data
  function getData(obj, el) {
    let data = obj.value;
    // console.log(obj);
    $(el).text(data);
  }

  //

  $("#fname").keyup(function () {
    getData(this, ".fname");
  });

  //

  $("#lname").keyup(function () {
    getData(this, ".lname");
  });

  //

  $("#pass").keyup(function () {
    getData(this, ".pass");
  });

  //

  $("#cpass").keyup(function () {
    getData(this, ".cpass");
  });

  //

  $("#color").change(function () {
    getData(this, ".favColor");
  });

  //

  $("#fruit").change(function (e) {
    let data = $("#fruit").val();

    data = data.filter((val) => val !== "").join(", ");

    $(".favFruit").text(data);
  });

  //   console.dir($("#fruit"));
});
