$(document).ready(function() {
    new WOW().init();

    const expertsVideoButtons = document.querySelectorAll('.experts__carousel_button'),
          expertsDotsItems = document.querySelectorAll('.experts__carousel_dots_item'),
          expertsVideoItems = document.querySelectorAll('.experts__carousel_item'),
          bobbinsDotsItems = document.querySelectorAll('.bobbins__carousel_dots_item'),
          brandingDotsItems = document.querySelectorAll('.branding__carousel_dots_item'),
          jacquardDotsItems = document.querySelectorAll('.jacquard__carousel_dots_item'),
          hatsDotsItems1 = document.querySelectorAll('.hats__carousel1_dots_item'),
          hatsDotsItems2 = document.querySelectorAll('.hats__carousel2_dots_item'),
          hatsDotsItems3 = document.querySelectorAll('.hats__carousel3_dots_item'),
          texturesName = document.querySelectorAll('.textures__bottom_item_name');

    let currentBobbinsItem = 0,
        bobbinsColors = ["Красный", "Бирюзовый", "Зеленый", "Синий", "Пудровый", "Оранжевый", "Шоколадный", "Желтый", "Черный", "Серый", "Бежевый"],
        currentExpertsVideo = 0,
        currentTexturesItem = 1;

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
        speed: 180
    });

    $(bobbinsDotsItems[currentBobbinsItem]).css('background-color', '#ff5249');

    $('.bobbins__carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        currentBobbinsItem = nextSlide;

        for (let i = 0; i < 11; i++) {
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
                $(".bobbins__name").css('color', '#787878');
                break;
            case 10:
                $(".bobbins__name").css('color', '#e0cfb1');
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

    
});