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
                    <input type="text" name="" id="phone-${count}" class="form-control" placeholder="09 xxx xxx xxx" />
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

  const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  function checkReg(reg, val) {
    return reg.test(val);
  }

  function success(el) {
    $(el).addClass("border-success");
    $(el).removeClass("border-danger");
  }

  function fail(el) {
    $(el).addClass("border-danger");
    $(el).removeClass("border-success");
  }

  $("#email").on("keyup", function () {
    if (checkReg(emailReg, this.value)) {
      success(this);
      $("#phone").removeAttr("disabled");
    } else {
      success(this);
      $("#phone").attr("disabled", true);
      $("#phone").val("");
      fail(this);
    }
  });

  //

  const phoneReg = /^09([0-9]{3}){2}/;

  $("#phone").on("keyup", function () {
    console.log(checkReg(phoneReg, this.value));
    if (checkReg(phoneReg, this.value)) {
      $("#comment").removeAttr("disabled");
      success(this);
    } else {
      fail(this);
      $("#comment").attr("disabled", true);
    }
  });

  //

  let maxlength = 100,
    currentLength = 0;

  $("#comment").on("keyup", function () {
    // console.log(this.value.length);
    currentLength = maxlength - this.value.length;
    $(".caption").text(`${currentLength}/ ${maxlength} Character is left`);
  });

  //

  let arr = [],
    comObj = {},
    getData;

  $("#submit").click(function (e) {
    e.preventDefault();
    comObj.email = $("#email").val();
    comObj.phone = $("#phone").val();
    comObj.comment = $("#comment").val();

    arr.push(comObj);

    localStorage.setItem("comments", JSON.stringify(arr));

    getData = JSON.parse(localStorage.getItem("comments"));

    console.log(getData, Boolean(getData));

    // if (localStorage.getItem("comments")) {
    //   console.log("has data");

    // } else {
    //   console.log("has not data");
    //   localStorage.setItem("comments", JSON.stringify(arr));
    // }

    console.log(comObj, arr);
  });

  //

  getData = JSON.parse(localStorage.getItem("comments"));

  const tBody = document.querySelector(".mainContent");

  getData.forEach((val, int) => {
    const table = `
      
                <tr>
                  <th>${int + 1}</th>
                  <th>${val.email}</th>
                  <th>${val.phone}</th>
                  <th>${val.comment}</th>
                </tr>
      
      `;

    console.log(table);

    tBody.insertAdjacentHTML("beforeend", table);
  });
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
