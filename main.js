

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 2500,
        loop: true
    });
  });



  Fancybox.bind("#gallery a", {
    groupAll : true,
   
  });


  $(".mobile-btn").on("click", function () {
    $(".header__menu").toggleClass("header__menu-show");
});
  