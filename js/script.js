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
          hatsColorRounds = document.querySelectorAll('.hats__item_color_round'),
          processListItems = document.querySelectorAll('.process__list_stage'),
          constructorCheckYarn = document.querySelectorAll('.constructor__modal_1_item_checkbox_mark'),
          constructorCheckPattern = document.querySelectorAll('.constructor__modal_2_item_checkbox_mark'),
          constructorCheckColor = document.querySelectorAll('.constructor__modal_3_item_checkbox_mark'),
          teamTargets = document.querySelectorAll('.team__item_target'),
          teamImgs = document.querySelectorAll('.team__item_img'),
          brandingItems = document.querySelectorAll('.branding__item_img'),
          brandingItemsMore = document.querySelectorAll('.branding__more'),
          expertsBottomPlayButtons = document.querySelectorAll('.experts__play_bottom'),
          expertsMainPlayButton = document.querySelector('.experts__play_main');

    let currentTextureNumber = 1,
        firstBobbinItem = 0,
        lastBobbinItem = 9,
        currentBobbinItem = 5,
        bobbinColors = ["Оранжевый", "Бирюзовый", "Зеленый", "Синий", "Пудровый", "Красный", "Шоколадный", "Желтый", "Черный", "Серый", "Бежевый"],
        //////////////// Калькулятор [ниже]
        calcDiscount = [0, 0, 5, 0],
        calcDiscountOld = 5,
        ////////////////
        processStage = 0,
        //////////////// Конструктор [ниже]
        constructorStage = 0,
        constructorYarn = 1,
        constructorPattern = 1,
        constructorColor = 1,
        jacquardPhoto = 0,
        ///////////////
        thanksNumber = 1;


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
        if (firstBobbinItem < 10) { firstBobbinItem++; }
        else { firstBobbinItem = 0; }
        currentBobbin(1);
    });

    $('.bobbins__nav_leftarrow').click(function() {
        $(bobbinItems[lastBobbinItem]).prependTo('.bobbins__carousel');
        firstBobbinItem = lastBobbinItem;
        if (lastBobbinItem > 0) { lastBobbinItem--; }
        else { lastBobbinItem = 10; }
        currentBobbin(0);
    });

    function currentBobbin(direction) {
        if (direction == 1) {
            if (currentBobbinItem < 10) {
                currentBobbinItem++;
            }
            else { currentBobbinItem = 0; }
        }
        else {
            if (currentBobbinItem > 0) {
                currentBobbinItem--;
            }
            else { currentBobbinItem = 10; }
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
                $(".bobbins__nav_color").css('color', '#4169e1');
                break;
            case 4:
                $(".bobbins__nav_color").css('color', '#ffc0cb');
                break;
            case 5:
                $(".bobbins__nav_color").css('color', '#dc0c21');
                break;
            case 6:
                $(".bobbins__nav_color").css('color', '#45322e');
                break;
            case 7:
                $(".bobbins__nav_color").css('color', '#ffba00');
                break;
            case 8:
                $(".bobbins__nav_color").css('color', '#000000');
                break;
            case 9:
                $(".bobbins__nav_color").css('color', '#787878');
                break;
            case 10:
                $(".bobbins__nav_color").css('color', '#e0cfb1');
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

    //////////// Calc

    calcCheckBoxes1.forEach((element, i) => {
        $(element).css('background-color','#ff5349');
        $(element).click(function() {
            $(element).css('background-color','#ff5349');
            $(calcCheckBoxes2[i]).css('background-color','#f6f6f6');
            switch (i) {
                case 0:
                    calcDiscount[i] = 0;
                    break;
                case 1:
                    calcDiscount[i] = 0;
                    break;
                case 2:
                    calcDiscount[i] = 5;
                    break;
                case 3:
                    calcDiscount[i] = 0;
                    break;
            }
            totalDiscount();
        });
    });

    calcCheckBoxes2.forEach((element, i) => {
        $(element).click(function() {
            $(element).css('background-color','#ff5349');
            $(calcCheckBoxes1[i]).css('background-color','#f6f6f6');
            switch (i) {
                case 0:
                    calcDiscount[i] = 15;
                    break;
                case 1:
                    calcDiscount[i] = 10;
                    break;
                case 2:
                    calcDiscount[i] = 0;
                    break;
                case 3:
                    calcDiscount[i] = 10;
                    break;
            }
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
        console.log(to);
    }

    /////////////////////// Шапки

    hatsColorRounds.forEach((element, index) => {
        if (index == 1) { $(element).css('background-image','radial-gradient(circle, #fff, #cc9541)'); }
        else if (index == 11) { $(element).css('background-image','radial-gradient(circle, #fff, #a48e7b)'); }
        else if (index == 12) { $(element).css('background-image','radial-gradient(circle, #fff, #986b76)'); }

        $(element).click(function() {
            $(element).parent().parent().children().first().attr("src", "img/elements/hats/" + (index+1) + ".png");
            $(element).parent().children().css('background-image','');
            let roundColor = $(element).css('background-color');          
            $(element).css('background-image','radial-gradient(circle, #fff, '+roundColor+')');
        });
    });

    $('.hats__button').click(function() {
        //$('.hats__wrap2').css('display','flex');
        //$('.hats__hidecontent').css('display','block');
        $('.hats__wrap2').slideToggle('slow');
        $('.hats__button').css('display','none');
        $('.hats').css('padding', '50px 0 100px 0');
    });

    /////////////////// TEAM

    teamTargets.forEach((element, index) => {
        $(element).mouseover(function() {
            $(teamImgs[index]).css('transform', 'scale(1.08) translateY(-4px)');
        });
        $(element).mouseleave(function() {
            $(teamImgs[index]).css('transform', 'scale(1) translateY(0px)');
        });
    });

    ////////////////// _process

    $(processListItems[0]).css('text-shadow', '1px 0 0 currentColor');

    $('.process__stage_left').click(function() {
        if (processStage == 0) { processStage = 4; }
        else { processStage--; }

        processStageChange(processStage);
    });

    $('.process__stage_right').click(function() {
        if (processStage == 4) { processStage = 0; }
        else { processStage++; }

        processStageChange(processStage);
    });

//    setInterval(() => {
//         if (processDelay == 1) {
//             if (processStage == 4) { processStage = 0; }
//             else { processStage++; }
//             processStageChange(processStage);
//         }
//         else { processDelay = 1; }
//     }, 5000);

    function processStageChange(num) {
        for (let i = 0; i < 5; i++) {
            $(processListItems[i]).css('text-shadow', '');
        }
        $(processListItems[num]).css('text-shadow', '1px 0 0 currentColor');
        $('.process__stage_number_img').attr("src", "img/elements/process/stage" + (num+1) + ".png");
        $('.process__stage_photo').attr("src", "img/elements/process/photos/" + (num+1) + ".png");
        switch (num) {
            case 0:
                $('.process__stage_header').html('1 этап<br>Подготовка');
                $('.process__name').html('1 этап. Подготовка');
                $('.process__stage_descr').html('Наши опытные специалисты подбирают оптимальные<br>материалы, цвета и разрабатывают индивидуальную<br>производственную программу для вязальных станков.<br>На этом этапе заказчик получает макет и утверждает<br>проект.');
                break;
            case 1:
                $('.process__stage_header').html('2 этап<br>Производство');
                $('.process__name').html('2 этап. Производство');
                $('.process__stage_descr').html('Пледы создаются на вязальных машинах Shima Seiki<br>согласно программе, более 800 иголок одновременно<br>переплетают нити пряжи в фактурные узоры, которые<br>благодаря специальным валам оттяжки вытягиваются в<br>трикотажный плед.');
                break;
            case 2:
                $('.process__stage_header').html('3 этап<br>Брендирование');
                $('.process__name').html('3 этап. Брендирование');
                $('.process__stage_descr').html('Кожевенный мастер теснит логотип на заготовках<br>и подготавливает их для пришивания, а коллеги печатают<br>на специальных УФ принтерах атласные ленты с вашими<br>логотипами. На этом этапе наши швеи пришьют кожаные<br>или вышитые шевроны к пледу.');
                break;
            case 3:
                $('.process__stage_header').html('4 этап<br>ОТК и Упаковка');
                $('.process__name').html('4 этап. ОТК и Упаковка');
                $('.process__stage_descr').html('Специалист досконально проверит соответствие продукции<br>установленным требованиям договора. Прозрачный пакет<br>с клапаном, подарочная коробка и логистический короб –<br>подарки придут в целости и сохранности. Гарантируем!');
                break;
            case 4:
                $('.process__stage_header').html('5 этап<br>Завершение проекта');
                $('.process__name').html('5 этап. Завершение проекта');
                $('.process__stage_descr').html('Персональный менеджер проверит всю необходимую<br>сопроводительную документацию и подготовит Ваш груз<br>к отправке. Далее клиент примет груз, порадуется<br>качеству исполнения и с удовольствием преподнесёт<br>подарок получателю!');
                break;
        }
    }

    ////////////////// Жаккард

    $('.jacquard__gallery_left').click(function() {
        if (jacquardPhoto == 0) { jacquardPhoto = 9; }
        else { jacquardPhoto--; }
        $('.jacquard__gallery_photo').attr("src", "img/elements/jacquard/gallery/" + jacquardPhoto + ".png");
    });

    $('.jacquard__gallery_right').click(function() {
        if (jacquardPhoto == 9) { jacquardPhoto = 0; }
        else { jacquardPhoto++; }
        $('.jacquard__gallery_photo').attr("src", "img/elements/jacquard/gallery/" + jacquardPhoto + ".png");

    });

    ////////////////// Конструктор

    $('.constructor__jaw_button').click(function() {
        $('.constructor__overlay').css('display', 'block');
        $('.constructor__modal_0').css('display', 'block');
        constructorStage = 0;
        constructorProgressReset();
    });

    $('.constructor__modal_close').click(function() {
        for (let i = 0; i < 5; i++) {
            $('.constructor__modal_' + i).css('display', 'none');
        }
        $('.constructor__overlay').hide();
        console.log('Пряжа: ' + constructorYarn + '; Узор: ' + constructorPattern + '; Цвет: ' + constructorColor);
    });

    for (let i = 0; i < 5; i++) {
        $('.constructor__modal_' + i +'_button').click(function() {
            if (i != 4) {
                $('.constructor__modal_' + i).css('display', 'none');
                $('.constructor__modal_' + (i+1)).fadeIn(300);
                constructorStage++;
                if (i == 3) {
                    $('.constructor__modal_4_jaw_result_img').attr("src", "img/elements/constructor/4/result/" + constructorPattern + constructorColor + ".png");
                }
            }
        });
        
        $('.constructor__modal_' + i +'_back').click(function() {
            $('.constructor__modal_' + constructorStage).css('display', 'none');
            $('.constructor__modal_' + (constructorStage-1)).fadeIn(300);
            constructorStage--;
        });
    }

    $('.constructor__modal_4_reset').click(function() {
        $('.constructor__modal_4').css('display', 'none');
        $('.constructor__modal_1').fadeIn(300);
        constructorStage = 1;
        constructorProgressReset();
    });

    function constructorProgressReset() {
        constructorCheckYarn.forEach((element, index) => {
            if (index == 0) { $(element).css('background-image','linear-gradient(to top, rgb(219 20 20), rgb(251 123 123))'); }
            else { $(element).css('background-image','linear-gradient(to top, #f5f5f5, #f5f5f5)'); }
        });
        constructorCheckPattern.forEach((element, index) => {
            if (index == 0) { $(element).css('background-image','linear-gradient(to top, rgb(219 20 20), rgb(251 123 123))'); }
            else { $(element).css('background-image','linear-gradient(to top, #f5f5f5, #f5f5f5)'); }
        });
        constructorCheckColor.forEach((element, index) => {
            if (index == 0) { $(element).css('background-image','linear-gradient(to top, rgb(219 20 20), rgb(251 123 123))'); }
            else { $(element).css('background-image','linear-gradient(to top, #f5f5f5, #f5f5f5)'); }
        });
        constructorYarn = 1;
        constructorPattern = 1;
        constructorColor = 1;
    }

    constructorCheckYarn.forEach((element, index) => {
        $(element).click(function() {
            $(constructorCheckYarn[constructorYarn-1]).css('background-image','linear-gradient(to top, #f5f5f5, #f5f5f5)');
            $(element).css('background-image','linear-gradient(to top, rgb(219 20 20), rgb(251 123 123))');
            constructorYarn = index+1;
        });
    });
    constructorCheckPattern.forEach((element, index) => {
        $(element).click(function() {
            $(constructorCheckPattern[constructorPattern-1]).css('background-image','linear-gradient(to top, #f5f5f5, #f5f5f5)');
            $(element).css('background-image','linear-gradient(to top, rgb(219 20 20), rgb(251 123 123))');
            constructorPattern = index+1;
        });
    });
    constructorCheckColor.forEach((element, index) => {
        $(element).click(function() {
            $(constructorCheckColor[constructorColor-1]).css('background-image','linear-gradient(to top, #f5f5f5, #f5f5f5)');
            $(element).css('background-image','linear-gradient(to top, rgb(219 20 20), rgb(251 123 123))');
            constructorColor = index+1;
        });
    });

    /////////////// Branding

    brandingItems.forEach((element, index) => {
        if (index != 4) {
            $(element).click(function() {
                $('.branding__overlay').css('display', 'block');
                if (index == 5) { index--; }
                $(brandingItemsMore[index]).fadeIn('fast');
            });
        }
    });

    $('.branding__more_close').click(function() {
        for (let i = 0; i < 5; i++) {
            $(brandingItemsMore[i]).css('display', 'none');
        }
        $('.branding__overlay').hide();
    });

    //////////////// Thanks

    $('.thanks__rightarrow').click(function() {
        if (thanksNumber < 3) {
            thanksNumber++;
        }
        else { 
            thanksNumber = 1;
        }
        updateThanks();
    });

    $('.thanks__leftarrow').click(function() {
        if (thanksNumber > 1) {
            thanksNumber--;
        }
        else { 
            thanksNumber = 3;
        }
        updateThanks();
    });

    function updateThanks() {
        $('.thanks__item2').attr("src", "img/elements/thanks/2/" + thanksNumber + ".png");
        switch (thanksNumber) {
            case 1:
                $('.thanks__item3').attr("src", "img/elements/thanks/3/2.png");
                $('.thanks__item1').attr("src", "img/elements/thanks/1/3.png");
                break;
            case 2:
                $('.thanks__item3').attr("src", "img/elements/thanks/3/3.png");
                $('.thanks__item1').attr("src", "img/elements/thanks/1/1.png");
                break;
            case 3:
                $('.thanks__item3').attr("src", "img/elements/thanks/3/1.png");
                $('.thanks__item1').attr("src", "img/elements/thanks/1/2.png");
                break; 
        }
    }

    $('.thanks__target2').click(function() {
        $('.thanks__overlay').css('display', 'block');
        $('.thanks__overlay_item').attr("src", "img/elements/thanks/a4_"+ thanksNumber +".png");
    });

    $('.thanks__overlay_close').click(function() {
        $('.thanks__overlay').hide();
    });

    /////////////// Experts

    $(expertsMainPlayButton).click(function() {
        setTimeout(function() {
            $('.experts__part1_prewiew_video')[0].play();
            $(expertsMainPlayButton).css('display', 'none');
            setTimeout(function() {
                $(expertsMainPlayButton).css('display', 'block');
            }, 25500);
        }, 200);
    });

    expertsBottomPlayButtons.forEach((element, index) => {
        $(element).click(function() {  
            setTimeout(function() {
                $(element).parent().children().first()[0].play();
                $(element).css('display', 'none');
                if (index == 0) {
                    setTimeout(function() {
                        $(element).css('display', 'block');
                    }, 24500);
                }
                else if (index == 1) {
                    setTimeout(function() {
                        $(element).css('display', 'block');
                    }, 33500);
                }
                else if (index == 2) {
                    setTimeout(function() {
                        $(element).css('display', 'block');
                    }, 24500);
                }
                else if (index == 3) {
                    setTimeout(function() {
                        $(element).css('display', 'block');
                    }, 11500);
                }
            }, 200);
        });
    });

    ///////////// PopUp Forms

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

    validateForms('#gift');
    validateForms('#call_1');
    validateForms('#call_2');
    validateForms('#catalog');

    $('.popup__form3_close').click(function() {
        $('.popup').css('display', 'none');
        $('.popup__form3').css('display', 'none');
        $('label.error').css('display', 'none');
        $('form').trigger('reset');
    });
    $('.popup__form2_close').click(function() {
        $('.popup').css('display', 'none');
        $('.popup__form2').css('display', 'none');
        $('label.error').css('display', 'none');
        $('form').trigger('reset');
    });
    $('.popup__form1_close').click(function() {
        $('.popup').css('display', 'none');
        $('.popup__form1').css('display', 'none');
        $('label.error').css('display', 'none');
        $('form').trigger('reset');
    });


    $('.header__phone_call').click(function() {
        $('.popup').fadeIn('fast');
        $('.popup__form2').fadeIn('fast');
    });

    $('.offer__button').click(function() {
        $('.popup').fadeIn('fast');
        $('.popup__form1').fadeIn('fast');
    });

    $('.calc__button').click(function() {
        $('.popup').fadeIn('fast');
        $('.popup__form3').fadeIn('fast');
    });

    $('.gifts__button').click(function() {
        $('.popup').fadeIn('fast');
        $('.popup__form3').fadeIn('fast');
    });
});