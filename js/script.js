$('.sliders').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    
    prevArrow: '<i class="fa-solid fa-circle-left prev"></i>',
    nextArrow: '<i class="fa-solid fa-circle-right next"></i>',
  });
$('.OurServices').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,

    responsive: [
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
    ]
  });

  