// 오픈메뉴

// .animate({속성}, 시간, 콜백함수)
// 콜백함수-animate가 끝나고 수행할 것이 있을 때 씀

//prependTo() 맨 앞으로 이동, ()의 첫번째 자식


/* 오픈네비 */
$('#header .all_line, #nav').on('mouseover', function () {
  $('#header .opennav').addClass('on')
  $('#nav').addClass('on')
})
$('#header .all_line, #nav').on('mouseleave', function () {
  $('#header .opennav').removeClass('on')
  $('#nav').removeClass('on')
})



$('.nav4 >li').on('click', function(){
  $(this).find('.depth2 >li').slideToggle()
})


// 호버하면 옆에 화살표뜨게히가!
// $('.nav4 >li').hover(function(){
//   $('.nav4 .depth2 >li::before').css({
//     opacity:1
//   })
// })

// $('.nav4 >li').hover(function(){
//   $(this).find('.depth2 >li').slideDown()
// }, function(){
//   $(this).find('.depth2 >li').slideUp()
// }
// ) 


//서치박스
$('.search label').on('click', function(){
  $(this).parent().toggleClass('on')
})


//스크롤
$(window).on('scroll', function(){
  var sct = $(this).scrollTop()
  if (sct > $(window).height()/2) {
    $('#header .top_menu').css({
      paddingBottom: '20px',
      background: 'rgba(0,0,0,1)'
    })
    $('#gotop').css({
      opacity:'1'
    })
  } else {
    $('#header .top_menu').css({
      paddingBottom: '50px',
      background: 'rgba(0,0,0,0)'
    })
    $('#gotop').css({
      opacity:'0'
    })
  }
})