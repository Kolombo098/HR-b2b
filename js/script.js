

$(document).ready(function(){
  


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
      })
  })


  $('div.hamburger').on('click', function() {
    $('a.hover').removeClass('hover')
  });
//
// Tabs button
// 

  $('div.script').on('click', function() {
    // .find('div.expert__tab').removeClass('expert__tab_active')
    $(this)
      $('div.expert__tab').removeClass('expert__tab_active')
      .eq($(this).find('div.expert__tab').addClass('expert__tab_active'))

      $('div.expert__group').removeClass('expert__group_active')
      .eq($(this).find('div.expert__group').addClass('expert__group_active'))
      
      $('ul.expert__list').removeClass('expert__list_active')
      .eq($(this).find('ul.expert__list').addClass('expert__list_active'));

  });




  //Modal

  $('div.button_phone, .button_order-call').on('click', function() {
    $(this)
      $('.modal').fadeIn();
  });


  $('div.back').on('click', function() {
    $(this)
      $('.modal').fadeOut();
  });

      // .addClass('expert__tab_active')
      // .closest('div.expert').find('ul.expert__list').eq($(this).index()).addClass('expert__list_active', 'animate__fadeInDown').siblings().removeClass('expert__list_active')
      // .find('div.expert__group').removeClass('expert__group_active')
      // .eq($(this).find('div.expert__group').addClass('expert__group_active'));
 



  //Smooth scroll

  $(window).scroll(function () {
    if($(this).scrollTop() > 800) {
      $('.button_mini').fadeIn();
      } else {
      $('.button_mini').fadeOut();

      }
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





