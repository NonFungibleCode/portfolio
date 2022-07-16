$(function(){
    $(".header_menu .m").on("mouseover focus",function(){
        $(".header_menu").stop().animate({height:"250px"}, 300);
        $(".submenu").fadeIn(300);
        $(".black_back").fadeIn(300);
});

    $(".header_menu").on("mouseleave blur",function(){
        $(".header_menu").stop().animate({height:"65px"}, 300);
        $(".submenu").fadeOut(300);
        $(".black_back").fadeOut(300);
});

//header_menu fixed

var nav = $('.header');
    var navoffset = $('.header').offset();  
    
    $(window).scroll(function () {
        if ($(this).scrollTop() >= navoffset.top) {  
            nav.css('position','fixed').css('top',0);
            $(".logo").css("margin-top","10px").css("transition","all 0.5s"); 
        }else {
            nav.css('position','absolute').css('top',83);
            $(".logo").css("margin-top","0px"); 
        }
    });
});