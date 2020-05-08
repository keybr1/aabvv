"use strict";
(function ($) {
    $('.header__menu--open').click(function (e) {
        e.preventDefault();
        $('.header__mobile').toggleClass('header__mobile--visible');
    });
    $('.gallery__download').click(function (e) {
        e.preventDefault();
        $('.gallery__element--hidden').addClass('gallery__element--visible');
        $('.gallery__download').css('display','none');
    });

    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false;
    });



})(jQuery);