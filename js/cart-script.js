window.onload = function () {
    $('.inc').on('click', function() {
        const $input = $(this).closest('div').find('input');
        $input.val(parseInt($input.val(), 10) + 1);
    });
    $('.dec').on('click', function() {
        const $input = $(this).closest('div').find('input');
        parseInt($input.val(), 10) > 1 && $input.val(parseInt($input.val(), 10) - 1);
    });

    $('.cart-container__ul_li_ga').click(function () {
        if ($(this).hasClass('cart-container__ul_li_ga-select')) {
            $(this).attr('src', 'img/nogar.png').removeClass('cart-container__ul_li_ga-select')
        } else {
            $(this).attr('src', 'img/gar.png').addClass('cart-container__ul_li_ga-select')
        }
    })

};