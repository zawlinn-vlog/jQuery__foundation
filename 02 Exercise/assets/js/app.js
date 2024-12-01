'use strict';
/*     SHORTHAND      */
// $(function () {
//   console.log($('h1').html(), $('h1').text(), $('h1').nodeName);

//   $('button').on('click', function () {
//     alert($('h3').text());
//     console.log($('h3').html());
//   });
// });

(() => {
  console.log($('h1').html(), $('h1').text(), $('h1').nodeName);

  //   $('button').on('click', function () {
  // alert($('h3').text());
  // console.log($('h3').html());

  // alert($('h2:first').text());
  //     alert($('h2:last').html());
  //   });

  $('button').on('click', function () {
    // alert($('h2:nth(1)').text());

    let obj = $('h2').contents().text();
    obj = $('h2, h1').contents().filter('u, i ').text();
    // obj = $('h2').contents().filter('u').html(); // Undefined
    console.log(obj);
  });
})(jQuery);
