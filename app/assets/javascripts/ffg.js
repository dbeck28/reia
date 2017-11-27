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

  $('.our-services-container .services .service-list div#armed-content').hide()
  $('.our-services-container .services .service-list div#business-profile-content').hide()
  $('.our-services-container .services .service-list div#child-support-content').hide()
  $('.our-services-container .services .service-list div#cyber-security-content').hide()
  $('.our-services-container .services .service-list div#electronic-counter-intel-content').hide()
  $('.our-services-container .services .service-list div#fingerprinting-content').hide()
  $('.our-services-container .services .service-list div#global-fraud-content').hide()
  $('.our-services-container .services .service-list div#due-diligence-content').hide()
  $('.our-services-container .services .service-list div#insurance-fraud-content').hide()
  $('.our-services-container .services .service-list div#health-fraud-content').hide()
  $('.our-services-container .services .service-list div#background-investigation-content').hide()
  $('.our-services-container .services .service-list div#surveillance-content').hide()
  $('.our-services-container .services .service-list div#undercover-ops-content').hide()
  $('.our-services-container .services .service-list div#data-retrieval-content').hide()
  $('.our-services-container .services .service-list div#service-of-process-content').hide()
  $('.our-services-container .services .service-list div#skip-trace-content').hide()
  $('.our-services-container .services .service-list div#tenant-screening-content').hide()
  $('.our-services-container .services .service-list div#terrorism-content').hide()
  $('.photo-grid-container .photo-grid p.president').hide()
  $('.photo-grid-container .photo-grid p.vice-pres').hide()
  $('.photo-grid-container .photo-grid p.cyber-vp').hide()
  $('.photo-grid-container .photo-grid p.protective-spec').hide()
  $('.photo-grid-container .photo-grid p.dir-crim').hide()
  $('.welcome-add-container').hide()

  $('.welcome-container .welcome a#more-about-us').on("click", function(event) {
    event.preventDefault();
    $('.welcome-add-container').toggle()
  });

  $('.photo-grid-container .photo-grid .staff a#president').on("click", function(event) {
    event.preventDefault();
    $('.photo-grid-container .photo-grid p.president').toggle()
  });

  $('.photo-grid-container .photo-grid .staff a#vice-pres').on("click", function(event) {
    event.preventDefault();
    $('.photo-grid-container .photo-grid p.vice-pres').toggle()
  });

  $('.photo-grid-container .photo-grid .staff a#cyber-vp').on("click", function(event) {
    event.preventDefault();
    $('.photo-grid-container .photo-grid p.cyber-vp').toggle()
  });

  $('.photo-grid-container .photo-grid .staff a#protective-spec').on("click", function(event) {
    event.preventDefault();
    $('.photo-grid-container .photo-grid p.protective-spec').toggle()
  });

  $('.photo-grid-container .photo-grid .staff a#dir-crim').on("click", function(event) {
    event.preventDefault();
    $('.photo-grid-container .photo-grid p.dir-crim').toggle()
  });

  $('.our-services-container .services .service-list a#armed').on("click" , function(event) {
    event.preventDefault();
    $('.our-services-container .services .service-list div#armed-content').toggle();
  });

  $('.our-services-container .services .service-list a#business-profiles').on("click" , function(event) {
    event.preventDefault();
    $('.our-services-container .services .service-list div#business-profile-content').toggle();
  });

  $('.our-services-container .services .service-list a#child-support-recovery').on("click" , function(event) {
    event.preventDefault();
    $('.our-services-container .services .service-list div#child-support-content').toggle()
  });

  $('.our-services-container .services .service-list a#cyber-security').on("click" , function(event) {
    event.preventDefault();
     $('.our-services-container .services .service-list div#cyber-security-content').toggle()
  });

  $('.our-services-container .services .service-list a#electronic-counter-intel').on("click" , function(event) {
    event.preventDefault();
    $('.our-services-container .services .service-list div#electronic-counter-intel-content').toggle()
  });

  $('.our-services-container .services .service-list a#fingerprinting').on("click" , function(event) {
    event.preventDefault();
    $('.our-services-container .services .service-list div#fingerprinting-content').toggle()
  });

  $('.our-services-container .services .service-list a#global-fraud').on("click" , function(event) {
    event.preventDefault();
    $('.our-services-container .services .service-list div#global-fraud-content').toggle()
  });

  $('.our-services-container .services .service-list a#insurance-fraud').on("click" , function(event) {
    event.preventDefault();
    $('.our-services-container .services .service-list div#insurance-fraud-content').toggle()
  });

  $('.our-services-container .services .service-list a#health-fraud').on("click" , function(event) {
    event.preventDefault();
    $('.our-services-container .services .service-list div#health-fraud-content').toggle()
  });

  $('.our-services-container .services .service-list a#background-investigation').on("click" , function(event) {
    event.preventDefault();
    $('.our-services-container .services .service-list div#background-investigation-content').toggle()
  });

  $('.our-services-container .services .service-list a#due-diligence').on("click" , function(event) {
    event.preventDefault();
     $('.our-services-container .services .service-list div#due-diligence-content').toggle()
  });

  $('.our-services-container .services .service-list a#surveillance').on("click" , function(event) {
    event.preventDefault();
    $('.our-services-container .services .service-list div#surveillance-content').toggle()
  });

  $('.our-services-container .services .service-list a#undercover-ops').on("click" , function(event) {
    event.preventDefault();
    $('.our-services-container .services .service-list div#undercover-ops-content').toggle()
  });

  $('.our-services-container .services .service-list a#data-retrieval').on("click" , function(event) {
    event.preventDefault();
    $('.our-services-container .services .service-list div#data-retrieval-content').toggle()
  });

  $('.our-services-container .services .service-list a#service-of-process').on("click" , function(event) {
    event.preventDefault();
    $('.our-services-container .services .service-list div#service-of-process-content').toggle()
  });

  $('.our-services-container .services .service-list a#skip-trace').on("click" , function(event) {
    event.preventDefault();
    $('.our-services-container .services .service-list div#skip-trace-content').toggle()
  });

  $('.our-services-container .services .service-list a#tenant-screening').on("click" , function(event) {
    event.preventDefault();
    $('.our-services-container .services .service-list div#tenant-screening-content').toggle()
  });

  $('.our-services-container .services .service-list a#terrorism').on("click" , function(event) {
    event.preventDefault();
    $('.our-services-container .services .service-list div#terrorism-content').toggle()
  });

});
