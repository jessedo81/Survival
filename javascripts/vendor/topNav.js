$(function(){
    $('#header_nav').data('size','big');
});

$(window).scroll(function(){
    var $nav = $('#header_nav');
    
    if ($('body').scrollTop() + 1 > 0) {
    //if ($(window).scrollTop() + 1 >= $(document).height() - $(window).height()){
        if ($nav.data('size') == 'big') {
            $nav.data('size','small').stop().animate({
                height:'40px'
            }, 600);
        }
    } else {
        if ($nav.data('size') == 'small') {
            $nav.data('size','big').stop().animate({
                height:'100px'
            }, 600);
        }  
    }
});
