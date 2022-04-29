$(document).ready(function() {
    new WOW().init();

    setTimeout(loadOverflow, 2000);

    $(window).load(function() {
        $('#before-load').find('img').fadeOut(2000).end().delay(2000).fadeOut('slow');
    });

    function loadOverflow() {
        $('body').css('overflow-y', 'scroll');
    }
    
    function showScroll(element) {
        $(window).scroll(function(){
            if ($(window).scrollTop() > 900) {
                $(element).removeClass('hidden_on');
            }
        });
    }
    showScroll('.advantages__wrap');

    function scaleOn(element, element1, item) {
        $(element).mouseover(function() {  
            $(element1).removeClass("scale_off");    
            $(element1).addClass("scale_on");
            if (item == 1) {
                $(".bokeh_advantages").stop(true).animate({left: "-297px", bottom: "-170px", queue: false, opacity: 0.35}, 300);
                $(".advantages__items_point1_img").css('opacity', '0.2');
            }
            else if (item == 2) {
                $(".bokeh_advantages").stop(true).animate({left: "-734px", bottom: "-379px", queue: false, opacity: 0.35}, 300);
                $(".advantages__items_point2_img").css('opacity', '0.2');
            }
            else if (item == 3) {
                $(".bokeh_advantages").stop(true).animate({left: "-734px", bottom: "-561px", queue: false, opacity: 0.35}, 300);
                $(".advantages__items_point4_img").css('opacity', '0.2');
            }
            else if (item == 4) {
                $(".bokeh_advantages").stop(true).animate({left: "-710px", bottom: "-717px", queue: false, opacity: 0.35}, 300);
                $(".advantages__items_point6_img").css('opacity', '0.2');
            }
            else if (item == 5) {
                $(".bokeh_advantages").stop(true).animate({left: "-297px", bottom: "-873px", queue: false, opacity: 0.35}, 300);
                $(".advantages__items_point8_img").css('opacity', '0.2');
            }
            else if (item == 6) {
                $(".bokeh_advantages").stop(true).animate({left: "70px", bottom: "-750px", queue: false, opacity: 0.35}, 300);
                $(".advantages__items_point7_img").css('opacity', '0.2');
            }
            else if (item == 7) {
                $(".bokeh_advantages").stop(true).animate({left: "115px", bottom: "-557px", queue: false, opacity: 0.35}, 300);
                $(".advantages__items_point5_img").css('opacity', '0.2');
            }
            else if (item == 8) {
                $(".bokeh_advantages").stop(true).animate({left: "120px", bottom: "-360px", queue: false, opacity: 0.35}, 300);
                $(".advantages__items_point3_img").css('opacity', '0.2');
            }
        });
        
        $(element).mouseleave(function() {    
            $(element1).removeClass("scale_on");  
            $(element1).addClass("scale_off");
            $(".bokeh_advantages").stop(true).animate({left: "-297px", bottom: "-510px", queue: false, opacity: 0.2}, 300);
            for ( let i = 1; i < 9; i++ ) {
                $(".advantages__items_point"+i+"_img").css('opacity', '1');
            }
        });
    }
    for ( let i = 1; i < 9; i++ ) {
        scaleOn('.advantages__items_sunshine_'+i, '.advantages__items_point_text_'+i, i);
    }

    const video = document.querySelectorAll('video');

    $(".advantages__button").click(function() {
        video[0].play();
        $(".advantages__button").fadeOut('fast').delay(25000).fadeIn();
    });
    
  
});