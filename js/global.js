jQuery(window).scroll(function() {
    var theTop = $(window).scrollTop();
    if (theTop > 65){
        $('.header__bottom').addClass('fixed');
    }
    else{
        $('.header__bottom').removeClass('fixed');
    }
});

$('.mobile-menu__content__cross').click(function () {
    $('.mobile-menu').fadeOut(500);
});

$('#ham').click(function () {
    $('.mobile-menu').fadeIn(500);
});

$('.div-for-select').removeClass('div-for-select-open')

$('.header__bottom-container__left').click(function () {
    if ($('.header__bottom-container__left').hasClass('header__bottom-container__left-open')) {
        $('.header__bottom-container__left').removeClass('header__bottom-container__left-open');
        $('.header__bottom-container__left_catalog-img').attr('src', 'img/closed_catalog.png');
        $('.header__bottom-container__menu').fadeOut(500);
    } else {
        $('.header__bottom-container__left').addClass('header__bottom-container__left-open');
        $('.header__bottom-container__left_catalog-img').attr('src', 'img/open-catalog.png');
        $('.header__bottom-container__menu').fadeIn(500)
    }
});

document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        $('.header__bottom-container__left').removeClass('header__bottom-container__left-open');
        $('.header__bottom-container__left_catalog-img').attr('src', 'img/closed_catalog.png');
        $('.header__bottom-container__menu').fadeOut(500)
        $('.div-for-select').removeClass('div-for-select-open')
        $('.popup').fadeOut(500)
    }
});

$('.good-card__mask__buttons-container_srav').click(function () {
    if ($(this).hasClass('good-card__mask__buttons-container_srav-check')) {
        $(this).removeClass('good-card__mask__buttons-container_srav-check')
    } else {
        $(this).addClass('good-card__mask__buttons-container_srav-check')
    }
});

$('.good-card__mask__buttons-container_fav').click(function () {
    if ($(this).hasClass('good-card__mask__buttons-container_fav-checked')) {
        $(this).removeClass('good-card__mask__buttons-container_fav-checked')
    } else {
        $(this).addClass('good-card__mask__buttons-container_fav-checked')
    }
});

$('.good-card__mask__buttons-container_cart').click(function () {
    if ($(this).hasClass('good-card__mask__buttons-container_cart-checked')) {
        $(this).removeClass('good-card__mask__buttons-container_cart-checked')
    } else {
        $(this).addClass('good-card__mask__buttons-container_cart-checked')
    }
});

$('.footer-logo').on({
    "mouseover": function () {
        $('.footer-logo').attr('src', 'img/footer-logo-hov.png')
    },
    "mouseout": function () {
        $('.footer-logo').attr('src', 'img/footer-logo.png')
    }
});

$('.good-card__bottom__mobile-container_item1').click(function () {
    if ($(this).hasClass('good-card__bottom__mobile-container_item1-checked')) {
        $(this).removeClass('good-card__bottom__mobile-container_item1-checked')
    } else {
        $(this).addClass('good-card__bottom__mobile-container_item1-checked')
    }
})

$('.good-card__bottom__mobile-container_item2').click(function () {
    if ($(this).hasClass('good-card__bottom__mobile-container_item2-checked')) {
        $(this).removeClass('good-card__bottom__mobile-container_item2-checked')
    } else {
        $(this).addClass('good-card__bottom__mobile-container_item2-checked')
    }
})

$('.good-card__bottom__mobile-container_item3').click(function () {
    if ($(this).hasClass('good-card__bottom__mobile-container_item3-checked')) {
        $(this).removeClass('good-card__bottom__mobile-container_item3-checked')
    } else {
        $(this).addClass('good-card__bottom__mobile-container_item3-checked')
    }
})

$('.mobile-menu__content_ul_li-in_span').click(function () {
    if ($(this).hasClass('mobile-menu__content_ul_li-in_span-checked')) {
        $('.mobile-menu__content_ul_li-in_span').removeClass('mobile-menu__content_ul_li-in_span-checked')
    } else {
        $('.mobile-menu__content_ul_li-in_span').removeClass('mobile-menu__content_ul_li-in_span-checked')
        $(this).addClass('mobile-menu__content_ul_li-in_span-checked')
    }

})
$('.popup_cross').click(function () {
    $('.popup').fadeOut(500)
});

$('.popup').click(function (e) {
    let container = $('.popup');
    if (container.has(e.target).length === 0) {
        $(container).fadeOut(300);
    }
});

$('#enter').click(function () {
    $('.login-popup').fadeIn(500)
});

$('#reg').click(function () {
    $('.reg-popup').fadeIn(500)
});

$('#enterMobile').click(function () {
    $('.mobile-menu').fadeOut(500)
    $('.login-popup').fadeIn(500)
});

$('#regMobile').click(function () {
    $('.mobile-menu').fadeOut(500)
    $('.reg-popup').fadeIn(500)
});

$('.comparison__container__content_left_hide').click(function () {
    if ($(this).hasClass('comparison__container__content_left_hide-check')) {
        $(this).removeClass('comparison__container__content_left_hide-check')
    } else {
        $(this).addClass('comparison__container__content_left_hide-check')
    }
})

$('.hits-page__container-right_dd_ul_li').click(function () {
    let oldItem = $('.hits-page__container-right_dd_span').text();
    let newItem = $(this).text();
    $('.hits-page__container-right_dd_span').text(newItem)
    $(this).text(oldItem)
});

$('.hits-page_show-all-btn').click(function () {
    $(this).nextAll('.hits-page__columns__left-column_category-filter_ul_li').show()
    $(this).hide();
})

$(document).click(function (e){
    if ('.header__bottom-container__left-open') {
        let menu = $(".header__bottom-container__menu");
        let btn = $('.header__bottom-container__left');
        let dd = $('.div-for-select');
        if (!menu.is(e.target) && menu.has(e.target).length === 0 && !btn.is(e.target) && btn.has(e.target).length === 0) {
            $('.header__bottom-container__left').removeClass('header__bottom-container__left-open');
            $('.header__bottom-container__left_catalog-img').attr('src', 'img/closed_catalog.png');
            menu.fadeOut(500);
        }
        if (!dd.is(e.target) && dd.has(e.target).length === 0) {
            $('.div-for-select-open').removeClass('div-for-select-open')
        }
    }
});

$('.div-for-select-span').click(function () {
    if ($('.div-for-select').hasClass('div-for-select-open')) {
        $('.div-for-select').removeClass('div-for-select-open')
    } else {
        $('.div-for-select').addClass('div-for-select-open')
    }
});

$('.div-for-select-open').click(function () {
    $(this).removeClass('div-for-select-open')
})

$('.div-for-select__ul_li').click(function () {
    $('.div-for-select__ul_li').removeClass('div-for-select__ul_li-select');
    $(this).addClass('div-for-select__ul_li-select');
});

$('.good-modal__content__left__slider').slick({
    nextArrow: `<button class="brands-slider-next"></button>`,
    prevArrow: `<button class="brands-slider-prev"></button>`,
});

$('.inc').on('click', function() {
    const $input = $(this).closest('div').find('input');
    $input.val(parseInt($input.val(), 10) + 1);
});

$('.dec').on('click', function() {
    const $input = $(this).closest('div').find('input');
    parseInt($input.val(), 10) > 1 && $input.val(parseInt($input.val(), 10) - 1);
});

$('.header__bottom-container__menu__top_item').mouseleave(function () {
    console.log(1)
})