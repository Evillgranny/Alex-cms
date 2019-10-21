window.onload = function () {
    $('.hits-page__columns__left-column_category-filter_range').slider({
        range: true,
        min: 0,
        max: 1500,
        values: [ 0, 1500 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            $( "#from" ).val( $( ".hits-page__columns__left-column_category-filter_range" )
                .slider( "values", 0 ) + " BYN");
            $( "#to" ).val($( ".hits-page__columns__left-column_category-filter_range" )
                .slider( "values", 1 ) + " BYN");
        }
    });
    $('.hits-page__columns__left-column_category-filter_color-flex_color').click(function () {
        if ($(this).hasClass('hits-page__columns__left-column_category-filter_color-flex_color-select')) {
            $(this).removeClass('hits-page__columns__left-column_category-filter_color-flex_color-select')
        } else {
            $(this).addClass('hits-page__columns__left-column_category-filter_color-flex_color-select')
        }
    })
    $('.hits-page__container-top_filter_btn').click(function () {
        if ($(window).width() <= '1250'){
            $('.hits-page__columns__left-column').css('display', 'flex');
        }
    })
    $('.hits-page__columns__left-column_cross').click(function () {
        $('.hits-page__columns__left-column').fadeOut(500)
    })
};