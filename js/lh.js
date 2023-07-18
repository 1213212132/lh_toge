$(function () {




    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('.header').addClass('on');
        } else {
            $('.header').removeClass('on');
        }
    });


    $('.main_slide').slick({
        arrows: false,
        fade: true,
        dots: true,
    });


    $('.mainvisual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });
    $('.mainvisual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });





    $('.notice_slide').slick({
        arrows: false,
        fade: true,
        dots: true,
    });

    $('.img_box .arrows .left').on('click', function () {
        $('.notice_slide').slick('slickPrev');
    });
    $('.img_box .arrows .right').on('click', function () {
        $('.notice_slide').slick('slickNext');
    });



    $('.enter').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    })



})