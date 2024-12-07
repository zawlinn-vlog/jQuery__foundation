"use strict";

$(document).ready(function () {
  $("input").addClass("shadow-none");

  // let getPass

  let getPass;

  const checkReg = function (reg, val) {
    return reg.test(val);
  };

  // SUCCESS

  const success = el => {
    $(el).removeClass("border-danger");
    $(el).addClass("border-success");
  };

  // DENIED

  const denied = el => {
    $(el).removeClass("border-success");
    $(el).addClass("border-danger");
  };

  // FULLNAME

  const nameReg = /[A-Za-z]/;

  $(".fullName").on("keyup", function () {
    if (checkReg(nameReg, this.value)) success(this);
    else denied(this);
  });

  // PASSWORD

  const passReg = /[A-Za-z0-9!@#$%^&*()_-]{8}/;

  $("#pass").on("keyup", function () {
    if (checkReg(passReg, this.value)) {
      success(this);
      getPass = this.value;
    } else denied(this);
  });

  $("#cpass").on("keyup", function () {
    if (checkReg(passReg, this.value) && getPass == this.value) success(this);
    else denied(this);
  });

  // EMAIL

  const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  $("#email").on("keyup", function () {
    if (checkReg(emailReg, this.value)) success(this);
    else denied(this);
  });

  // DOB

  $("#dob").datepicker({
    showAnim: "slideDown",
    changeMonth: true,
    changeYear: true,
  });
});
