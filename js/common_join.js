if (matchMedia("screen and (min-width:1024px)").matches) {
    /* 오픈네비 */
    $('#header .opennav, #nav').on('mouseover', function () {
        $('#header .opennav').addClass('on')
        $('#nav').addClass('on')
    })
    $('#header .opennav, #nav').on('mouseleave', function () {
        $('#header .opennav').removeClass('on')
        $('#nav').removeClass('on')
    })
    //서브메뉴
    $('.nav4 >li').on('click', function () {
        $(this).find('.depth2 >li').slideToggle()
    })


    /* 서치박스 */
    $('.search label').on('click', function () {
        $(this).parent().toggleClass('on')
    })
    // $('#sicon').on('click', function(){
    //     if($('#sbox').css('display') === 'none') {
    //         $('#sbox').css('display: block')
    //     } else {
    //         $('#sbox').hide()
    //     }
    // })


    /* 스크롤 */
    $(window).on('scroll', function () {
        var sct = $(this).scrollTop()
        if (sct > $(window).height() / 8) {
            $('#header .top_menu').addClass('on')
        } else {
            $('#header .top_menu').removeClass('on')
        }
    })


} else if (matchMedia("screen and (min-width:768px)").matches) {

} else {


}

