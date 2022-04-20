new WOW().init();

$(window).scroll(function(){
    if ($(window).scrollTop() > 900) {
        $('.advantages__wrap').addClass('hidden_off');
        $('.advantages__wrap').removeClass('idden_on');
    }
});