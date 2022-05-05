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
    
});