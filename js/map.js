

ymaps.ready(function () {
    var myMap = new ymaps.Map("mymap", {
        center: [53.87763218344008,27.59923717790987],
        zoom: 14
    });

    myPlacemark = new ymaps.Placemark([53.87735958024774,27.599339101852426], {
        hintContent: 'Магазин',
        balloonContent: 'Адрес магазина: г. Минск, ул. Ванеева, д. З4'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-icon.png',
        iconImageSize: [27, 33],
        iconImageOffset: [-12, -20]
    })
    myMap.geoObjects
        .add(myPlacemark)

    function showNewMap(coords, placemarkCoords, hintContent, balloonContent) {
        $('#mymap').hide();
        myMap.destroy();
        $('#mymap').show();
        myMap = new ymaps.Map("mymap", {
            center: coords,
            zoom: 14
        });
        myPlacemark = new ymaps.Placemark(placemarkCoords, {
            hintContent: hintContent,
            balloonContent: balloonContent
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map-icon.png',
            iconImageSize: [27, 33],
            iconImageOffset: [-15, -30]
        })
        myMap.geoObjects
            .add(myPlacemark);
    }

    $('.minsk1').click(function () {
        showNewMap(
            [53.87763218344008,27.59923717790987],
            [53.87735958024774,27.599339101852426],
            'Магазин',
            'Адрес магазина: г. Минск, ул. Ванеева, д. З4'
        );

        $('.contacts__container__left_city-choose_p').removeClass('contacts__container__left_city-choose_p-check');
        $(this).addClass('contacts__container__left_city-choose_p-check');
    });

    $('.minsk2').click(function () {
        showNewMap(
            [53.856781100808604,27.49042485294949],
            [53.856781100808604,27.49042485294949],
            'Склад',
            'Адрес склада: г. Минск, ул. Держинского, д. 85'
            );

        $('.contacts__container__left_city-choose_p').removeClass('contacts__container__left_city-choose_p-check');
        $(this).addClass('contacts__container__left_city-choose_p-check');
    });
    $('.contacts__container__left_city-choose-content_li').click(function () {
        $('.contacts__container__left_city-choose_container').fadeOut(500)
        if ($(this).text() == 'Минск') {
            showNewMap(
                [53.87763218344008,27.59923717790987],
                [53.87735958024774,27.599339101852426],
                'Магазин',
                'Адрес магазина: г. Минск, ул. Ванеева, д. З4'
            );
            $('.contacts__container__left_city-choose_p').removeClass('contacts__container__left_city-choose_p-check');
            $('.minsk1').addClass('contacts__container__left_city-choose_p-check');
            setTimeout(function () {
                $('.contacts__container__left_city-choose_container-minsk').fadeIn(500)

            },500)
        } else if ($(this).text()== 'Витебск'){
            showNewMap(
                [55.18368601067521,30.162940698968903],
                [55.18368601067521,30.162940698968903],
                'Магазин',
                'Адрес магазина: г. Витебск, ул. Карла Маркса 66'
            );
            $('.contacts__container__left_city-choose_p').removeClass('contacts__container__left_city-choose_p-check');
            $('.vitebsk1').addClass('contacts__container__left_city-choose_p-check');
            setTimeout(function () {
                $('.contacts__container__left_city-choose_container-vitebsk').fadeIn(500)
            },500)
        }
        let clickCity = $(this).text()
        let oldCity = $('.contacts__container__left_city-choose_city').text()
        $(this).text(oldCity)
        $('.contacts__container__left_city-choose_city').text(clickCity)
    })
    $('.vitebsk1').click(function () {
        showNewMap(
            [55.18368601067521,30.162940698968903],
            [55.18368601067521,30.162940698968903],
            'Магазин',
            'Адрес магазина: г. Витебск, ул. Карла Маркса 66'
        );

        $('.contacts__container__left_city-choose_p').removeClass('contacts__container__left_city-choose_p-check');
        $(this).addClass('contacts__container__left_city-choose_p-check');
    });
    $('.vitebsk2').click(function () {
        showNewMap(
            [55.18089110207516,30.15530075586523],
            [55.18089110207516,30.15530075586523],
            'Склад',
            'Адрес магазина: г. Витебск, ул. Карла Маркса 102'
        );

        $('.contacts__container__left_city-choose_p').removeClass('contacts__container__left_city-choose_p-check');
        $(this).addClass('contacts__container__left_city-choose_p-check');
    });
});



