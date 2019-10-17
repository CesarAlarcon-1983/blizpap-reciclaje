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
            '/images/cuentos/cuento-1/slide-13.png',
            '/images/cuentos/cuento-1/slide-1.png',
            '/images/cuentos/cuento-1/slide-2.png',
            '/images/cuentos/cuento-1/slide-3.png',
            '/images/cuentos/cuento-1/slide-4.png',
            '/images/cuentos/cuento-1/slide-5.png',
            '/images/cuentos/cuento-1/slide-6.png',
            '/images/cuentos/cuento-1/slide-7.png',
            '/images/cuentos/cuento-1/slide-8.png',
            '/images/cuentos/cuento-1/slide-9.png',
            '/images/cuentos/cuento-1/slide-10.png',
            '/images/cuentos/cuento-1/slide-11.png',
            '/images/cuentos/cuento-1/slide-12.png'
        ],
        anexo: {
            room1: [
                {
                    'url':'/images/house/anexo/anexo-hab1-1.jpg',
                },
                {
                    'url':'/images/house/anexo/anexo-hab1-2.jpg',
                }
            ],
            room2: [
                {
                    'url':'/images/house/anexo/anexo-hab2-1.jpg',
                },
                {
                    'url':'/images/house/anexo/anexo-hab2-2.jpg',
                },
                {
                    'url':'/images/house/anexo/anexo-hab2-3.jpg',
                },
                {
                    'url':'/images/house/anexo/anexo-hab2-4.jpg',
                }
            ],
            room3: [
            ],
            room4: [
                {
                    'url':'/images/house/anexo/anexo-hab4-1.jpg',
                },
                {
                    'url':'/images/house/anexo/anexo-hab4-2.jpg',
                },
                {
                    'url':'/images/house/anexo/anexo-hab4-3.jpg',
                },
                {
                    'url':'/images/house/anexo/anexo-hab4-4.jpg',
                }
            ]
        },
        thames: {
            room0: [
            ],
            room1: [
                {
                    'url':'/images/house/thames/thames-hab1-1.jpg',
                },
                {
                    'url':'/images/house/thames/thames-hab1-2.jpg',
                },
                {
                    'url':'/images/house/thames/thames-hab1-3.jpg',
                },
                {
                    'url':'/images/house/thames/thames-hab1-4.jpg',
                }
            ],
            room2: [
                {
                    'url':'/images/house/thames/thames-hab2-1.jpg',
                },
                {
                    'url':'/images/house/thames/thames-hab2-2.jpg',
                }
            ],
            room3: [
                {
                    'url':'/images/house/thames/thames-hab3-1.jpg',
                },
                {
                    'url':'/images/house/thames/thames-hab3-2.jpg',
                }
            ],
            room4: [
                {
                    'url':'/images/house/thames/thames-hab4-1.jpg',
                },
                {
                    'url':'/images/house/thames/thames-hab4-2.jpg',
                }
            ],
            room5: [
            ],
            room6: [
                {
                    'url':'/images/house/thames/thames-hab6-1.jpg',
                }
            ],
            room7: [
                {
                    'url':'/images/house/thames/thames-hab7-1.jpg',
                },
                {
                    'url':'/images/house/thames/thames-hab7-2.jpg',
                },
                {
                    'url':'/images/house/thames/thames-hab7-3.jpg',
                },
                {
                    'url':'/images/house/thames/thames-hab7-4.jpg',
                },
                {
                    'url':'/images/house/thames/thames-hab7-5.jpg',
                }
            ],
            room8: [
                {
                    'url':'/images/house/thames/thames-hab8-1.jpg',
                },
                {
                    'url':'/images/house/thames/thames-hab8-2.jpg',
                }
            ],
            room9: [
            ],
            room10: [
                {
                    'url':'/images/house/thames/thames-hab10-1.jpg',
                },
                {
                    'url':'/images/house/thames/thames-hab10-2.jpg',
                },
                {
                    'url':'/images/house/thames/thames-hab10-3.jpg',
                }
            ],
        },
        pellegrini: {
            room1: [
                {
                    'url':'/images/house/pellegrini/pellegrini-hab1-1.jpg',
                },
                {
                    'url':'/images/house/pellegrini/pellegrini-hab1-2.jpg',
                }
            ],
            room2: [
                {
                    'url':'/images/house/pellegrini/pellegrini-hab2-1.jpg',
                },
                {
                    'url':'/images/house/pellegrini/pellegrini-hab2-2.jpg',
                }
            ],
            room3: [
                {
                    'url':'/images/house/pellegrini/pellegrini-hab3-1.jpg',
                },
                {
                    'url':'/images/house/pellegrini/pellegrini-hab3-2.jpg',
                }
            ],
            room4: [
                {
                    'url':'/images/house/pellegrini/pellegrini-hab4-1.jpg',
                },
                {
                    'url':'/images/house/pellegrini/pellegrini-hab4-2.jpg',
                }
            ]
        }
    }

    var cuentos = $('.-placeholder')
    var cuentoIndex = $('.-placeholder').attr('data-cuento');

    cuentos.on('click', function() {
        var cuento = $(this).attr('data-cuento');
        
        if(cuentosSlides[cuento].length > 0) {
            $(this).iLightBox(cuentosSlides[cuento]);
        } else {
            var alert = '<div class="center" style="background: #fff; padding: 50px; text-align: center">' + 
                '<h2>No Cuento available</h2>' +
                '</div>';
            $.iLightBox([{url:alert, type: 'html'}])
        }
    });

};

module.exports = Header;
