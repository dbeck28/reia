$(document).ready(function(){

    $(".menu-container .menu .about a").on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: $(".welcome-container").offset().top
          }, 800);
    })

    $(".menu-container .menu .services a").on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: $(".our-services-container").offset().top
          }, 800);
    })

    $(".menu-container .menu .contact a").on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: $(".contact-container").offset().top
          }, 800);
    })

    $(".menu-container .menu .our-team a").on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: $(".team-header").offset().top
          }, 800);
    })

});
