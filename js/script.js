

$(document).ready(function(){
//Carousel

$('.carousel__inner').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: false,
  arrows: true,
  centerPadding: '10px',
  prevArrow: '<button type="button" class="slick-prev"><img src="../icon/leftArrow.svg" alt="arrow"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="../icon/rightArrow.svg" alt="arrow"></button>',

  responsive: [
    {
      breakpoint: 1101,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 578,
      settings: {
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1 
      }
    } 
  ]
});
 
$('.logo').slick({
  slidesToShow: 9,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  dots: false,
  arrows: false,
  centerPadding: '10px',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});
  


// Hamburger


const menu = document.querySelector('.header__navigation'),
  menuItem = document.querySelectorAll('.header__navigation-item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('header__navigation_active');

  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('header__navigation_active');
      });
  });


  $('div.hamburger').on('click', function() {
    $('a.hover').removeClass('hover');
  });
//
// Tabs button
// 

  $('div.script').on('click', function() {
    // .find('div.expert__tab').removeClass('expert__tab_active')
    $(this);
      $('div.expert__tab').removeClass('expert__tab_active')
      .eq($(this).find('div.expert__tab').addClass('expert__tab_active'));

      $('div.expert__group').removeClass('expert__group_active')
      .eq($(this).find('div.expert__group').addClass('expert__group_active'));
      
      $('ul.expert__list').removeClass('expert__list_active')
      .eq($(this).find('ul.expert__list').addClass('expert__list_active'));

  });




  //Modal

  $('div.button_phone, .button_order-call').on('click', function() {
    $(this);
      $('.modal_cost').fadeIn();
  });


  $('div.back').on('click', function() {
    $(this);
      $('.modal').fadeOut();
  });

  // $('div.overlay').on('click', function() {
  //   $(this);
  //     $('.modal').fadeOut();
  // });

  // $('div.back_pop-up').on('click', function() {
  //   $(this);
  //     $('.pop-up').fadeOut();
  // });

      // .addClass('expert__tab_active')
      // .closest('div.expert').find('ul.expert__list').eq($(this).index()).addClass('expert__list_active', 'animate__fadeInDown').siblings().removeClass('expert__list_active')
      // .find('div.expert__group').removeClass('expert__group_active')
      // .eq($(this).find('div.expert__group').addClass('expert__group_active'));
 
  //Order call

  $('form.form__appeare').on('click', function() {
    $(this)
      .addClass('form__appeare_active'); 
      $('a.cost-link').addClass('cost-link_active');
  });


  //Smooth scroll

  $(window).scroll(function () {
    if($(this).scrollTop() > 800) {
      $('.button_mini').fadeIn();
      } else {
      $('.button_mini').fadeOut();

      }
  });
  





// Form submit
// 

  $('.form_order-call').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart_call.php",
      data: $(this).serialize()
    }).done(function() { 
      $(this).find("input").val("");

      $('form').trigger('reset');

    });
    $('#modal').fadeOut();
    $('#thanks').fadeIn();


    return false;
  });

  $('.form_cost-calculation').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart_cost.php",
      data: $(this).serialize()
    }).done(function() { 
      $(this).find("input").val("");

      $('form').trigger('reset');
    });
    $('#modal').fadeOut();
    $('#thanks').fadeIn();


    return false;
  });

  $("#phone_1").mask("+7(999) 999-99-99");
  $("#phone_2").mask("+7(999) 999-99-99");
  $("#phone_3").mask("+7(999) 999-99-99");

//Form appeare

$('button.button_cost-calculation').on('click', function() {
  $(this);
    $('.form_cost-calculation').fadeIn();
    $('.button_form').fadeIn();
});




 



















// working tabs


// $('div.expert__tab').on('click', function() {
//   $(this)
//     .addClass('expert__tab_active').siblings().removeClass('expert__tab_active')
//     .closest('div.expert').find('ul.expert__list').eq($(this).index()).addClass('expert__list_active').siblings().removeClass('expert__list_active')
//     .find('div.expert__group').removeClass('expert__group_active')
//     .eq($(this).find('div.expert__group').addClass('expert__group_active'));
// });



// function toggleSlide(item) {
//   $(item).each(function(i) {
//     $(this).on('click', function(e) {
//       e.preventDefault();
//       $('.catalog-item__content').eq(i).toggleClass('catalog-item__content-active');
//       $('.catalog-item__list').eq(i).toggleClass('catalog-item__list-active');
//     })
//   });
// };


// $('div.expert').on('click', 'li:not(.expert__tab_active)', function() {
  //   $(this)
  //     .addClass('expert__tab_active').siblings().removeClass('expert__tab_active')
  //     .closest('div.expert').find('ul.expert__list').removeClass('expert__list_active').eq($(this).index()).addClass('expert__list_active');
  //     console.log('скрипт прошел');
  // });


  

  // toggleSlide('.more');
  // toggleSlide('.back');

  // console.log('скрипт прошел');


});





