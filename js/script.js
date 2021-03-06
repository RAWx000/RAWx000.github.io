$(document).ready(function() {
    new WOW().init();

    setTimeout(loadOverflow, 200);

    const textures = document.querySelectorAll('.textures__rightside_elements_item_img'),
          texturesName = document.querySelectorAll('.textures__rightside_elements_item_name'),
          texturesCurrent = document.querySelector('.textures__leftside_nav_tname'),
          bobbinItems = document.querySelectorAll('.bobbins__carousel_item'),
          thanksItems = document.querySelectorAll('.thanks__wrapper_item'),
          projectsPleds = document.querySelectorAll('.projects__item_pled'),
          projectsLogos = document.querySelectorAll('.projects__item_logo'),
          projectsNums = document.querySelectorAll('.projects__item_num'),
          faceItems = document.querySelectorAll('.face__item_img'),
          faceBorders = document.querySelectorAll('.face__item_border'),
          jacquardItems = document.querySelectorAll('.jacquard__item_img'),
          jacquardBorders = document.querySelectorAll('.jacquard__item_round'),
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
          expertsMainPlayButton = document.querySelector('.experts__play_main'),
          galleryPhotosItem = document.querySelectorAll('.gallery__photos_item');

    let currentTextureNumber = 1,
        firstBobbinItem = 0,
        lastBobbinItem = 11,
        currentBobbinItem = 5,
        bobbinColors = ["??????????????????", "??????????????????", "??????????????", "??????????", "????????????????", "??????????????", "????????????????????", "????????????", "????????????", "??????????", "??????????????", "??????????"],
        //////////////// ?????????????????????? [????????]
        calcDiscount = [0, 0, 5, 0],
        calcDiscountOld = 5,
        ////////////////
        processStage = 0,
        //////////////// ?????????????????????? [????????]
        constructorStage = 0,
        constructorYarn = 1,
        constructorPattern = 1,
        constructorColor = 1,
        jacquardPhoto = 0,
        ///////////////
        firstThanksItem = 0,
        lastThanksItem = 8,
        currentThanksItem = 4,
        typeOfSubmit = 0;


    $(window).load(function() {
        $('#before-load').find('img').fadeOut(2000).end().delay(1000).fadeOut('slow');
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
        if (firstBobbinItem < 11) { firstBobbinItem++; }
        else { firstBobbinItem = 0; }
        currentBobbin(1);
    });

    $('.bobbins__nav_leftarrow').click(function() {
        $(bobbinItems[lastBobbinItem]).prependTo('.bobbins__carousel');
        firstBobbinItem = lastBobbinItem;
        if (lastBobbinItem > 0) { lastBobbinItem--; }
        else { lastBobbinItem = 11; }
        currentBobbin(0);
    });

    function currentBobbin(direction) {
        if (direction == 1) {
            if (currentBobbinItem < 11) {
                currentBobbinItem++;
            }
            else { currentBobbinItem = 0; }
        }
        else {
            if (currentBobbinItem > 0) {
                currentBobbinItem--;
            }
            else { currentBobbinItem = 11; }
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
                $(".bobbins__nav_color").css('color', '#c0c0c0');
                break;
            case 10:
                $(".bobbins__nav_color").css('color', '#e0cfb1');
                break;
            case 11:
                $(".bobbins__nav_color").css('color', '#808080');
                break;
        }
    }


    ///// PROJECTS

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

    $('.projects__button').click(function() {
        $('.projects__hide').slideToggle('slow');
        $('.projects__hide').css('display', 'flex');
        $('.projects__button').css('display','none');
        $('.projects').css('padding', '150px 0 100px 0');
    });

    ////////////////////// FACE

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

    /////////////////////// ??????????

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
                $('.process__stage_header').html('1 ????????<br>????????????????????');
                $('.process__name').html('1 ????????. ????????????????????');
                $('.process__stage_descr').html('???????? ?????????????? ?????????????????????? ?????????????????? ??????????????????????<br>??????????????????, ?????????? ?? ?????????????????????????? ????????????????????????????<br>???????????????????????????????? ?????????????????? ?????? ?????????????????? ??????????????.<br>???? ???????? ?????????? ???????????????? ???????????????? ?????????? ?? ????????????????????<br>????????????.');
                break;
            case 1:
                $('.process__stage_header').html('2 ????????<br>????????????????????????');
                $('.process__name').html('2 ????????. ????????????????????????');
                $('.process__stage_descr').html('?????????? ?????????????????? ???? ?????????????????? ?????????????? Shima Seiki<br>???????????????? ??????????????????, ?????????? 800 ???????????? ????????????????????????<br>?????????????????????? ???????? ?????????? ?? ?????????????????? ??????????, ??????????????<br>?????????????????? ?????????????????????? ?????????? ?????????????? ???????????????????????? ??<br>?????????????????????? ????????.');
                break;
            case 2:
                $('.process__stage_header').html('3 ????????<br>??????????????????????????');
                $('.process__name').html('3 ????????. ??????????????????????????');
                $('.process__stage_descr').html('???????????????????? ???????????? ???????????? ?????????????? ???? ????????????????????<br>?? ???????????????????????????? ???? ?????? ????????????????????, ?? ?????????????? ????????????????<br>???? ?????????????????????? ???? ?????????????????? ???????????????? ?????????? ?? ????????????<br>????????????????????. ???? ???????? ?????????? ???????? ???????? ?????????????? ??????????????<br>?????? ?????????????? ?????????????? ?? ??????????.');
                break;
            case 3:
                $('.process__stage_header').html('4 ????????<br>?????? ?? ????????????????');
                $('.process__name').html('4 ????????. ?????? ?? ????????????????');
                $('.process__stage_descr').html('???????????????????? ?????????????????????? ???????????????? ???????????????????????? ??????????????????<br>?????????????????????????? ?????????????????????? ????????????????. ???????????????????? ??????????<br>?? ????????????????, ???????????????????? ?????????????? ?? ?????????????????????????? ?????????? ???<br>?????????????? ???????????? ?? ?????????????? ?? ??????????????????????. ??????????????????????!');
                break;
            case 4:
                $('.process__stage_header').html('5 ????????<br>???????????????????? ??????????????');
                $('.process__name').html('5 ????????. ???????????????????? ??????????????');
                $('.process__stage_descr').html('???????????????????????? ???????????????? ???????????????? ?????? ??????????????????????<br>???????????????????????????????? ???????????????????????? ?? ???????????????????? ?????? ????????<br>?? ????????????????. ?????????? ???????????? ???????????? ????????, ????????????????????<br>???????????????? ???????????????????? ?? ?? ?????????????????????????? ??????????????????????<br>?????????????? ????????????????????!');
                break;
        }
    }

    ////////////////// ??????????????

    $('.jacquard__gallery_left').click(function() {
        if (jacquardPhoto == 0) { jacquardPhoto = 9; }
        else { jacquardPhoto--; }
        $('.jacquard__gallery_photo').attr("src", "img/elements/jacquard/gallery/" + jacquardPhoto + ".jpg");
    });

    $('.jacquard__gallery_right').click(function() {
        if (jacquardPhoto == 9) { jacquardPhoto = 0; }
        else { jacquardPhoto++; }
        $('.jacquard__gallery_photo').attr("src", "img/elements/jacquard/gallery/" + jacquardPhoto + ".jpg");

    });

    jacquardItems.forEach((element, i) => {
        $(element).mouseover(function() {
            $(jacquardBorders[i]).css('background-color','#ff59599a');
            $(element).css('transform','scale(1.1)');
        });
        $(element).mouseleave(function() {
            $(jacquardBorders[i]).css('background-color','');
            $(element).css('transform','');
        });
    });

    ////////////////// ??????????????????????

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
        console.log('??????????: ' + constructorYarn + '; ????????: ' + constructorPattern + '; ????????: ' + constructorColor);
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
        $(thanksItems[firstThanksItem]).appendTo('.thanks__wrapper');
        lastThanksItem = firstThanksItem;
        if (firstThanksItem < 8) { firstThanksItem++; }
        else { firstThanksItem = 0; }
        currentThanks(1);
    });

    $('.thanks__leftarrow').click(function() {
        $(thanksItems[lastThanksItem]).prependTo('.thanks__wrapper');
        firstThanksItem = lastThanksItem;
        if (lastThanksItem > 0) { lastThanksItem--; }
        else { lastThanksItem = 8; }
        currentThanks(0);
    });

    function currentThanks(direction) {
        if (direction == 1) {
            if (currentThanksItem < 8) {
                currentThanksItem++;
            }
            else { currentThanksItem = 0; }
        }
        else {
            if (currentThanksItem > 0) {
                currentThanksItem--;
            }
            else { currentThanksItem = 8; }
        }
    }

    $('.thanks__target').click(function() {
        console.log(currentThanksItem);
        $('.thanks__overlay').css('display', 'flex');
        $('.thanks__overlay_item').attr("src", "img/elements/thanks/blancs/"+ (currentThanksItem+1) +".png");
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
                name: "????????????????????, ?????????????? ???????? ??????",
                phone: "????????????????????, ?????????????? ???????? ?????????? ????????????????",
                email: {
                    required: "????????????????????, ?????????????? ???????? ??????????",
                    email: "???????????????? ???????????? ???????????? ??????????"
                }
            }
        });
    }

    validateForms('#gift');
    validateForms('#call_1');
    validateForms('#call_2');
    validateForms('#catalog');

    $('.popup__form4_close').click(function() {
        $('.popup').css('display', 'none');
        $('.popup__form4').css('display', 'none');
        typeOfSubmit = 0;
    });
    $('.popup__form3_close').click(function() {
        $('.popup').css('display', 'none');
        $('.popup__form3').css('display', 'none');
        $('label.error').css('display', 'none');
        $('form').trigger('reset');
        typeOfSubmit = 0;
    });
    $('.popup__form2_close').click(function() {
        $('.popup').css('display', 'none');
        $('.popup__form2').css('display', 'none');
        $('label.error').css('display', 'none');
        $('form').trigger('reset');
        typeOfSubmit = 0;
    });
    $('.popup__form1_close').click(function() {
        $('.popup').css('display', 'none');
        $('.popup__form1').css('display', 'none');
        $('label.error').css('display', 'none');
        $('form').trigger('reset');
        typeOfSubmit = 0;
    });


    $('.header__phone_call').click(function() {
        $('.popup').fadeIn('fast');
        $('.popup__form2').fadeIn('fast');
        $('#call_2').attr("onsubmit","ym(50797489,'reachGoal','ZAYAVKA'); return true;");
        typeOfSubmit = 0; // ????????????????????
    });

    $('.offer__button').click(function() {
        $('.popup').fadeIn('fast');
        $('.popup__form1').fadeIn('fast');
        $('#catalog').attr("onsubmit","ym(50797489,'reachGoal','ZAYAVKA'); return true;");
        typeOfSubmit = 1; // ??????????????
    });

    $('.calc__button').click(function() {
        $('.popup').fadeIn('fast');
        $('.popup__form3').fadeIn('fast');
        $('#gift').attr("onsubmit","ym(50797489,'reachGoal','rashet_skidki'); return true;");
        typeOfSubmit = 2; // ???????????? ???? ??????????????
    });

    $('.gifts__button').click(function() {
        $('.popup').fadeIn('fast');
        $('.popup__form3').fadeIn('fast');
        $('#gift').attr("onsubmit","ym(50797489,'reachGoal','ZAYAVKAVBUDJET'); return true;");
        typeOfSubmit = 2; // ???????????? ???? ??????????????
    });

    $('.constructor__modal_4_button').click(function() {
        $('.constructor__modal_4').css('display', 'none');
        $('.constructor__overlay').hide();
        console.log('??????????: ' + constructorYarn + '; ????????: ' + constructorPattern + '; ????????: ' + constructorColor);
        setTimeout(function() {
            $('.popup').fadeIn('fast');
            $('.popup__form3').fadeIn('fast');
            $('#gift').attr("onsubmit","ym(50797489,'reachGoal','Konstruktor'); return true;");
            typeOfSubmit = 2; // ???????????? ???? ?????????????? 
        }, 200);
        
    });

    ////////////////////// EMAIL FORMS SUBMIT

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
                    $('.popup, .popup__form1, .popup__form2, .popup__form3').css('display', 'none');
                    $('label.error').css('display', 'none');
                    $('form').trigger('reset');
                    setTimeout(function() {
                        $('.popup').fadeIn('fast');
                        $('.popup__form4').fadeIn('fast');
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
                    $('.popup, .popup__form1, .popup__form2, .popup__form3').css('display', 'none');
                    $('label.error').css('display', 'none');
                    $('form').trigger('reset');
                    setTimeout(function() {
                        $('.popup').fadeIn('fast');
                        $('.popup__form4').fadeIn('fast');
                    }, 300);
                    typeOfSubmit = 0;
                });
                return false;
            case 2:
                $.ajax({
                    type: "POST",
                    url: "mailer/smart_gift.php",
                    data: $(this).serialize()
                }).done(function() {
                    $(this).find("input").val("");
                    $('.popup, .popup__form1, .popup__form2, .popup__form3').css('display', 'none');
                    $('label.error').css('display', 'none');
                    $('form').trigger('reset');
                    setTimeout(function() {
                        $('.popup').fadeIn('fast');
                        $('.popup__form4').fadeIn('fast');
                    }, 300);
                    typeOfSubmit = 0;
                });
                return false;
        }
    });

    /////////////////// GALLERY

    galleryPhotosItem.forEach((element, index) => {
        $(element).click(function() {
            $('.gallery__overlay').css('display', 'flex');
            $('.gallery__overlay_img').attr("src", "img/elements/gallery/imgs/" + (index+1) + ".jpg");
        });
    });
    $('.gallery__overlay_close').click(function() {
        $('.gallery__overlay').fadeOut('fast');
    });

});