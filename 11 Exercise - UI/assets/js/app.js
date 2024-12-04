"use strict";

$("document").ready(function () {
  $(".box").width("100px");
  $(".box").height("100px");
  $(".box").css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: ".5rem",
  });

  $(".shake").click(function () {
    /*
    Effects
    - shake
    - bounce
    - blind
    - clip
    - drop
    - explode
    - fade
    - highlight
    - puff
    - pulsate
    - size
    -

    */
    $(".text-bg-primary").effect(
      "shake",
      {
        direction: "up",
        distance: 50,
        times: 10,
      },
      3000
    );
  });

  $(".bounce").click(function () {
    $(".text-bg-secondary").effect(
      "bounce",
      {
        direction: "up",
        distance: 50,
        times: 10,
      },
      3000
    );
  });

  $(".blind").click(function () {
    $(".text-bg-success").effect(
      "blind",
      {
        direction: "left",
      },
      2000
    );
  });

  $(".clip").click(function () {
    $(".text-bg-info").effect("clip", 2000);
  });
  let position = [
    "CEO",
    "General Manager",
    "Manager",
    "Vice Manager",
    "Supervisor",
    "CFO",
    "Finance Manager",
    "Senior Account",
    "Accountant",
  ];

  $("#job").autocomplete({
    source: position,
  });

  $("form").submit(function (e) {
    e.preventDefault();
    let getJob = $("#job").val();
    window.alert(`My Job Position is ${getJob}`);
  });

  // ACCORDION

  $(".myaccordion").accordion();

  // TABs

  $(".myTab").tabs();

  // PROGRESS BARs

  $(".progress").progressbar({
    value: 40,
  });

  $(".progress").children().css({
    backgroundColor: "blue",
  });

  $(".myBtn").button();

  $(".myBtn-1").button({
    disabled: true,
  });

  $(".myBtn-2").button({
    icon: "ui-icon-flag",
  });

  $(".myBtn-3").button({
    icon: "ui-icon-star",
    iconPosition: "end",
    label: "Loading",

    showLabel: false,
  });

  $("#slider").slider({
    slide: function (e, val) {
      console.log(val.value);

      $("#loan").val(val.value);
    },
  });
});
