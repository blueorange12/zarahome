if (matchMedia("screen and (min-width:1024px)").matches){
  /* 오픈네비 */
  $('#header .opennav, #nav').on('mouseover', function(){
    $('#header .opennav').addClass('on')
    $('#nav').addClass('on')
  })
  $('#header .opennav, #nav').on('mouseleave', function(){
    $('#header .opennav').removeClass('on')
    $('#nav').removeClass('on')
  })
  //서브메뉴
  $('.nav4 >li').on('click', function(){
    $(this).find('.depth2 >li').slideToggle()
  })
  
  
  /* 서치박스 */
  $('.search label').on('click', function(){
    $(this).parent().toggleClass('on')
  })
  
  
  /* 스크롤 */
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


} else if (matchMedia("screen and (min-width:768px)").matches) {

  
} else {

  $(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if (sct > $(window).height()/2) {
      $('.top_menu').addClass('on')
    } else {
      $('.top_menu').removeClass('on')
    }
  })

}

