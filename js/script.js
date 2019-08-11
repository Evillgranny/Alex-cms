window.onload = function () {

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
        }
    });

    // $(document).mouseup(function (e) {
    //     let container = $(".header__bottom-container__menu");
    //     let menuBtn = $('.header__bottom-container__left');
    //     if (container.has(e.target).length === 0 && menuBtn.has(e.target).length === 0){
    //         $('.header__bottom-container__left').removeClass('header__bottom-container__left-open');
    //         $('.header__bottom-container__left_catalog-img').attr('src', 'img/closed_catalog.png');
    //         $('.header__bottom-container__menu').fadeOut(500);
    //     }
    // });
    $('.main-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        variableWidth: true,
        speed: 1000
    });
    $('.brands-slider').slick({
        slidesToShow: 5,
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
    })
};