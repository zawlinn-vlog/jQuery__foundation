"use strict";

$(function () {
  //   $("#para").fadeTo("slow", 0);
  //   $("#showEl").click(function () {
  //     $("#para").fadeTo("slow", 1);
  //   });

  //   let x = true;

  //   $("#showEl").on("click", function () {
  //     $("#para").toggleClass("invisible");

  //     if (x) {
  //       $("#para").attr("data-txt", "This is Paragraph of testing!");
  //       $("#para").attr("title", "This is Paragraph of testing!");

  //       x = !x;

  //       return -1;
  //     }

  //     console.log(x);
  //     $("#para").removeAttr("data-txt", "This is Paragraph of testing!");
  //     $("#para").removeAttr("title", "This is Paragraph of testing!");
  //     x = !x;
  //   });

  //   $(selector).show(speed, callback)
  //   $(selector).hide(speed, callback)
  //   $(selector).toggle(speed, callback)

  //   $("#para")
  //     .css({
  //       height: "400px",
  //       backgroundColor: "#efefef",
  //       padding: "2rem",
  //     })
  //     .slideUp();

  $("#para").width(500).height(100).css({
    backgroundColor: "#efefef",
    padding: "1rem",
    borderRadius: ".5rem",
  });

  $("#showEl").click(function () {
    // $("#para").hide(500, function () {
    //   $(this).show(500);
    // });
    // $("#para").toggle(500, function () {
    //   $(this).toggle(500);
    // });
    // $("#para").fadeOut("slow", function () {
    //   $(this).fadeIn("fast", function () {
    //     console.log(this);
    //     $(this).fadeOut("slow");
    //   });
    // });
    // $(selector).fadeIn(speed, callback)
    // $(selector).fadeOut(speed, callback)
    // $(selector).fadeToggle(speed, callback)
    // $("#para").fadeIn("slow");
    // $("#para").fadeOut("slow");
    // $("#para").fadeToggle(300);
    // $(selector).fadeTo(speed, opacity, callback)
    // $("#para").fadeTo(300, 0.5);
    // $(selector).slideUp(speed, callback)
    // $(selector).slideDown(speed, callback)
    // $(selector).slideToggle(speed, callback)
    // $("#para").slideUp(500);
    // $("#para").slideDown(500);
    // $("#para").slideToggle(500);
    // $(selector).animate({param}, speed, callback)
    // $("#para").animate(
    //   {
    //     left: "50%",
    //     opacity: "0.5",
    //     overflow: "hidden",
    //     width: "150px",
    //     height: "50px",
    //   },
    //   1000
    // );
    // $("#para").slideDown(5000);
  });

  $("#stopEl").click(function () {
    $("#para").stop();
  });

  /* 
  
  - GET OR SET
  $(selector).html() // if set val must included
  $(selector).text()
  $(selector).val()
  $(selector).contents()
  
  - ADD
  $(selector).before()
  $(selector).after()
  $(selector).prepend()
  $(selector).append()
  data.appendTo($(selector))

  - REMOVE

  $(selector).remove()
  $(selector).empty()
  $(selector).detach()

  - CSS 

  $(selector).css('property', 'value')
  $(selector).css({
    property: 'value',
    property: 'value',
    property: 'value',
    property: 'value',
  })
  $(selector).addClass('name')
  $(selector).removeClass('name')
  $(selector).toggleClass('name')


  - Attributes

  $(selector).attr('attrName', 'attrVal')
  $(selector).removeAttr('attrName', 'attrVal')


  - Dimension
  $(selector).width() - return element width
  $(selector).height() - return element height


  $(selector).innerWidth() - return element width with padding
  $(selector).innerHeight() - return element height with padding

  $(selector).outerWidth() - return element width with padding and border
  $(selector).outerHeight() - return element height with padding and border

  if included true 
  $(selector).outerHeight(true) - return element height with padding, border and margin

  - Traversing

  $(selector).parent()
  $(selector).parents()
  $(selector).parentsUntil()

  - Descendants

  $(selector).children()
  $(selector).find()

  - Siblings

  $(selector).siblings()
  $(selector).next()
  $(selector).nextAll()
  $(selector).nextUntil()
  $(selector).prev()
  $(selector).prevAll()
  $(selector).prevUntil()
  */
});
