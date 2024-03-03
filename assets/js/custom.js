$(document).ready(function() {
    var sezione = $('#sezione').val();
    var id_categoria = $('#id_categoria').val();
    if (sezione == "home" || sezione == "regione" || sezione == "articolo" || sezione == "fidelity" || sezione == "destinazioni" || sezione == "tickets" || sezione == "made-in-italy" || id_categoria == "magazine" || sezione == "articoli-categoria" || sezione == "articoli-tags" || sezione == "articolo-statico" || sezione == "hotel") {
        document.getElementById("logo-black").style.display = "none";
        document.getElementById("logo-white").style.display = "";
    } else {
        document.getElementById("logo-black").style.display = "block";
        document.getElementById("logo-white").style.display = "none";
    }

    if (sezione == "home") {
        $(".owl-regioni").owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            dots: false,
            nav: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                },
                600: {
                    items: 4,
                },
                980: {
                    items: 5,
                },
                1000: {
                    items: 5,
                }
            }
        });
        $("#cont_main_regioni").show();

        var $owl = $('.owl-cat');
        $owl.trigger('destroy.owl.carousel');
        $owl.html($owl.find('.owl-stage-outer').html()).removeClass('owl-loaded');
        $owl.owlCarousel({
            loop: false,
            nav: false,
            autoWidth: true,
            dots: false,
            margin: 3,
            slideTransition: 'linear',
            responsiveClass: true,
            responsive: {
                0: {
                    margin: 10,
                },
                800: {
                    items: 7,
                    nav: true,
                },
            }
        });
        setTimeout(function() {
            $(".section_cat").show();
            $('.owl-cat').show();
        }, 500);
    }
    if (sezione == "risultati") {
        $(".owl-carousel").owlCarousel({
            loop: false,
            autoplay: false,
            autoplayTimeout: 4000,
            autoplayHoverPause: false,
            dots: false,
            nav: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2.8,
                },
                600: {
                    items: 4,
                },
                980: {
                    items: 4,
                },
                1000: {
                    items: 4,
                }
            }
        });
    }

    if (sezione == "home" || sezione == "regione") {
        setTimeout(function() {

            // const numChildren = $('#container .child').length;
            // const isLooping = numChildren > 1;

            var $owl = $('.owl-articoli');
            $owl.trigger('destroy.owl.carousel');
            $owl.html($owl.find('.owl-stage-outer').html()).removeClass('owl-loaded');
            $owl.owlCarousel({
                loop: true,
                nav: true,
                dots: false,
                slideTransition: 'linear',
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1.5,
                        nav: false,
                    },
                    600: {
                        items: 2,
                    },
                    980: {
                        items: 2,
                    },
                    1000: {
                        items: 3,
                    }
                }
            });

            $('.owl-articoli').show();

        }, 100);
    }

    if (sezione == "regione") {
        setTimeout(function() {

            // const numChildren = $('#container .child').length;
            // const isLooping = numChildren > 1;

            var $owl = $('.owl-articoli');
            $owl.trigger('destroy.owl.carousel');
            $owl.html($owl.find('.owl-stage-outer').html()).removeClass('owl-loaded');
            $owl.owlCarousel({
                loop: false,
                nav: true,
                dots: false,
                responsiveClass: false,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    },
                    980: {
                        items: 2,
                    },
                    1000: {
                        items: 3,
                    }
                }
            });

        }, 100);
    }

    // $(".owl-articoli").owlCarousel({
    // 	loop: $(".owl-carousel > .item").length <= 1 ? false : true,
    // 	dots: false,
    // 	nav : true,
    // 	lazyLoad: true,
    // 	responsiveClass:true,
    // 	responsive:{
    // 		0:{
    // 			items:1.2,
    // 		},
    // 		600:{
    // 			items:2,
    // 		},
    // 		980:{
    // 			items:2,
    // 		},
    // 		1000:{
    // 			items:3,
    // 		}
    // 	}

    // });

    if (sezione == "attivita") {
        // $(".owl-attivita").owlCarousel({
        // 	loop: false,
        // 	dots: false,
        // 	nav : true,
        // 	responsiveClass:true,
        // 	responsive:{
        // 		0:{
        // 			items:1,
        // 		},
        // 		600:{
        // 			items:3,
        // 		},
        // 		980:{
        // 			items:3,
        // 		},
        // 		1000:{
        // 			items:3,
        // 		}
        // 	}
        // });
    }
    $(".owl-articoli-rapidi").owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1.5,
            },
            600: {
                items: 2,
            },
            980: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });
    startTypingEffect();
    typingOnLanding();

    $("body").on("click", function(e) {
        var field = '.hero-search input[type="text"]';
        if (!$(e.target).is(".hero-search input[type='text']") && $(field).val() === "") {
            if ($(field).hasClass("inFocus")) {
                $(field).removeClass("inFocus");
                $(".typingEffect,.typed-cursor").remove();
                $(".typingEffect,.typed-cursor").each(function() {
                    $(this)[0].parentNode.removeChild($(this)[0]);
                });
                $('.hero-search fieldset').append(typedAnimatedTexts);
                startTypingEffect();
            }
        }
    });

    var typedAnimatedTexts = "";

    function startTypingEffect() {
        var field = '.hero-search input[type="text"]';
        if (typedAnimatedTexts === "")
            typedAnimatedTexts = $(".typingEffect").prop("outerHTML");
        if ($(field).val() === "" && viewport().width > 480) {
            $(field).attr("placeholder", "");
            $(field).removeClass("inFocus");
            $(".typingEffect,.typed-cursor").remove();
            $(".typingEffect,.typed-cursor").each(function() {
                $(this)[0].parentNode.removeChild($(this)[0]);
            });
            $('.hero-search fieldset').append(typedAnimatedTexts);
            if ($.isFunction($.fn.typed)) {
                $(".typingEffect").typed({
                    strings: $(".typingEffect").attr("data-title").split("//"),
                    typeSpeed: 100,
                    loop: true
                });
            }
        } else {
            $(field).attr("placeholder", $(field).attr("data-placeholder"));
        }
        if ($(field).val() !== "") {
            $(".typingEffect,.typed-cursor").remove();
            $(".typingEffect,.typed-cursor").each(function() {
                $(this)[0].parentNode.removeChild($(this)[0]);
            });
            $(field).addClass("inFocus");
        }
    }

    var landingTexts = "";

    function typingOnLanding() {
        if ($(".typeLanding").length) {
            var field = '.typingEffect';
            if (landingTexts === "")
                landingTexts = $(".typingEffect").prop("outerHTML");
            if ($.isFunction($.fn.typed)) {
                $(".typeLanding").typed({
                    strings: $(".typeLanding").attr("data-title").split("//"),
                    typeSpeed: 100,
                    loop: true
                });
            }
        }
    }
    $('.regione').on('click', function() {
        $('.regione').removeClass('selected');
        $(this).addClass('selected');
        console.log($(this).data('nome-regione'));
    });
});

function SetCarouselCat() {
    var $owl = $('.owl-categorie');
    $owl.trigger('destroy.owl.carousel');
    $owl.html($owl.find('.owl-stage-outer').html()).removeClass('owl-loaded');
    $owl.owlCarousel({
        loop: false,
        dots: true,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            980: {
                items: 5,
            }
        }
    });
}

function SetCarouselAtt(num_foto) {
    var $owl = $('.owl-attivita');
    $owl.trigger('destroy.owl.carousel');
    $owl.html($owl.find('.owl-stage-outer').html()).removeClass('owl-loaded');
    $owl.owlCarousel({
        loop: false,
        dots: false,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: num_foto,
            },
            980: {
                items: num_foto,
            },
            1000: {
                items: num_foto,
            }
        }
    });
}

$(window).scroll(function() {

    var scroll = $(window).scrollTop();
    var sezione = $('#sezione').val();
    var id_categoria = $('#id_categoria').val();
    if (sezione == "home" || sezione == "regione" || sezione == "made-in-italy" || sezione == "hotel" || sezione == "articolo" || sezione == "fidelity" || sezione == "destinazioni" || sezione == "tickets" || id_categoria == "magazine" || sezione == "articoli-categoria" || sezione == "articolo-statico") {
        if (scroll >= 30) {

            document.getElementById("logo-black").style.display = "block";
            document.getElementById("logo-white").style.display = "none";
        }



        if (scroll < 30) {
            document.getElementById("logo-white").style.display = "block";
            document.getElementById("logo-black").style.display = "none";

        }
    }
});