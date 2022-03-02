$(function() {

  $('.m-menuLink').click(function() {
    $('.m-menuBox').toggleClass('m-menuBox-s');
  });

  $('.m-drop').click(function() {
    $('.m-dropboxs').toggleClass('m-dropboxs-s');
  });

  $('.flexslider').flexslider({
      directionNav: true,
      pauseOnAction: false
  });

});
