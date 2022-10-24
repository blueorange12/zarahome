if(matchMedia("screen and (min-width:768px)").matches){
  $('.slide_g').slick({
    autoplay:true,
    arrows: false,
    dots:true,
    pauseOnHover: false,
    pauseOnDotsHover: true,
  })
  
  
  $('.storybox').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
  
  $('.reciperow').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    // prevArrow:'<button class="arrleft"><i class="fas fa-angle-left"></i></button>',
    // nextArrow:'<button class="arrright"><i class="fas fa-angle-right"></i></button>'
  });


} else {
  $('.slide_g').slick({
    autoplay:true,
    arrows: false,
    dots:true,
    pauseOnHover: false,
    pauseOnDotsHover: true,
  })
  
  
  $('.storybox').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $('.reciperow').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
}

)}
