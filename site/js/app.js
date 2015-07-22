$(document).ready(function () {

  $('.button').mouseenter(function ( ){
    $(this)
    .velocity({ scale: "1.1"}, 1050,
  "easeInOut")
  .velocity("reverse");
});
  $('h1').click(function() {
    $(this)
    .velocity( { translateY: "-10px"}, 400);
    });
    $('h1').mouseleave(function() {
      $(this)
      .velocity( { translateY: "0"}, 1000);
    });
});
