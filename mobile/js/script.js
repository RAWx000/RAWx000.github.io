$(document).ready(function() {
    new WOW().init();

    const expertsVideoButtons = document.querySelectorAll('.experts__carousel_button'),
          expertsDotsItems = document.querySelectorAll('.experts__carousel_dots_item'),
          expertsVideoItems = document.querySelectorAll('.experts__carousel_item'),
          bobbinsDotsItems = document.querySelectorAll('.bobbins__carousel_dots_item'),
          brandingDotsItems = document.querySelectorAll('.branding__carousel_dots_item'),
          brandingOverlayDotsItems1 = document.querySelectorAll('.branding__overlay_carousel_1_dots_item'),
          brandingOverlayDotsItems2 = document.querySelectorAll('.branding__overlay_carousel_2_dots_item'),
          brandingOverlayDotsItems3 = document.querySelectorAll('.branding__overlay_carousel_3_dots_item'),
          brandingOverlayDotsItems4 = document.querySelectorAll('.branding__overlay_carousel_4_dots_item'),
          brandingOverlayDotsItems6 = document.querySelectorAll('.branding__overlay_carousel_6_dots_item'),
          brandingCarouselButtons = document.querySelectorAll('.branding__carousel_item'),
          jacquardDotsItems = document.querySelectorAll('.jacquard__carousel_dots_item'),
          hatsDotsItems1 = document.querySelectorAll('.hats__carousel1_dots_item'),
          hatsDotsItems2 = document.querySelectorAll('.hats__carousel2_dots_item'),
          hatsDotsItems3 = document.querySelectorAll('.hats__carousel3_dots_item'),
          galleryDotsItems = document.querySelectorAll('.gallery__carousel_dots_item'),
          texturesName = document.querySelectorAll('.textures__bottom_item_name');

    let currentBobbinsItem = 0,
        bobbinsColors = ["Красный", "Бирюзовый", "Зеленый", "Синий", "Пудровый", "Оранжевый", "Шоколадный", "Желтый", "Черный", "Белый", "Бежевый", "Серый"],
        currentExpertsVideo = 0,
        currentTexturesItem = 1,
        brandingActive = 0,
        currentThanks = 1,
        typeOfSubmit = 0;

    ////////////////////////// EXPERTS

    $('.experts__carousel').slick({
        arrows: false
    });

    $(expertsDotsItems[currentExpertsVideo]).css('background-color', '#ff5249');

    $('.experts__carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        for (let i = 0; i < 3; i++) {
            $(expertsDotsItems[i]).css('background-color', '#adadad');
            $(expertsVideoItems[i])[0].pause();
            $(expertsVideoButtons[i]).css('display', 'block');
        }
        currentExpertsVideo = nextSlide;
        $(expertsDotsItems[currentExpertsVideo]).css('background-color', '#ff5249');
    });

    expertsVideoButtons.forEach((element, i) => {
        $(element).click(function() {
            setTimeout(function() {
                $('.slick-active').children().first()[0].play();
                $(element).css('display', 'none');
            }, 400);
        });
    });
    expertsVideoItems.forEach((element, i) => {
        element.addEventListener('ended', function(e) {
            $(expertsVideoButtons[i]).css('display', 'block');
        });
        $(element).click(function() {
            setTimeout(function() {
                $(element)[0].pause();
                $(expertsVideoButtons[i]).css('display', 'block');
            }, 200);
        });
    });

    ////////////// BOBBINS

    $('.bobbins__carousel').slick({
        arrows: false,
        speed: 300
    });

    $(bobbinsDotsItems[currentBobbinsItem]).css('background-color', '#ff5249');

    $('.bobbins__carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        currentBobbinsItem = nextSlide;

        for (let i = 0; i < 12; i++) {
            $(bobbinsDotsItems[i]).css('background-color', '#adadad');
        }
        $(bobbinsDotsItems[currentBobbinsItem]).css('background-color', '#ff5249');

        $('.bobbins__name').text(bobbinsColors[currentBobbinsItem]);
        switch (currentBobbinsItem) {
            case 0:
                $(".bobbins__name").css('color', '#dc0c21');
                break;
            case 1:
                $(".bobbins__name").css('color', '#30d5c8');
                break;
            case 2:
                $(".bobbins__name").css('color', '#7fff00');
                break;
            case 3:
                $(".bobbins__name").css('color', '#4169e1');
                break;
            case 4:
                $(".bobbins__name").css('color', '#ffc0cb');
                break;
            case 5:
                $(".bobbins__name").css('color', '#ffa500');
                break;
            case 6:
                $(".bobbins__name").css('color', '#45322e');
                break;
            case 7:
                $(".bobbins__name").css('color', '#ffba00');
                break;
            case 8:
                $(".bobbins__name").css('color', '#000000');
                break;
            case 9:
                $(".bobbins__name").css('color', '#c0c0c0');
                break;
            case 10:
                $(".bobbins__name").css('color', '#e0cfb1');
                break;
            case 11:
                $(".bobbins__name").css('color', '#808080');
                break;
        }
    });

    /////////////////// TEXTURES

    $('.textures__main_nav_left').click(function() {
        if (currentTexturesItem > 1) { currentTexturesItem--; }
        else { currentTexturesItem = 11; }
        let name = $(texturesName[currentTexturesItem-1]).text();
        $('.textures__main_nav_name').text(name);
        $('.textures__main_img').attr("src", "img/elements/textures/" + currentTexturesItem + ".jpg");
    });

    $('.textures__main_nav_right').click(function() {
        if (currentTexturesItem < 11) { currentTexturesItem++; }
        else { currentTexturesItem = 1; }
        let name = $(texturesName[currentTexturesItem-1]).text();
        $('.textures__main_nav_name').text(name);
        $('.textures__main_img').attr("src", "img/elements/textures/" + currentTexturesItem + ".jpg");
    });

    //////////////// BRANDING

    $('.branding__carousel').slick({
        arrows: false
    });

    $(brandingDotsItems[0]).css('background-color', '#ff5249');
    $('.branding__carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        for (let i = 0; i < 3; i++) {
            $(brandingDotsItems[i]).css('background-color', '#adadad');
        }
        $(brandingDotsItems[nextSlide]).css('background-color', '#ff5249');
    });

    /// BRANDING overlay

    $('.branding__overlay_carousel_1').slick({
        arrows: false,
    });
    $(brandingOverlayDotsItems1[0]).css('background-color', '#ff5249');
    $('.branding__overlay_carousel_1').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        for (let i = 0; i < 4; i++) {
            $(brandingOverlayDotsItems1[i]).css('background-color', '#adadad');
        }
        $(brandingOverlayDotsItems1[nextSlide]).css('background-color', '#ff5249');
    });

    $('.branding__overlay_carousel_2').slick({
        arrows: false
    });
    $(brandingOverlayDotsItems2[0]).css('background-color', '#ff5249');
    $('.branding__overlay_carousel_2').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        for (let i = 0; i < 4; i++) {
            $(brandingOverlayDotsItems2[i]).css('background-color', '#adadad');
        }
        $(brandingOverlayDotsItems2[nextSlide]).css('background-color', '#ff5249');
    });

    $('.branding__overlay_carousel_3').slick({
        arrows: false
    });
    $(brandingOverlayDotsItems3[0]).css('background-color', '#ff5249');
    $('.branding__overlay_carousel_3').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        for (let i = 0; i < 4; i++) {
            $(brandingOverlayDotsItems3[i]).css('background-color', '#adadad');
        }
        $(brandingOverlayDotsItems3[nextSlide]).css('background-color', '#ff5249');
    });

    $('.branding__overlay_carousel_4').slick({
        arrows: false
    });
    $(brandingOverlayDotsItems4[0]).css('background-color', '#ff5249');
    $('.branding__overlay_carousel_4').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        for (let i = 0; i < 4; i++) {
            $(brandingOverlayDotsItems4[i]).css('background-color', '#adadad');
        }
        $(brandingOverlayDotsItems4[nextSlide]).css('background-color', '#ff5249');
    });
    
    $('.branding__overlay_carousel_6').slick({
        arrows: false
    });
    $(brandingOverlayDotsItems6[0]).css('background-color', '#ff5249');
    $('.branding__overlay_carousel_6').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        for (let i = 0; i < 4; i++) {
            $(brandingOverlayDotsItems6[i]).css('background-color', '#adadad');
        }
        $(brandingOverlayDotsItems6[nextSlide]).css('background-color', '#ff5249');
    });

    brandingCarouselButtons.forEach((element, i) => {
        if (i != 4) {
            $(element).click(function() {
                $('.branding__overlay').fadeIn('fast');
                $('.branding__overlay_' + (i+1)).fadeIn('fast');
                $('.branding__overlay_carousel_' + (i+1)).slick('setPosition');
                brandingActive = i+1;
            });
        }
    });
    $('.branding__overlay_exit').click(function(e) {
        $('.branding__overlay').fadeOut('fast');
        $('.branding__overlay_' + brandingActive).fadeOut('fast');
    });

    /////////////// JACQUARD

    $('.jacquard__carousel').slick({
        arrows: false
    });

    $(jacquardDotsItems[0]).css('background-color', '#ff5249');
    $('.jacquard__carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        for (let i = 0; i < 10; i++) {
            $(jacquardDotsItems[i]).css('background-color', '#adadad');
        }
        $(jacquardDotsItems[nextSlide]).css('background-color', '#ff5249');
    });

    /////////////// HATS

    $('.hats__carousel1').slick({
        arrows: false
    });
    $(hatsDotsItems1[0]).css('background-color', '#ff5249');
    $('.hats__carousel1').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        for (let i = 0; i < 6; i++) {
            $(hatsDotsItems1[i]).css('background-color', '#adadad');
        }
        $(hatsDotsItems1[nextSlide]).css('background-color', '#ff5249');
    });

    $('.hats__carousel2').slick({
        arrows: false
    });
    $(hatsDotsItems2[0]).css('background-color', '#ff5249');
    $('.hats__carousel2').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        for (let i = 0; i < 6; i++) {
            $(hatsDotsItems2[i]).css('background-color', '#adadad');
        }
        $(hatsDotsItems2[nextSlide]).css('background-color', '#ff5249');
    });

    $('.hats__carousel3').slick({
        arrows: false
    });
    $(hatsDotsItems3[0]).css('background-color', '#ff5249');
    $('.hats__carousel3').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        for (let i = 0; i < 6; i++) {
            $(hatsDotsItems3[i]).css('background-color', '#adadad');
        }
        $(hatsDotsItems3[nextSlide]).css('background-color', '#ff5249');
    });

    ///////////////// GALLERY

    $('.gallery__carousel').slick({
        arrows: false
    });
    $(galleryDotsItems[0]).css('background-color', '#ff5249');
    $('.gallery__carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        for (let i = 0; i < 16; i++) {
            $(galleryDotsItems[i]).css('background-color', '#adadad');
        }
        $(galleryDotsItems[nextSlide]).css('background-color', '#ff5249');
    });

    /////////////// THANKS

    $('.thanks__carousel_target').click(function() {
        $('.thanks__overlay').fadeIn('fast');
        $('.thanks__overlay_item').attr("src", "img/elements/thanks/blancs/" + currentThanks + ".png");
    });

    $('.thanks__overlay_exit').click(function(e) {
        $('.thanks__overlay').fadeOut('fast');
    });

    $('.thanks__carousel_right').click(function() {
        if (currentThanks < 9) {
            currentThanks++;
        }
        else {
            currentThanks = 1;
        }
        $('.thanks__carousel_item').attr("src", "img/elements/thanks/items/" + currentThanks + ".png");
    });
    $('.thanks__carousel_left').click(function() {
        if (currentThanks > 1) {
            currentThanks--;
        }
        else {
            currentThanks = 9;
        }
        $('.thanks__carousel_item').attr("src", "img/elements/thanks/items/" + currentThanks + ".png");
    });

    /////////////// POPUP FORMS

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Пожалуйста, введите свое имя",
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неверный формат адреса почты"
                }
            }
        });
    }

    validateForms('#call_1');
    validateForms('#call_2');
    validateForms('#catalog');

    $('.main__button').click(function() {
        setTimeout(function() {
            $('.popup').fadeIn('fast');
            $('.popup__form1').fadeIn('fast');
            $('#catalog').attr("onsubmit","ym(50797489,'reachGoal','ZAYAVKA'); return true;");
        }, 300);
        typeOfSubmit = 1; // Каталог
    });

    $('.branding__button').click(function() {
        setTimeout(function() {
            $('.popup').fadeIn('fast');
            $('.popup__form1').fadeIn('fast');
            $('#catalog').attr("onsubmit","ym(50797489,'reachGoal','ZAYAVKA'); return true;");
        }, 300);
        typeOfSubmit = 1; // Каталог
    });

    $('.header__phone_call').click(function() {
        setTimeout(function() {
            $('.popup').fadeIn('fast');
            $('.popup__form2').fadeIn('fast');
            $('#call_2').attr("onsubmit","ym(50797489,'reachGoal','ZAYAVKA'); return true;");
        }, 300);
        typeOfSubmit = 0; // Перезвоним
    });

    $('.popup__form1_close').click(function() {
        $('.popup').fadeOut('fast');
        $('.popup__form1').fadeOut('fast');
        $('label.error').css('display', 'none');
        $('form').trigger('reset');
        typeOfSubmit = 0;
    });

    $('.popup__form2_close').click(function() {
        $('.popup').fadeOut('fast');
        $('.popup__form2').fadeOut('fast');
        $('label.error').css('display', 'none');
        $('form').trigger('reset');
        typeOfSubmit = 0;
    });

    $('form').submit(function(e) {
        e.preventDefault();
        let $form = $(this);
        if (!$form.valid()) { return false; }
        switch(typeOfSubmit) {
            case 0:
                $.ajax({
                    type: "POST",
                    url: "mailer/smart_call.php",
                    data: $(this).serialize()
                }).done(function() {
                    $(this).find("input").val("");
                    $('.popup, .popup__form1, .popup__form2, .popup__form3').fadeOut('fast');
                    $('label.error').css('display', 'none');
                    $('form').trigger('reset');
                    setTimeout(function() {
                        $('.popup').fadeIn('fast');
                        $('.popup__form3').fadeIn('fast');
                    }, 300);
                    typeOfSubmit = 0;
                });
                return false;
            case 1:
                $.ajax({
                    type: "POST",
                    url: "mailer/smart_catalog.php",
                    data: $(this).serialize()
                }).done(function() {
                    $(this).find("input").val("");
                    $('.popup, .popup__form1, .popup__form2, .popup__form3').fadeOut('fast');
                    $('label.error').css('display', 'none');
                    $('form').trigger('reset');
                    setTimeout(function() {
                        $('.popup').fadeIn('fast');
                        $('.popup__form3').fadeIn('fast');
                    }, 300);
                    typeOfSubmit = 0;
                });
                return false;
        }
    });
    
});