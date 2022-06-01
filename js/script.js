$(document).ready(function() {
    new WOW().init();

    setTimeout(loadOverflow, 2000);

    const textures = document.querySelectorAll('.textures__rightside_elements_item_img'),
          texturesName = document.querySelectorAll('.textures__rightside_elements_item_name'),
          texturesCurrent = document.querySelector('.textures__leftside_nav_tname'),
          bobbinItems = document.querySelectorAll('.bobbins__carousel_item'),
          projectsPleds = document.querySelectorAll('.projects__item_pled'),
          projectsLogos = document.querySelectorAll('.projects__item_logo'),
          projectsNums = document.querySelectorAll('.projects__item_num'),
          faceItems = document.querySelectorAll('.face__item_img'),
          faceBorders = document.querySelectorAll('.face__item_border'),
          calcCheckBoxes1 = document.querySelectorAll('.calc__checkboxes_item_rightside_check1_img'),
          calcCheckBoxes2 = document.querySelectorAll('.calc__checkboxes_item_rightside_check2_img'),
          hatsColorRounds = document.querySelectorAll('.hats__item_color_round');

    let currentTextureNumber = 1,
        firstBobbinItem = 0,
        lastBobbinItem = 6,
        currentBobbinItem = 3,
        bobbinColors = ["Оранжевый", "Бирюзовый", "Зеленый", "Красный", "Синий", "Пудровый", "Шоколадный"],
        calcDiscount = [2, 2, 2, 2],
        calcDiscountOld = 8;

    $(window).load(function() {
        $('#before-load').find('img').fadeOut(2000).end().delay(2000).fadeOut('slow');
    });

    function loadOverflow() {
        $('body').css('overflow-y', 'scroll');
    }
    
    function showScroll(element, pixels) {
        $(window).scroll(function(){
            if ($(window).scrollTop() > pixels) {
                $(element).removeClass('hidden_on');
            }
        });
    }
    showScroll('.advantages__wrap', 900);

    function scaleOn(element, element1, item) {
        $(element1).mouseover(function() {
            $(element1).removeClass("scale_off");    
            $(element1).addClass("scale_on");
            $(element).addClass("shine_on");
            if (item == 1) {
                $(".advantages__items_point1_img").css('opacity', '0.1');
            }
            else if (item == 2) {
                $(".advantages__items_point2_img").css('opacity', '0.1');
            }
            else if (item == 3) {
                $(".advantages__items_point4_img").css('opacity', '0.1');
            }
            else if (item == 4) {
                $(".advantages__items_point6_img").css('opacity', '0.1');
            }
            else if (item == 5) {
                $(".advantages__items_point8_img").css('opacity', '0.1');
            }
            else if (item == 6) {
                $(".advantages__items_point7_img").css('opacity', '0.1');
            }
            else if (item == 7) {
                $(".advantages__items_point5_img").css('opacity', '0.1');
            }
            else if (item == 8) {
                $(".advantages__items_point3_img").css('opacity', '0.1');
            }
            $(".advantages__items_raycast_"+item).css('opacity', '0.7');
        });

        $(element).mouseover(function() {
            $(element1).removeClass("scale_off");    
            $(element1).addClass("scale_on");
            $(element).addClass("shine_on");
            if (item == 1) {
                $(".advantages__items_point1_img").css('opacity', '0.1');
            }
            else if (item == 2) {
                $(".advantages__items_point2_img").css('opacity', '0.1');
            }
            else if (item == 3) {
                $(".advantages__items_point4_img").css('opacity', '0.1');
            }
            else if (item == 4) {
                $(".advantages__items_point6_img").css('opacity', '0.1');
            }
            else if (item == 5) {
                $(".advantages__items_point8_img").css('opacity', '0.1');
            }
            else if (item == 6) {
                $(".advantages__items_point7_img").css('opacity', '0.1');
            }
            else if (item == 7) {
                $(".advantages__items_point5_img").css('opacity', '0.1');
            }
            else if (item == 8) {
                $(".advantages__items_point3_img").css('opacity', '0.1');
            }
            $(".advantages__items_raycast_"+item).css('opacity', '0.7');
        });

        $(element).mouseleave(function() {  
            $(element1).removeClass("scale_on");    
            $(element1).addClass("scale_off");
            $(element).removeClass("shine_on");
            for ( let i = 1; i < 9; i++ ) {
                $(".advantages__items_point"+i+"_img").css('opacity', '1');
                $(".advantages__items_raycast_"+i).css('opacity', '0');
            }
        });
        
        $(element1).mouseleave(function() {    
            $(element1).removeClass("scale_on");  
            $(element1).addClass("scale_off");
            $(element).removeClass("shine_on");
            for ( let i = 1; i < 9; i++ ) {
                $(".advantages__items_point"+i+"_img").css('opacity', '1');
                $(".advantages__items_raycast_"+i).css('opacity', '0');
            }
        });

    }
    for ( let i = 1; i < 9; i++ ) {
        scaleOn('.advantages__items_sunshine_'+i, '.advantages__items_point_text_'+i, i);
    }

    $('.textures__leftside_nav_leftarrow').click(function() {
        let i = currentTextureNumber;
        if (currentTextureNumber > 1) { currentTextureNumber--; }
        else { currentTextureNumber = 11; }
        $('.textures__leftside_img').attr("src", "img/elements/textures/" + currentTextureNumber + ".jpg");
        choiceSelector(i, currentTextureNumber);
    });

    $('.textures__leftside_nav_rightarrow').click(function() {
        let i = currentTextureNumber;
        if (currentTextureNumber < 11) { currentTextureNumber++; }
        else { currentTextureNumber = 1; }
        $('.textures__leftside_img').attr("src", "img/elements/textures/" + currentTextureNumber + ".jpg");
        choiceSelector(i, currentTextureNumber);
    });

    function choiceSelector(oldNum, newNum) {
        $(textures[newNum - 1]).addClass('textures_choice');
        $(textures[oldNum - 1]).removeClass('textures_choice');
        let name = $(texturesName[newNum - 1]).text();

        $(texturesCurrent).text(name);
    }

    function clickImgTexture(index) {
        $(textures[index]).click(function() {
            if (currentTextureNumber != index + 1) {
                let i = currentTextureNumber;
                currentTextureNumber = index + 1;
                $('.textures__leftside_img').attr("src", "img/elements/textures/" + currentTextureNumber + ".jpg");
                choiceSelector(i, currentTextureNumber);
            }
        });
    }
    for ( let i = 0; i < 11; i++ ) {
        clickImgTexture(i);
    }

    $('.bobbins__nav_rightarrow').click(function() {
        $(bobbinItems[firstBobbinItem]).appendTo('.bobbins__carousel');
        lastBobbinItem = firstBobbinItem;
        if (firstBobbinItem < 6) { firstBobbinItem++; }
        else { firstBobbinItem = 0; }
        currentBobbin(1);
    });

    $('.bobbins__nav_leftarrow').click(function() {
        $(bobbinItems[lastBobbinItem]).prependTo('.bobbins__carousel');
        firstBobbinItem = lastBobbinItem;
        if (lastBobbinItem > 0) { lastBobbinItem--; }
        else { lastBobbinItem = 6; }
        currentBobbin(0);
    });

    function currentBobbin(direction) {
        if (direction == 1) {
            if (currentBobbinItem < 6) {
                currentBobbinItem++;
            }
            else { currentBobbinItem = 0; }
        }
        else {
            if (currentBobbinItem > 0) {
                currentBobbinItem--;
            }
            else { currentBobbinItem = 6; }
        }
        $(".bobbins__nav_color").text(bobbinColors[currentBobbinItem]);
        switch (currentBobbinItem) {
            case 0:
                $(".bobbins__nav_color").css('color', '#ffa500');
                break;
            case 1:
                $(".bobbins__nav_color").css('color', '#30d5c8');
                break;
            case 2:
                $(".bobbins__nav_color").css('color', '#7fff00');
                break;
            case 3:
                $(".bobbins__nav_color").css('color', '#dc0c21');
                break;
            case 4:
                $(".bobbins__nav_color").css('color', '#4169e1');
                break;
            case 5:
                $(".bobbins__nav_color").css('color', '#ffc0cb');
                break;
            case 6:
                $(".bobbins__nav_color").css('color', '#45322e');
                break;
        }
    }

    projectsPleds.forEach((element, i) => {
        $(element).mouseover(function() {
            switch (i) {
                case 0:
                    $(projectsLogos[i]).css('filter','drop-shadow(0px 0px 30px rgba(255, 165, 0, 0.8))');
                    $(projectsNums[i]).css('filter','drop-shadow(0px 0px 15px rgba(255, 165, 0, 0.8))');
                    break;
                case 1:
                    $(projectsLogos[i]).css('filter','drop-shadow(0px 0px 30px rgba(0, 0, 255, 0.8))');
                    $(projectsNums[i]).css('filter','drop-shadow(0px 0px 15px rgba(0, 0, 255, 0.8))');
                    break;
                case 2:
                    $(projectsLogos[i]).css('filter','drop-shadow(0px 0px 30px rgba(255, 0, 0, 0.8))');
                    $(projectsNums[i]).css('filter','drop-shadow(0px 0px 15px rgba(255, 0, 0, 0.8))');
                    break;
                case 3:
                    $(projectsLogos[i]).css('filter','drop-shadow(0px 0px 30px rgba(0, 50, 255, 0.8))');
                    $(projectsNums[i]).css('filter','drop-shadow(0px 0px 15px rgba(0, 50, 255, 0.8))');
                    break;
                case 4:
                    $(projectsLogos[i]).css('filter','drop-shadow(0px 0px 30px rgba(255, 165, 0, 0.8))');
                    $(projectsNums[i]).css('filter','drop-shadow(0px 0px 15px rgba(255, 165, 0, 0.8))');
                    break;
                case 5:
                    $(projectsLogos[i]).css('filter','drop-shadow(0px 0px 30px rgba(0, 0, 255, 0.8))');
                    $(projectsNums[i]).css('filter','drop-shadow(0px 0px 15px rgba(0, 0, 255, 0.8))');
                    break;
            }
        });
        $(element).mouseleave(function() {
            $(projectsLogos[i]).css('filter','');
            $(projectsNums[i]).css('filter','');
        });
    });

    faceItems.forEach((element, i) => {
        $(element).mouseover(function() {
            $(faceBorders[i]).css('background-color','#ff59599a');
            $(element).css('transform','scale(1.1)');
        });
        $(element).mouseleave(function() {
            $(faceBorders[i]).css('background-color','');
            $(element).css('transform','');
        });
    });

    calcCheckBoxes1.forEach(element => {
        $(element).css('background-color','#ff5349');
    });

    calcCheckBoxes1.forEach((element, i) => {
        $(element).click(function() {
            $(element).css('background-color','#ff5349');
            $(calcCheckBoxes2[i]).css('background-color','#f6f6f6');
            calcDiscount[i] = 2;
            totalDiscount();
        });
    });
    calcCheckBoxes2.forEach((element, i) => {
        $(element).click(function() {
            $(element).css('background-color','#ff5349');
            $(calcCheckBoxes1[i]).css('background-color','#f6f6f6');
            calcDiscount[i] = 10;
            totalDiscount();
        });
    });

    function totalDiscount() {
        let total = 0;
        for (let i = 0; i < 4; i++) { total += calcDiscount[i]; }
        numberTo(calcDiscountOld, total, 300);
    }

    function numberTo(from, to, duration) {
        let start = new Date().getTime();
        setTimeout(function() {
            let now = (new Date().getTime()) - start;
            let progress = now / duration;
            let result = Math.floor((to - from) * progress + from);
            $('.calc__total_discount').text((progress < 1 ? result : to) + "%");
            if (progress < 1) { setTimeout(arguments.callee, 10); }
        }, 10);
        calcDiscountOld = to;
    }

    hatsColorRounds.forEach((element, index) => {

        if (index == 0) { $(element).css('background-image','radial-gradient(circle, #fff, #cc9541)'); }
        else if (index == 8) { $(element).css('background-image','radial-gradient(circle, #fff, #a48e7b)'); }
        else if (index == 13) { $(element).css('background-image','radial-gradient(circle, #fff, #986b76)'); }

        $(element).click(function() {
            for (let i = 0; i < 6; i++) {
                $(element).parent().children().css('background-image','');
            }
            let roundColor = $(element).css('background-color');          
            $(element).css('background-image','radial-gradient(circle, #fff, '+roundColor+')');
        });
    });
   
});