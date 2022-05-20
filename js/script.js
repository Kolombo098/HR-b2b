
// Slider settings

$(document).ready(function(){
  
//
// Tabs button
// 

$('div.expert__tab').on('click', function() {
  $(this)
    .addClass('expert__tab_active').siblings().removeClass('expert__tab_active')
    .closest('div.expert').find('ul.expert__list').eq($(this).index()).addClass('expert__list_active').siblings().removeClass('expert__list_active')
    .find('div.expert__group').removeClass('expert__group_active')
    .eq($(this).find('div.expert__group').addClass('expert__group_active'));
});


  







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





