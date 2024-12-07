"use strict";

const proList = [
  "HyperText Markup Language (HTML)",
  "Cascading Stylesheet (CSS)",
  "JavaScript (JS)",
  "jQuery",
  "Hypertext Preprocessor (PHP)",
  "mySQL",
  "React JS",
];

let formObj = {};

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

  //

  const phReg = /^09([0-9]{3}){2}/;

  $("#phone").on("keyup", function () {
    if (checkReg(phReg, this.value)) success(this);
    else denied(this);
  });

  $("#favlan").autocomplete({
    source: proList,
  });

  $(":submit").on("click", function (e) {
    e.preventDefault();

    formObj.firstName = $("#fname").val();
    formObj.lastName = $("#lname").val();
    formObj.password = $("#pass").val();
    formObj.email = $("#email").val();
    formObj.birthDate = $("#dob").val();
    formObj.phoneNumber = $("#phone").val();
    formObj.favProgramming = $("#favlan").val();
    formObj.gender = $(":radio").val();
    formObj.currentCountry = $("#country").val();
    // formObj.img = $("#upload").src;

    var tmppath = URL.createObjectURL(event.target.files[0]);

    console.log(tmppath);

    console.log(formObj);
  });
});
