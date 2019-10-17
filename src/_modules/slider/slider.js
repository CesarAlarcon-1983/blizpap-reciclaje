'use strict';

// Constructor
var Slider = function() {
    var slider = $('._slider');
    var sliderMulti = $('._slidermulti');
    var sliderMulti3 = $('._slidermulti3');

    if (slider) {
        slider.each(function(){
            $(this).slick({
                dots: false,
                fade: true,
                arrows: true,
                infinite: true,
                autoplay: true
            });
        });
    }

    if (sliderMulti) {
        sliderMulti.each(function(){
            $(this).slick({
                dots: true,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 900,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            centerMode: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });
    }

    if (sliderMulti3) {
        sliderMulti3.each(function(){
            $(this).slick({
                dots: false,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                responsive: [
                    {
                        breakpoint: 900,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            centerMode: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });
    }
};

module.exports = Slider;
