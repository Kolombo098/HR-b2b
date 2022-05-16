
// Slider settings

$(document).ready(function(){
  $('.carousel__inner').slick({
      speed: 1200,
      prevArrow: '<button type="button" class="slick-prev"><img class="arrow" src="icon/arrow_left.png" alt=""></img></button>',
      nextArrow: '<button type="button" class="slick-next"><img class="arrow" src="icon/arrow_right.png" alt=""></img></button>',
      responsive: [
        {
          breakpoint: 968,
          settings: {
              arrows: false,
              infinite: true,
              dots: true,
              dotsClass: 'slick-dots'
          }
        }
      ]   
  });

  // $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function(){
  //   $(this)
  //     .addClass('catalog__class_active').siblings().removeClass('catalog__class_active')
  //     .closest('div.container').find('div.content').removeClass('catalog__class_active').eq($(this).index()).addClass('catalog__class_active')

  // });

//
// Tabs button
// 


  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.content').removeClass('content_active').eq($(this).index()).addClass('content_active');
  });


  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content-active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list-active');
      })
    });
  };

  toggleSlide('.more');
  toggleSlide('.back');


//
// Modal script
// 

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn();
  });

  $('[data-modal=order]').on('click', function() {
    $('.overlay, #order').fadeIn();
  });

  $('.button_catalog').each(function(i){
    $(this).on('click', function(){
      $('#order .pop-up__subtitle').text($('.catalog-item__name').eq(i).text());
    });
  });




  $('.pop-up__close').on('click', function() {
    $('.overlay, #order, #consultation, #thanks').fadeOut();
  });


//
// Form submit
// 

  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() { 
      $(this).find("input").val("");




      $('form').trigger('reset');
    });
    $('#order, #consultation').fadeOut();
    $('.overlay, #thanks').fadeIn();
    return false;
  });
});





