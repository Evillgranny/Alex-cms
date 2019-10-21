window.onload = function () {
    $('.personal-bottom__container_content__left_li').click(function () {
        $('.personal-bottom__container_content__left_li').removeClass('personal-bottom__container_content__left_li-checked')
        $(this).addClass('personal-bottom__container_content__left_li-checked');
        $('.personal-bottom__container_content__right').hide();
        $('.personal-bottom__container__main').text($(this).text())
        if ($(this).attr('id') == 'orders') {
            $('.personal-bottom__container_content__right1').show();
        } else if ($(this).attr('id') == 'discount')  {
            $('.personal-bottom__container_content__right2').show();
        } else if ($(this).attr('id') == 'personalData')  {
            $('.personal-bottom__container_content__right3').css('display', 'flex');
        } else if ($(this).attr('id') == 'help')  {
            $('.personal-bottom__container_content__right4').show();
        }
    })
    $('.personal-bottom__container_content__right__personal-data_ul_li_pass').mousedown(function () {
        $(this).attr('type', 'text')
    })
    $('.personal-bottom__container_content__right__personal-data_ul_li_pass').mouseup(function () {
        $(this).attr('type', 'password')
    })
    $('.personal-bottom__container_content__right__personal-data_ul_li_pass').mouseleave(function () {
        $(this).attr('type', 'password')
    })
    $('.personal-bottom__container_content__right4').accordion({
        heightStyle: "content",
        collapsible: true
    })
};