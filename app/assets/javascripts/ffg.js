$(document).ready(function(){

    $(".menu-container .menu .screener a").on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: $(".screener-container").offset().top
          }, 800);
    })

    $('.screener-container .screener form').on('submit', function(event) {

      var $form = $(this)
      var data = $form.serialize();


      $.ajax({
        type: "post",
        url: "/investments/",
        dataType: "html",
        data: data
      }).done(function(response) {
        console.log(response);
        $(response).appendTo('.screener-container');
        })
      })

});


