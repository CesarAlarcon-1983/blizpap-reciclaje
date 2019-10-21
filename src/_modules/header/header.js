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
    
    var slideImages = [
        '/images/familia/hero-1.jpg',
        '/images/familia/hero-2.png'
    ]

    var currentSlide = 0;
    var heroImage = $('.diversion-en-familia__hero img');
    
    setTimeout(function() {
        var sliderArrowNext = $('.slick-next');
        var sliderArrowPrev = $('.slick-prev');
        console.log(heroImage);
        sliderArrowPrev.on('click', function() {
            if(currentSlide > 0) {
                currentSlide--
                heroImage.attr('src', slideImages[currentSlide]);
            } else {
                currentSlide = slideImages.length  - 1;
                heroImage.attr('src', slideImages[currentSlide]);
            }
        })

        sliderArrowNext.on('click', function() {
            if(currentSlide < slideImages.length - 1) {
                currentSlide++
                heroImage.attr('src', slideImages[currentSlide]);
            } else {
                currentSlide = 0;
                heroImage.attr('src', slideImages[currentSlide]);
            }
        })
    }, 300) 

    $(heroImage[0]).attr('src', slideImages[0]);

    //Home idicators functionallity

    var indicators = $('.-indicator');

    indicators.on('click', function() {
        indicators.removeClass('-active')
        $(this).addClass('-active');
    })

    $(indicators[0]).addClass('-active')

    var heroHeight = $('#hero').height();
    var reciclajeHeight = $('#reciclaje').height();
    var diversionHeight = $('#diversion').height();

    $(document).on('scroll', function() {
        if($(document).scrollTop() < heroHeight) {
            indicators.removeClass('-active')
            $(indicators[0]).addClass('-active');
        }

        if($(document).scrollTop() >= heroHeight) {
            indicators.removeClass('-active')
            $(indicators[1]).addClass('-active');
        }
        
        if($(document).scrollTop() >= reciclajeHeight + heroHeight) {
            indicators.removeClass('-active')
            $(indicators[2]).addClass('-active');
        }

        if($(document).scrollTop() >= diversionHeight + reciclajeHeight + heroHeight) {
            indicators.removeClass('-active')
            $(indicators[3]).addClass('-active');
        }
    })

    //cuentos Functionallity
   
    var cuentosSlides = {
        cuento1: [
            {
                'url':'/images/cuentos/cuento-1/slide-13.png'
            },
            {
                'url':'/images/cuentos/cuento-1/slide-1.png',
            },
            {
                'url':'/images/cuentos/cuento-1/slide-2.png',
            },
            {
                'url':'/images/cuentos/cuento-1/slide-3.png',
            },
            {
                'url':'/images/cuentos/cuento-1/slide-4.png',
            },
            {
                'url':'/images/cuentos/cuento-1/slide-5.png',
            },
            {
                'url':'/images/cuentos/cuento-1/slide-6.png',
            },
            {
                'url':'/images/cuentos/cuento-1/slide-7.png',
            },
            {
                'url':'/images/cuentos/cuento-1/slide-8.png',
            },
            {
                'url':'/images/cuentos/cuento-1/slide-9.png',
            },
            {
                'url':'/images/cuentos/cuento-1/slide-10.png',
            },
            {
                'url':'/images/cuentos/cuento-1/slide-11.png',
            },
            {
                'url':'/images/cuentos/cuento-1/slide-12.png'
            }
        ],
        cuento2: [
            {
                'url':'/images/cuentos/cuento-2/slide-1.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-2.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-3.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-4.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-5.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-6.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-7.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-8.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-9.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-10.png',
            }
        ],
        cuento3: [
            {
                'url':'/images/cuentos/cuento-2/slide-1.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-2.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-3.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-4.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-5.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-6.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-7.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-8.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-9.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-10.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-11.png',
            }
        ],
        cuento4: [
            {
                'url':'/images/cuentos/cuento-2/slide-1.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-2.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-3.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-4.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-5.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-6.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-7.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-8.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-9.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-10.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-11.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-12.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-13.png',
            }
        ],
        cuento5: [
            {
                'url':'/images/cuentos/cuento-2/slide-1.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-2.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-3.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-4.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-5.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-6.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-7.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-8.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-9.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-10.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-11.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-12.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-13.png',
            }
        ],
        cuento6: [
            {
                'url':'/images/cuentos/cuento-2/slide-1.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-2.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-3.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-4.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-5.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-6.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-7.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-8.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-9.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-10.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-11.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-12.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-13.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-14.png',
            },
            {
                'url':'/images/cuentos/cuento-2/slide-15.png',
            }
        ]
    }
    
    var cuentos = $('.-placeholder')

    cuentos.on('click', function() {
        var cuento = $(this).attr('data-cuento');
        console.log(cuento)
        
        if(cuentosSlides[cuento].length > 0) {
            $(this).iLightBox(
                cuentosSlides[cuento],
                {
                    path:'horizontal',
                    controls: {
                        thumbnail: false,
                        arrows:'true'
                    }
                }
            );
        } else {
            var alert = '<div class="center" style="background: #fff; padding: 50px; text-align: center">' + 
                '<h2>No Cuento available</h2>' +
                '</div>';
            $.iLightBox([{url:alert, type: 'html'}])
        }
    });

};

module.exports = Header;
