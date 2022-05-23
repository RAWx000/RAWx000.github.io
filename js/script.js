$(document).ready(function() {
    new WOW().init();

    setTimeout(loadOverflow, 2000);

    const textures = document.querySelectorAll('.textures__rightside_elements_item_img'),
          texturesName = document.querySelectorAll('.textures__rightside_elements_item_name'),
          texturesCurrent = document.querySelector('.textures__leftside_nav_tname');

    let currentTextureNumber = 1;

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

    
});