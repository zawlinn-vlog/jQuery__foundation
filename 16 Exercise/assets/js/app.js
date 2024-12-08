"use strict";

$(document).ready(function () {
  const getEl = document.querySelector("#fontawesome");
  $("button").on("click", function () {
    // getEl.select();

    console.log(navigator);

    try {
      navigator.clipboard.writeText(getEl.value);
    } catch (err) {
      console.log(err.message);
    }
    console.log(navigator.clipboard);

    $(this).text("Copied!");
  });

  //
});

// $(document).ready(function () {
//   $(".btn").on("click", function () {
//     $(".list-group")
//       .children()
//       .each(function (int) {
//         console.log($(this).text());
//       });

//     $(".list-group-item").each(function () {
//       let getInd = $(this).index();
//       let getText = $(this).text();
//       let getTitle = $(this).attr("title");

//       console.log(
//         `Index is : ${getInd} and text is ${getText} and title is ${getTitle}.`
//       );
//     });
//   });
// });
