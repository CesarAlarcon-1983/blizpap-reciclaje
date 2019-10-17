'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');
    var homeHero = $('.home__hero');

    menuOpen.on('click', function(){
        header.toggleClass('-open');
        body.toggleClass('-hideOverflow');
    });

    $(document).on('scroll', function() {
        if($(document).scrollTop() > scroll) {
            header.addClass('js-scrolled');
            homeHero.addClass('js-scrolled');
        } else {
            header.removeClass('js-scrolled');
            homeHero.removeClass('js-scrolled');
        }
    })

    var contents = $('[data-content]');
    var targets = $('[data-target]');

    contents.first().addClass('-active');

    targets.on('click', function() {
        contents.removeClass('-active');

        var index = targets.index($(this));
        $(contents[index]).addClass('-active');
    })

    console.log(contents);
    var viewport = 0;
    var scroll = 0;

    if($(window).width() < 640) {
        viewport = 110;
        scroll = 100;
    } else {
        viewport = 0;
        scroll = 400;
    }

    // var indicator = $('.-indicator');

    // var windowHeight = $(window).height();
    
    // $(window).on('scroll', function() {
        
    // })
    // for(var i = 0; i < indicator.length; i++) {

    // }

    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();

                $('html, body').animate({
                    scrollTop: target.offset().top - viewport
                }, 1000, function() {
                // Callback after animation
                // Must change focus!
                    var $target = $(target);
                    $target.focus();
                });
            }
        }
    });
};

module.exports = Header;
