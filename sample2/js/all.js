$(document).ready(function() {
    $('.top').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 333);
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.top').fadeIn(222);
        } else {
            $('.top').stop().fadeOut(222);
        }
    }).scroll();


    $('.header_menu>ul>li>a').click(function(event) {
        event.preventDefault();
        $(this).parent().find('ul').slideToggle(500);
        $(this).parent().siblings().find('ul').slideUp(500);


    });

    $('.header_menu ul ul a').click(function(event) {
        $('body, html').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 750);
    });



    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },

    })


});