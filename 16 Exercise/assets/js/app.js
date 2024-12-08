"use strict";

$(document).ready(function () {
  const getEl = document.querySelector("#fontawesome");
  $("#copy").on("click", function () {
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

  $("#step-01, #step-02").slideUp();

  $("#btn-01, #btn-02").click(function () {
    $(this).next().slideToggle("slow");

    $(this).find(".icon").toggleClass("rotate");
  });

  //

  let count = 1;
  let maxCount = 4;

  let mainContainer = document.querySelector("form");

  $("#btn-add").on("click", function () {
    if (count <= maxCount) {
      const html = `<div class="form-group mt-4" id=el-${count}>
                <div class="row">
                  <div class="col">     
                    <input type="text" name="" id="" class="form-control" placeholder="09 xxx xxx xxx" />
                  </div>
                  <div class="col">
                    <button class="btn btn-danger" id="btn-del" type="button">Del</button>
                  </div>
                </div>
              </div>`;
      mainContainer.insertAdjacentHTML("beforeend", html);
      // $("form").append(html);

      count++;

      if (count == 5) {
        $(this).attr("disabled", true);
      }
    }
  });

  $("#addPhone").on("click", "#btn-del", function (e) {
    this.closest(".form-group").remove();
    count--;

    $("#btn-add").attr("disabled", false);
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
