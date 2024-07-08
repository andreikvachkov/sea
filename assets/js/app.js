jQuery(document).ready(function ($) {
    $('.dropbtn').click(function () {
        var $dropdown = $(this).parent('.dropdown');
        $dropdown.toggleClass('show');
    });

    $('.dropdown-content a').click(function (e) {
        e.preventDefault();
        var selectedText = $(this).data('value');
        var $dropdown = $(this).closest('.dropdown');
        $dropdown.find('.dropbtn').text(selectedText);
        $dropdown.removeClass('show');
    });

    $(window).click(function (e) {
        if (!$(e.target).closest('.dropdown').length) {
            $('.dropdown').removeClass('show');
        }
    });


    $('.filter__dropbtn').click(function () {
        var $dropdown = $(this).parent('.filter__dropdown');
        $dropdown.toggleClass('show');
    });

    $('.filter__dropdown-content a').click(function (e) {
        e.preventDefault();
        var selectedText = $(this).data('value');
        var $dropdown = $(this).closest('.filter__dropdown');
        $dropdown.find('.filter__dropbtn').text(selectedText);
        $dropdown.removeClass('show');
    });

    $(window).click(function (e) {
        if (!$(e.target).closest('.filter__dropdown').length) {
            $('.filter__dropdown').removeClass('show');
        }
    });

    var generalItems = $('.general-plan__item__name');

    var generalContainer = $('.general-plan__item__contetn__mobile');

    var generalcloseButton = $('.general-plan__close');

    generalcloseButton.click(function () {
        generalContainer.removeClass('active');

        generalItems.removeClass('active');
    });

    generalItems.click(function () {
        generalItems.removeClass('active');

        $(this).addClass('active');

        generalContainer.addClass('active');
    });

    var leftItems = $('.layouts__left__item');

    var rightContainer = $('.layouts__right');

    var closeButton = $('.layouts__close');

    closeButton.click(function () {
        rightContainer.removeClass('active');

        leftItems.removeClass('active');
    });

    leftItems.click(function () {
        leftItems.removeClass('active');

        $(this).addClass('active');

        rightContainer.addClass('active');
    });


    var $slide3 = $(".development__slider");
    var $slider4 = $(".development__slider2");

    $slide3.slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true,
        asNavFor: '.development__slider2'
    });

    $slider4.slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.development__slider'
    });
    function updateSliderInfo2(event, slick, currentSlide) {
        var current = (currentSlide ? currentSlide : 0) + 1;
        var total = slick.slideCount;
        $('.developmentcurrent-slide').text(current);
        $('.developmenttotal-slides').text(total);

        if (current === 1) {
            $('#developmentPrevButton').addClass('button-inactive').removeClass('button-active');
        } else {
            $('#developmentPrevButton').addClass('button-active').removeClass('button-inactive');
        }

        if (current === total) {
            $('#developmentNextButton').addClass('button-inactive').removeClass('button-active');
        } else {
            $('#developmentNextButton').addClass('button-active').removeClass('button-inactive');
        }
    }

    $slider4.on('init', function (event, slick) {
        updateSliderInfo2(event, slick);
    });

    $slider4.on('afterChange', function (event, slick, currentSlide) {
        updateSliderInfo2(event, slick, currentSlide);
    });
    $('#developmentPrevButton').on('click', function () {
        $('.development__slider').slick('slickPrev');
    });
    $('#developmentNextButton').on('click', function () {
        $('.development__slider').slick('slickNext');
    });
    $slider4.slick('slickGoTo', 0);


    var $slider = $(".advantages__slider");
    var $slider2 = $(".advantages__slider2");

    $slider.slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.advantages__slider2'
    });

    $slider2.slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.advantages__slider'
    });

    function updateSliderInfo(event, slick, currentSlide) {
        var current = (currentSlide ? currentSlide : 0) + 1;
        var total = slick.slideCount;
        $('.current-slide').text(current);
        $('.total-slides').text(total);

        if (current === 1) {
            $('#advantagesPrevButton').addClass('button-inactive').removeClass('button-active');
        } else {
            $('#advantagesPrevButton').addClass('button-active').removeClass('button-inactive');
        }

        if (current === total) {
            $('#advantagesNextButton').addClass('button-inactive').removeClass('button-active');
        } else {
            $('#advantagesNextButton').addClass('button-active').removeClass('button-inactive');
        }
    }

    $slider2.on('init', function (event, slick) {
        updateSliderInfo(event, slick);
    });

    $slider2.on('afterChange', function (event, slick, currentSlide) {
        updateSliderInfo(event, slick, currentSlide);
    });
    $('#advantagesPrevButton').on('click', function () {
        $('.advantages__slider').slick('slickPrev');
    });
    $('#advantagesNextButton').on('click', function () {
        $('.advantages__slider').slick('slickNext');
    });
    $slider2.slick('slickGoTo', 0);


    var $backToTopButton = $('.back__top');

    $(window).scroll(function () {
        if ($(window).scrollTop() > $(window).height()) {
            $backToTopButton.addClass('visible');
        } else {
            $backToTopButton.removeClass('visible');
        }
    });

    $backToTopButton.click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
    });

    $(".gallery__slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        arrows: false,
        asNavFor: '.gallery__slider2',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    dots: true,
                }
            },
        ]
    });
    var slider2 = $('.gallery__slider2').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        fade: true,
        asNavFor: '.gallery__slider'
    });
    $('#galleryPrevButton').on('click', function () {
        $('.gallery__slider').slick('slickPrev');
    });
    $('#galleryNextButton').on('click', function () {
        $('.gallery__slider').slick('slickNext');
    });


    function openPopup() {
        $('.popupForm__open').addClass('active');
        $('body').addClass('no-scroll');
    }

    function closePopup() {
        $('.popupForm__open').removeClass('active');
        $('body').removeClass('no-scroll');
    }

    $('.popup__close').on('click', closePopup);

    $('.open-popup-button').on('click', openPopup);
});