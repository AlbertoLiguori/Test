$(document).ready(function() {
  $("#show_hide").click(function () {
    $( ".men_ex" ).toggle({
      duration: 500,
    });
    $( "#recipe-page" ).toggle({
      duration: 500,
    });
  });
});

$(document).ready(function() {
  $("#hamburger-menu").click(function () {
    $( "#recipe-page" ).toggle({
      duration: 500,
    });
    $( ".menu" ).toggle({
      duration: 500,
    });
  });
});
