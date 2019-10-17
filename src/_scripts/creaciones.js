'use strict';

// Constructor
var Creaciones = function() {
    var creaciones = [
        {
            'url':'https://www.youtube.com/embed/ubNrPgJdF0Q',
            'overlay':'/images/reciclado/creacion-1.png',
            'title':'Creación Halloween: Un disfraz de otro mundo',
            'text':'Este Halloween diviértete en familia creando este increíble disfraz.',
            'materiales': [
                {
                    'image':'9',
                    'text':'2 botellas de 1.5 litros bilz y pap'
                },
                {
                    'image':'10',
                    'text':'pintura acrílica'
                },
                {
                    'image':'13',
                    'text':'pincel'
                },
                {
                    'image':'11',
                    'text':'tijeras',
                    'warning':'true'
                },
                {
                    'image':'12',
                    'text':'plumón',
                    'warning':'true'
                },
                {
                    'image':'4',
                    'text':'pistola de silicona',
                    'warning':'true'
                },
                {
                    'image':'14',
                    'text':'corta cartón',
                    'warning':'true'
                },
                {
                    'text':'goma eva'
                },
                {
                    'text':'cinta adhesiva'
                },
                {
                    'text':'cinta de tela'
                },
                {
                    'text':'cartón 15 x 15 cm aprox.'
                },
            ]
        },
        {
            'url':'https://www.youtube.com/embed/ubNrPgJdF0Q',
            'title':'Creación Emboque',
            'overlay':'/images/reciclado/creacion-2.png',
            'text':'Estas fiestas patrias diviértete en familia reutilizando botellas para hacer un entretenido emboque!',
            'materiales': [
                {
                    'image':'9',
                    'text':'1 botella de 1.5 litros bilz y pap'
                },
                {
                    'image':'9',
                    'text':'botella bilz y pap  250 cc'
                },
                {
                    'image':'13',
                    'text':'pincel'
                },
                {
                    'image':'4',
                    'text':'pistola de silicona',
                    'warning':'true'
                },
                {
                    'image':'11',
                    'text':'tijeras',
                    'warning':'true'
                },
                {
                    'image':'12',
                    'text':'plumón',
                    'warning':'true'
                },
                {
                    'image':'14',
                    'text':'corta cartón',
                    'warning':'true'
                },
                {
                    'image':'10',
                    'text':'pintura acrilica'
                },
                {
                    'image':'15',
                    'text':'3 tapitas bilz y pap'
                },
                {
                    'text':'1 alicate',
                    'warning':'true'
                },
                {
                    'text':'1 clavo',
                    'warning':'true'
                },
                {
                    'text':'80 cm de pita'
                },
                {
                    'text':'cartón de 5 x 5 cm'
                },
                {
                    'text':'4 ojos locos'
                }
            ]
        },
        {
            'url':'https://www.youtube.com/embed/5RiyftkKNkA',
            'title':'Creación cohete',
            'overlay':'/images/reciclado/creacion-3.png',
            'text':'El 20 de julio el hombre llega a la luna. Conmemora junto a tus hijos este gran hito creando un increíble cohete reutilizando botellas ✨ Diviértete en familia reciclando en #ModoBilzyPap',
            'materiales': [
                {
                    'image':'9',
                    'text':'1 botella de 1.5 litros bilz y pap'
                },
                {
                    'image':'13',
                    'text':'pincel'
                },
                {
                    'image':'4',
                    'text':'pistola de silicona',
                    'warning':'true'
                },
                {
                    'image':'11',
                    'text':'tijeras',
                    'warning':'true'
                },
                {
                    'image':'12',
                    'text':'plumón',
                    'warning':'true'
                },
                {
                    'image':'14',
                    'text':'corta cartón',
                    'warning':'true'
                },
                {
                    'image':'10',
                    'text':'pintura acrilica'
                },
                {
                    'image':'16',
                    'text':'3 tapitas bilz y pap'
                },
                {
                    'text':'1 alicate',
                    'warning':'true'
                },
                {
                    'text':'1 clavo',
                    'warning':'true'
                },
                {
                    'text':'80 cm de pita'
                },
                {
                    'text':'cartón de 5 x 5 cm'
                },
                {
                    'text':'4 ojos locos'
                }
            ]
        }
    ]

    var activeCreation = 0;
    var sliderTitle = $('.-js-slider-title');
    var sliderText = $('.-js-slider-text');
    var materialesContainer = $('.-js-materiales-container');
    var arrowNext = $('.-js-arrow-next');
    var arrowPrev = $('.-js-arrow-prev');
    var sliderVideo = $('.-js-slider-video');
    var sliderOverlay = $('.-js-slider-overlay');
    var thumbnailPrev = $('.-thumbnail-prev');
    var thumbnailNext = $('.-thumbnail-next');

    arrowNext.on('click', function() {
        activeCreation++
        console.log(activeCreation)
        if(activeCreation < creaciones.length) {
            $('.creaciones__materiales__material').remove()
            sliderTitle.html(creaciones[activeCreation].title);
            sliderText.html(creaciones[activeCreation].text);
            sliderOverlay.attr("src", creaciones[activeCreation].overlay);
            $('.icon-play').removeClass('-close')
            sliderVideo.removeClass('-active');
            createMaterialesHtml(activeCreation);
            arrowPrev.removeClass('-disabled');
            thumbnailPrev.attr('src', creaciones[(activeCreation - 1)].overlay)
        }
 
        if(activeCreation + 1 < creaciones.length) {
            thumbnailNext.attr('src', creaciones[(activeCreation + 1)].overlay)
        }

        if(activeCreation === creaciones.length - 1) {
            arrowNext.addClass('-disabled');
            return
        }
    })
    
    arrowPrev.on('click', function() {
        console.log(activeCreation)
        if(activeCreation > 0) {
            activeCreation--
            $('.creaciones__materiales__material').remove()
            createMaterialesHtml(activeCreation);
            sliderTitle.html(creaciones[activeCreation].title);
            sliderText.html(creaciones[activeCreation].text);
            sliderOverlay.attr("src", creaciones[activeCreation].overlay);
            $('.icon-play').removeClass('-close');
            sliderVideo.removeClass('-active');
            arrowNext.removeClass('-disabled');
            thumbnailNext.attr('src', creaciones[(activeCreation + 1)].overlay)
        } 

        if(activeCreation > 0) {
            thumbnailPrev.attr('src', creaciones[(activeCreation - 1)].overlay)
        }

        if(activeCreation === 0) {
            arrowPrev.addClass('-disabled');
            return
        }
    })

    sliderTitle.html(creaciones[0].title);
    sliderVideo.attr("src", creaciones[0].url);
    sliderOverlay.attr("src", creaciones[0].overlay);
    sliderText.html(creaciones[0].text);
    arrowPrev.addClass('-disabled');
    thumbnailNext.attr('src', creaciones[1].overlay)
    thumbnailPrev.attr('src', creaciones[0].overlay)
    
    sliderOverlay.on('click', function() {
        sliderVideo.addClass('-active');
        $('.icon-play').addClass('-close')
    })

    function createMaterialesHtml(index) {
        for(var i = 0; i < creaciones[index].materiales.length - 1; i++) {
            var htmlContainer;
            var htmlText;
            var htmlWarning;
            var htmlImage;

            htmlContainer = $(document.createElement('div')).addClass('creaciones__materiales__material')

            if(creaciones[index].materiales[i].warning) {
                htmlWarning = $(document.createElement('img')).addClass('-warning').attr('src', '/images/reciclado/creaciones-warning-icon.png')
                htmlContainer.append(htmlWarning)
            }

            if(creaciones[index].materiales[i].image) {
                htmlImage = $(document.createElement('img')).attr('src', '/images/reciclado/creaciones-icon-' + creaciones[index].materiales[i].image + '.png')
                htmlContainer.append(htmlImage);
            }
            
            htmlText = $(document.createElement('p')).html(creaciones[index].materiales[i].text)
            htmlContainer.append(htmlText);

            htmlContainer.appendTo(materialesContainer)
        }
    }

    createMaterialesHtml(activeCreation);
};

module.exports = Creaciones;
