/**
 * Faster - Multipurpose Corporate Theme
 *
 * @author Themesmid 
 * @version 1.2.0
 */

/* ===================
    Table Of Content
======================
01 PRELOADER
02 COUNTER
03 WOW
04 SWIPER SLIDER
05 BACK TO TOP
06 STICKY BAR
07 STICKY HEADER
08 FIT VIDEO
09 PARALLAX
10 OWL CAROUSEL
11 PORTFOLIO ISOTOPE
12 MEGA MENU

======================*/
(function ($) {
"use strict";


    // BEGIN: 01 Preloader
    var preLoader = function() {
        if($('#preloader').length){
            var $preloader = $('#preloader');
            $preloader.delay(300).fadeOut(600);
        }
    };
    
    // END: Preloader

    // BEGIN: 02 Counter
    var CountTo = function () {
        var initInstances = function () {
          var $count = $('.counter-area-digit');
          if($count.length) {
            $count.appear(function (direction) {
                $(this).countTo();
            }, {
                offset: '100%',
                triggerOnce: true
            });
          }
        };

        return {
            init: function () {
                initInstances();
            }
        };
    }();
    // END: Counter
    
    // BEGIN: 03 Wow
    var wow = function() {
        if($('.wow').length){
            wow = new WOW( {
                mobile: true  // Turn on/off WOW.js on mobile devices.
            }).init();
        }
    };
    // END: Wow Js

     /*BEGIN: 04 Swiper Slider*/
    var swiperSlider = function() {
        if($(".swiper-slider-fade").length !== 0) {
            var swiper = new Swiper('.swiper-container', {
                effect: 'fade', //other supported effects: coverflow, flip, cube, slide
                pagination: null,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                autoplay: 5000,
                speed: 1000,
                spaceBetween: 0,
                loop: true,
                simulateTouch: true,
                onSlideChangeEnd: function(swiper) {
                    $('.swiper-slide').each(function() {
                        if ($(this).index() === swiper.activeIndex) {
                            // Fadein in active slide
                            $(this).find('.slider-content').fadeIn(25);
                        } else {
                            // Fadeout in inactive slides
                            $(this).find('.slider-content').fadeOut(25);
                        }
                    });
                }
            });
        }
    };
    // END: Swiper Slider*/
    
    // BEGIN: 05 Back To top
     var backTotop = function(){
        var $backtotop = $('.back-top');
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 500) {
                $backtotop.addClass('btn-back');
            } else {
                $backtotop.removeClass('btn-back');
            }
        });
        $backtotop.on('click', function() {
            $('html, body').animate({ scrollTop: 0}, 900, 'easeInOutCirc');
            return false;
        });
    };
    // END: Back To top

    // BEGIN: 06 Sticky bar
    var stickyBar = function() {

        if($(".sticky-element").length) {
          var $stickyElement = $(".sticky-element");
          if ($(window).width() <= 1024) {
              $stickyElement.trigger('sticky_kit:detach');
          }
          else {
              $stickyElement.stick_in_parent({
                  offset_top: 100
              });
          }
        }
    };
    // END: Sticky bar

    // BEGIN:07 Sticky Header
    var stickyHeader = function() {
        var sticky = $('.navbar-sticky'),
        stickyStatic = $('.header-static');
            $(window).scroll(function () {
                var scTop = $(document).scrollTop();
                if (scTop > 400) {
                    if (!$(".sticky-space").length) {
                        stickyStatic.after('<div class="sticky-space"></div>');
                        $(".sticky-space").css({'height': sticky.height() + 'px'});
                    }
                    sticky.addClass('navbar-sticky-gdn');
                } 
                else {
                    $(".sticky-space").remove();
                    sticky.removeClass('navbar-sticky-gdn');
            }
        });
    };
    // END: Sticky Header

    // BEGIN:08 Fit Video
    var fullWithvideo = function(){
        // Target your .container, .wrapper, .post, etc.
        if($(".fit-video").length){
            var $fitvideo = $(".fit-video");
            $fitvideo.fitVids();
        }
      };
    // END: Fit Video

    // BEGIN: 09 Parallax
    var jarallax = function(){
        if($('.style-parallax').length){
            $('.style-parallax').jarallax({
                speed: 0.5
            });
        }
    };

    // END: Parallax
    // BEGIN: 10 Carousel
    var owlCarousel = function() {
        var $carousel = $('.owl-carousel');
        if( $carousel.length < 1 ){
            return true;
        }
    $('.owlcarousel.owl-carousel').owlCarousel({
        loop:true,
        margin: 30,
        mouseDrag:true,
        autoplay: true,
        dots: false,
        nav: false,
        navText: ['<i class="icon-left-open"></i>','<i class="icon-right-open"></i>'],
        responsiveClass:true,
        responsive: {
            0: {
                margin: 10
                , items: 1
            }
            , 768: {
                items: 1
            }
            , 970: {
                items: 2
            }
            , 1024: {
                items: 3
            }
            , 1200: {
                items: 3
            }
        }
    });
    $(".owl-items1").owlCarousel({
        loop:true,
        margin: 30,
        mouseDrag:true,
        autoplay: true,
        dots: false,
        nav: false,
        navText: ['<i class="icon-left-open"></i>','<i class="icon-right-open"></i>'],
        responsiveClass:true,
        responsive: {
            0: {
                margin: 10
                , items: 1
            }
            , 480: {
                items: 1
            }
            , 768: {
                items: 1
            }
            
            , 1024: {
                items: 1
            }
            , 1200: {
                items: 1
            }
            
        }
    });
     $('.owl-items2.owl-carousel').owlCarousel({
        loop:true,
        margin: 30,
        mouseDrag:true,
        autoplay: true,
        dots: false,
        nav: false,
        navText: ['<i class="icon-left-open"></i>','<i class="icon-right-open"></i>'],
        responsiveClass:true,
        responsive: {
            0: {
                margin: 10
                , items: 1
            }
            , 575: {
                items: 1
            }
            , 970: {
                items: 2
            }
            , 1024: {
                items: 2
            }
            , 1200: {
                items: 2
            }
        }
    });
    
    $('.owl-items4.owl-carousel').owlCarousel({
        loop:true,
        margin: 30,
        mouseDrag:true,
        autoplay: true,
        dots: false,
        nav: false,
        navText: ['<i class="icon-left-open"></i>','<i class="icon-right-open"></i>'],
        responsiveClass:true,
        responsive: {
            0: {
                margin: 10
                , items: 1
            }
            , 768: {
                items: 1
            }
            , 970: {
                items: 2
            }
            , 1024: {
                items: 4
            }
            , 1200: {
                items: 4
            }
        }
    });
    $('.owl-items6.owl-carousel').owlCarousel({
        loop:true,
        margin: 30,
        mouseDrag:true,
        autoplay: true,
        dots: false,
        nav: false,
        navText: ['<i class="icon-left-open"></i>','<i class="icon-right-open"></i>'],
        responsiveClass:true,
        responsive: {
            0: {
                margin: 10
                , items: 1
            }
            , 768: {
                items: 1
            }
            , 970: {
                items: 2
            }
            , 1024: {
                items: 4
            }
            , 1200: {
                items: 6
            }
        }
    });
    // Clients owlCarousel
    $('.owl-clients.owl-carousel').owlCarousel({
        loop: true
        , margin: 10
        , mouseDrag: true
        , autoplay: true
        , dots: false
        , responsiveClass: true
        , responsive: {
            0: {
                margin: 10
                , items: 1
            }
            , 480: {
                items: 2
            }
            , 768: {
                items: 3
            }
            , 992: {
                items: 4
            }
            , 1200: {
                items: 6
            }
        }
    });
    
    var owl = $('.owl-port-slider');
        owl.owlCarousel({
            items:1,
            loop:true,
            margin:10,
            dots: false,
            nav: false,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        });
 }   
    
    // END: Carousel
    // BEGIN: 11 Portfolio Isotope
    var portfolioIsotope = function() {
        if ( $().isotope ) {
          var $container = $('.filterContainer');
          $container.imagesLoaded(function(){
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
          });  
        }
        $('.tmFilter a').click(function () {
            $('.tmFilter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    };
    // END: Portfolio Isotope
    // BEGIN: 12 Mega Menu
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
        if (!$(this).next().hasClass('show')) {
          $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');

        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
          $('.dropdown-submenu .show').removeClass("show");
        });

        return false;
    });
     
    // END: Mega Menu
     $(".navbar-nav a").each(function () {
        if (this.href == window.location.href) {
            $(this).addClass("active");
            $(this).parent().addClass("active"); // add active to li of the current link
            $(this).parent().parent().parent().addClass("active"); // add active class to an anchor
            $(this).parent().parent().parent().parent().parent().addClass("active"); // add active class to an anchor
        }
    });
    // Initialze all functions

    $(window).on('scroll', function (){
      stickyBar();
    }).on('load', function() {
      preLoader();
    });
    
    //Document ready functions
    $(document).ready(function () {
          stickyHeader();
          CountTo.init();
          swiperSlider();
          wow();
          backTotop();
          fullWithvideo();
          jarallax();
          owlCarousel();
          portfolioIsotope();
    });    
})(jQuery);