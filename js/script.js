window.onload = function () {
    $('.main__slider').on('beforeChange', function(event, slick, currentSlide){
        $('.slick-center .main__slider__item').removeClass('big-main-img')
    });

    $('.main__slider').on('init afterChange', function(event, slick, currentSlide){
        $('.main__slider__item').removeClass('big-main-img')
        if ($('.slick-slide').hasClass('slick-active')) {
            $('.slick-center .main__slider__item').addClass('big-main-img')
        }
    });


    $('.main__slider').slick({
        centerMode: true,
        slidesToShow: 1,
        variableWidth: true,
        speed: 1000,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        nextArrow: `<button class="main-slider-next"></button>`,
        prevArrow: `<button class="main-slider-prev"></button>`,
        responsive: [
            {
                breakpoint: 1540,
                settings: {
                    variableWidth: false,
                    centerMode: false,
                }
            }
        ]
    });

    $('.brands-slider').slick({
        slidesToShow: 5,
        nextArrow: `<button class="brands-slider-next"></button>`,
        prevArrow: `<button class="brands-slider-prev"></button>`,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                slidesToShow: 2
                }
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


};