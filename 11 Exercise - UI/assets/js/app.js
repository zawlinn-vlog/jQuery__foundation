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
});
