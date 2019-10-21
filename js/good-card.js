window.onload = function () {
    $('.good-cart__container__left_slider').slick({
        nextArrow: `<button class="good-card-btn-next"></button>`,
        prevArrow: `<button class="good-card-btn-prev"></button>`,
        asNavFor: '.good-cart__container__left_slider-bottom',
        fade: true,
        infinite: false,
        responsive: [
        {
            breakpoint: 1250,
            settings: {
                asNavFor: null,
                fade: false,
                infinite: true
            }
        }
    ]
    });
    if ($(window).width() > '1250'){
        $('.good-cart__container__left_slider-bottom').slick({
            nextArrow: `<button class="good-card-btn-next"></button>`,
            prevArrow: `<button class="good-card-btn-prev"></button>`,
            asNavFor: '.good-cart__container__left_slider',
            slidesToShow: 3,
            infinite: false,
            focusOnSelect: true,
        })
    }
    $('.good-cart__container__color-container_img').click(function () {
        if ($(this).hasClass('good-cart__container__color-container_img-select')) {
            $(this).removeClass('good-cart__container__color-container_img-select')
        } else {
            $('.good-cart__container__color-container_img').removeClass('good-cart__container__color-container_img-select')
            $(this).addClass('good-cart__container__color-container_img-select')
        }
    })
    $('.good-cart__container__btns_to-card-fav').click(function () {
        if ($(this).hasClass('good-cart__container__btns_to-card-fav2')) {
            $(this).removeClass('good-cart__container__btns_to-card-fav2')
        } else {
            $(this).addClass('good-cart__container__btns_to-card-fav2')
        }
    })
    $('.good-cart__container__btns_to-card-sr').click(function () {
        if ($(this).hasClass('good-cart__container__btns_to-card-sr2')) {
            $(this).removeClass('good-cart__container__btns_to-card-sr2')
        } else {
            $(this).addClass('good-cart__container__btns_to-card-sr2')
        }
    })
    $('.good-description__container__btns-block_btn').click(function () {
        if ($(this).attr('id') == 'description') {
            $('.good-description__container__btns-block_btn').removeClass('good-description__container__btns-block_btn-selected')
            $(this).addClass('good-description__container__btns-block_btn-selected')
            $('.good-description__container_description').hide()
            $('.good-description__container_description1').show()
        } else if ($(this).attr('id') == 'char') {
            $('.good-description__container__btns-block_btn').removeClass('good-description__container__btns-block_btn-selected')
            $(this).addClass('good-description__container__btns-block_btn-selected')
            $('.good-description__container_description').hide()
            $('.good-description__container_description2').show()
        } else if ($(this).attr('id') == 'comments') {
            $('.good-description__container__btns-block_btn').removeClass('good-description__container__btns-block_btn-selected')
            $(this).addClass('good-description__container__btns-block_btn-selected')
            $('.good-description__container_description').hide()
            $('.good-description__container_description3').show()
        }
    })
    $('.good-description__container_description_stars_star').click(function () {
        $('.good-description__container_description_stars_star').removeClass('good-description__container_description_stars_star-selected')
        $(this).addClass('good-description__container_description_stars_star-selected')
    })
};