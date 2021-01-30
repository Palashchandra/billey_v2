(function ($) {
    "use strict";

    //============== sticky menu ==============//
    $(window).on('scroll', function () {
        var window_top = $(window).scrollTop() + 0;
        if (window_top > 150) {
            $('.header_part , .classic_header, .fixed_menu ').addClass('menu_fixed animated slideInDown');
        } else {
            $('.header_part , .classic_header, .fixed_menu').removeClass('menu_fixed animated slideInDown');
        }
    });
    //============== sticky menu end ==============//

    //============== menu icon ==============//
    $('.close_icon').on('click', function () {
        $('.body_wrapper').removeClass('promotion').find('.promo_banner').css({
            top: '-70px',
            WebkitTransition: 'all 0.3s ease-in-out',
            MozTransition: 'all 0.3s ease-in-out',
            MsTransition: 'all 0.3s ease-in-out',
            OTransition: 'all 0.3s ease-in-out',
            transition: 'all 0.3s ease-in-out'
        });

    });
    //============== menu icon end ==============//

    //============== count up ==============//
    var counter = $('.counter');
    if (counter.length > 0) {
        counter.counterUp({
            time: 2000
        });
    }
    //============== count up js end ==============//


    //============== canvus menu js ==============//
    $("#dl_collaps_menu_icon").on('click', function () {
        $('.canvus_menu').addClass("canvus_active")
    });
    $(".canvus_close_icon").on('click', function () {
        $(".canvus_menu").removeClass("canvus_active")
    });
    //============== canvus menu js end ==============//

    //============== offcanvus menu js ==============//
    $(".offcanvus_menu_trigger").on('click', function () {
        $("body").addClass("active_off_canvus")
        $(".offcanvas_overlay").addClass("active_offcanvas_overlay")
    });
    $(".close_icon, .offcanvas_overlay").on('click', function () {
        $("body").removeClass("active_off_canvus")
        $(".offcanvas_overlay").removeClass("active_offcanvas_overlay")
    });
    //============== offcanvus menu js end ==============//

    //============== dropdown menu js ==============//
    $('.dropdown-menu > .dropdown > a').addClass('dropdown-toggle');

    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');
        $(this).parents('li.nav-item.dropdown.show').on('.dropdown', function (e) {
            $('.dropdown-menu > .dropdown .show').removeClass("show");
        });
        $('.dropdown-menu a.dropdown-toggle').removeClass("show_dropdown");
        if ($(this).next().hasClass('show')) {
            $(this).addClass("show_dropdown");
        }
        return false;
    });
    $('.classic_header .dropdown-menu > .dropdown').on ('hover',
        function () {
            $(this).find('.dropdown-toggle').toggleClass("active_icon");
        }
    );

    $('.off_canvus_menu .dropdown-menu > .dropdown > .dropdown-toggle').on('click', function () {
        $('.off_canvus_menu .dropdown-menu > .dropdown > .dropdown-toggle').removeClass("active_icon");
        if ($(this).next().hasClass('show')) {
            $(this).addClass("active_icon");
        }
    });
    //============== dropdown menu js end ==============//

    //============== niceselect js  ==============//
    var nc_select = $('.nc_select');
    if (nc_select.length > 0) {
        nc_select.niceSelect();
    }
    //============== niceselect js end  ==============//

    //============== searchbar popup  ==============//
    $('#search-popup-close').on('click', function () {
        $('#popup-search').removeClass('open');
    })
    $('.search_icon').on('click', function () {
        $('#popup-search').addClass('open');
    })
    //============== searchbar popup js end  ==============//

    //============== easying js code  ==============//
    $('.page-scroll').on('click', function (event) {
        var $anchor = $(this);
        var headerH = '115';
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    //============== easying js code end  ==============//

    //============== parallax js code  ==============//
    if ($('.parallax_shap').length > 0) {
        $('.parallax_shap').parallax({
            scalarX: 10.0,
            scalarY: 10.0
        });
    }
    //============== parallax js code end  ==============//

    //==============featured part scorl bar slider  ==============//
    var topscorlbar = document.getElementsByClassName("featured_list_section");
    if (topscorlbar.length) {
        var swiper = new Swiper('.featured_list_wrapper', {
            slidesPerView: 2,
            spaceBetween: 30,
            speed: 400,
            autoplay: false,
            autoplay: {
                delay: 2000,
            },
            loop: true,
            pagination: {
                el: '.swiper_pagination',
                type: 'bullets',
                clickable: true
            },

            clickable: true,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    pagination: false
                },
                768: {
                    slidesPerView: 1,
                    pagination: false
                },
                1024: {
                    slidesPerView: 2,
                    pagination: true
                }
            },
        });
    }
    //==============featured part scorl bar slider end ==============//

    //============== dl testimonial slider ==============//
    var testimonial_swiper_style = document.getElementsByClassName("dl_testimonial_swiper_style");
    if (testimonial_swiper_style.length) {
        var swiper = new Swiper('.dl_testimonial_swiper_style', {
            slidesPerView: 1,
            speed: 400,
            autoplay: false,
            autoplay: {
                delay: 2000,
            },
            loop: true,
            navigation: {
                nextEl: '.swiper_next',
                prevEl: '.swiper_prev',
            },
            pagination: {
                el: '.swiper_pagination',
                type: 'fraction'
            },
        });
    }
    //============== dl testimonial slider end ==============//

    //============== agencies slider wrapper ==============//
    var agencies_slider_wrapper = document.getElementsByClassName("agencies_slider_wrapper");
    if (agencies_slider_wrapper.length) {
        var swiper = new Swiper('.agencies_slider_wrapper', {
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 400,
            autoplay: false,
            loop: true,
            autoplay: {
                delay: 2000,
            },
            loop: true,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                }
            },
        });
    }
    //============== agencies slider wrapper end ==============//

    //============== related product slider ==============//
    var related_product_slider = document.getElementsByClassName("related_product_slider");
    if (related_product_slider.length) {
        var swiper = new Swiper('.related_product_slider', {
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 400,
            autoplay: false,
            loop: true,
            autoplay: {
                delay: 2000,
            },
            loop: true,
            navigation: {
                nextEl: '.swiper_next',
                prevEl: '.swiper_prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                991: {
                    slidesPerView: 3
                }
            },
        });
    }
    //============== related product slider end ==============//

    //============== video popup ==============//
    var video_popup = $('.video_popup_area');
    if (video_popup.length > 0) {
        video_popup.magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
    }
    

    //product gallery popup
    var product_gallery_popup = $('.product_gallery_popup');
    if (product_gallery_popup.length > 0) {
        product_gallery_popup.magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
        });
    }
    //============== video popup js end ==============//

    //============== circle progressbar js ==============//
    function circle_progress() {
        if ($(".circle").length) {
            $(".circle").each(function () {
                $(".circle").appear(
                    function () {
                        $(".circle").circleProgress({
                            startAngle: -14.1,
                            size: 200,
                            duration: 9000,
                            easing: "circleProgressEase",
                            emptyFill: "#EDEDED ",
                            lineCap: "round",
                            thickness: 10,
                            fill: {
                                gradient: ['#F25EBC', '#FFD2B7']
                            }
                        });
                    }, {
                        triggerOnce: true,
                        offset: "bottom-in-view",
                    }
                );
            });
        }
    }
    circle_progress();
    //============== circle progressbar js end ==============//

    //============== client logo slider js ==============//
    var bannerSlider = $(".client_logo_slider");
    if (bannerSlider.length) {
        bannerSlider.owlCarousel({
            items: 3,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 500,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 3
                }
            },
        });
    }
    //============== client logo slider js end ==============//

    //==============team member carousel style 2 js ==============//
    var team_member_carousel_style_2 = $(".team_member_carousel_style_2");
    if (team_member_carousel_style_2.length) {
        team_member_carousel_style_2.owlCarousel({
            items: 6,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 500,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 4
                },
                991: {
                    items: 6
                }
            },
        });
    }
    //============== team member carousel style 2 js end ==============//

    //============== testimonial carousel 2 js ==============//
    var testimonial_carousel_2 = $(".testimonial_carousel_2");
    if (testimonial_carousel_2.length) {
        testimonial_carousel_2.owlCarousel({
            items: 2,
            loop: true,
            nav: true,
            navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 500,
            margin: 50,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                768: {
                    items: 2,
                    nav: false
                },
                991: {
                    items: 2,
                    nav: true
                }
            },
        });
    }
    //============== testimonial carousel 2 js end ==============//

    //============== project thumb slider js ==============//
    var project_thumb_slider = $(".project_thumb_slider");
    if (project_thumb_slider.length) {
        project_thumb_slider.owlCarousel({
            items: 2,
            loop: true,
            nav: true,
            navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 500,
            margin: 50,
            center: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                768: {
                    items: 2,
                    nav: false
                },
                991: {
                    items: 2,
                    nav: true
                }
            },
        });
    }
    //============== project thumb slider js end ==============//
    

    //============== testimonial carousel 3 slider js ==============//
    var testimonial_carousel_3 = $(".testimonial_carousel_3");
    if (testimonial_carousel_3.length) {
        testimonial_carousel_3.owlCarousel({
            items: 2,
            loop: true,
            nav: true,
            navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
            dots: true,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 500,
            margin: 50,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                768: {
                    items: 2,
                    nav: false
                },
                991: {
                    nav: false,
                    items: 2,
                },
                1200: {
                    nav: true
                }
            },
        });
    }
    //============== testimonial carousel 3 slider js end ==============//

    //============== team member carousel slider js ==============//
    var team_member_carousel = $(".team_member_carousel");
    if (team_member_carousel.length) {
        team_member_carousel.owlCarousel({
            items: 4,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 500,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                991: {
                    items: 4
                }
            },
        });
    }
    //============== team member carousel slider js end ==============//

    //============== client logo carousel slider js ==============//
    var client_logo_carousel = $(".client_logo_carousel");
    if (client_logo_carousel.length) {
        client_logo_carousel.owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 500,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 3
                },
                991: {
                    items: 5
                }
            },
        });
    }
    //============== client logo carousel slider js end ==============//

    //============== banner slider js ==============//
    var travel_agenci_slider = $(".travel_agenci_banner_slider, .design_studio_banner_slider, .subscribetion_area_slider");
    if (travel_agenci_slider.length) {
        travel_agenci_slider.owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            touchDrag: false,
            mouseDrag: false,
            smartSpeed: 500,
            animateOut: 'fadeOut'
        });
    }
    //============== banner slider js ==============//

    //============== modern slider js ==============//
    var modern_slider_option = $(".modern_slider_option");
    if (modern_slider_option.length) {
        modern_slider_option.owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            touchDrag: false,
            mouseDrag: false,
            smartSpeed: 500,
            animateOut: 'fadeOut',
            navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
            responsive: {
                0: {
                    nav: false
                },
                1650: {
                    nav: true
                }
            },
        });
    }
    //============== modern slider js end ==============//


    //============== featured place slider js ==============//
    var feature_place_carousel = $(".feature_place_carousel");
    if (feature_place_carousel.length) {
        feature_place_carousel.owlCarousel({
            items: 3,
            loop: true,
            nav: false,
            dots: true,
            autoplay: false,
            autoplayHoverPause: true,
            margin: 30,
            smartSpeed: 500,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                991: {
                    items: 3
                }
            },
        });
    }
    //============== featured place slider js end ==============//

    //============== image carousel js ==============//
    var image_carousel = $(".image_carousel");
    if (image_carousel.length) {
        image_carousel.owlCarousel({
            items: 4,
            loop: true,
            nav: false,
            dots: true,
            autoplay: false,
            center: true,
            autoplayHoverPause: true,
            margin: 30,
            smartSpeed: 500,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                },
                991: {
                    items: 4
                }
            },
        });
    }
    //============== image carousel js end ==============//

    //============== testimonial slider js ==============//
    var testimonial_carousel = $(".testimonial_carousel");
    if (testimonial_carousel.length) {
        testimonial_carousel.owlCarousel({
            items: 4,
            loop: true,
            nav: false,
            dots: false,
            autoplay: false,
            autoplayHoverPause: true,
            margin: 50,
            smartSpeed: 500,
            center: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 20
                },
                768: {
                    items: 2
                },
                991: {
                    items: 2
                },
                1200: {
                    items: 3
                },
                1440: {
                    items: 4
                }
            },
        });
    }
    //============== testimonial slider js end ==============//

    //============== client feedback slider js ==============//
    var client_feedback_carousel = $(".client_feedback_carousel");
    if (client_feedback_carousel.length) {
        client_feedback_carousel.owlCarousel({
            loop: true,
            dots: true,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 500,
            items: 1,
            nav: true,
            navText: ["prev", "next"],
            responsive: {
                0: {
                    nav: false
                },
                768: {
                    nav: false
                },
                991: {
                    nav: true
                }
            },
        });
    }
    //============== client feedback slider js end ==============//

    //============== client feedback slider 2 js ==============//
    var client_feedback_carousel = $(".client_feedback_carousel_style_2");
    if (client_feedback_carousel.length) {
        client_feedback_carousel.owlCarousel({
            loop: true,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 500,
            items: 1,
            nav: true,
            navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
            responsive: {
                0: {
                    nav: false
                },
                768: {
                    nav: false
                },
                991: {
                    nav: true
                }
            },
        });
    }
    //============== client feedback slider 2 js end ==============//

    //============== about branding slider js ==============//
    var about_branding_active = $(".about_branding_active");
    if (about_branding_active.length) {
        about_branding_active.owlCarousel({
            loop: true,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 500,
            items: 2,
            nav: false,
            margin: 50,
            responsive: {
                0: {
                    nav: false,
                    items: 1
                },
                768: {
                    nav: false,
                    items: 1
                },
                991: {
                    nav: false,
                    items: 2
                }
            },
        });
    }
    //============== about branding slider js end ==============//


    //============== masonry js code here ==============//
    //masonry grid js
    var masonry_grid = $('.dl_portfolio_masonry_grid');
    if (masonry_grid.length) {
        masonry_grid.imagesLoaded(function () {
            masonry_grid.isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-sizer'
                }
            });
        })
    }

    //masonry grid js
    var masonry_grid_gutter = $('.dl_portfolio_masonry_grid_gutter');
    if (masonry_grid_gutter.length) {
        masonry_grid_gutter.imagesLoaded(function () {
            masonry_grid_gutter.isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-sizer'
                }
            });
        })
    }

    //masonry grid js
    var dl_portfolio_full_width_masonry = $('.dl_portfolio_full_width_masonry');
    if (dl_portfolio_full_width_masonry.length) {
        dl_portfolio_full_width_masonry.imagesLoaded(function () {
            dl_portfolio_full_width_masonry.isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-sizer'
                }
            });
        })
    }

    //masonry grid js
    var masonry_grid_no_gutter = $('.dl_portfolio_masonry_grid_no_gutter');
    if (masonry_grid_no_gutter.length) {
        masonry_grid_no_gutter.imagesLoaded(function () {
            masonry_grid_no_gutter.isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: '.grid-sizer'
                }
            });
        })
    }

    //same width masonry grid js
    var dl_same_width_masonry = $('.dl_portfolio_same_width_masonry');
    if (dl_same_width_masonry.length) {
        dl_same_width_masonry.imagesLoaded(function () {
            dl_same_width_masonry.isotope({
                itemSelector: '.grid-item',
                layoutMode: 'masonry',
                // masonry: {
                //     columnWidth: 100
                // }
            });
        })
    }
    //portfolio filter
    $('.dl_portfolio_filter').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $('.grid').isotope({
            filter: filterValue,
            itemSelector: '.grid-item',
            layoutMode: 'fitRows',
            percentPosition: true
        });
        $('.dl_portfolio_filter button').removeClass('active');
        $(this).addClass('active');
    });


    //same width masonry grid js
    var dl_blog_masonry = $('.dl_blog_masonry_inner');
    if (dl_blog_masonry.length) {
        dl_blog_masonry.imagesLoaded(function () {
            dl_blog_masonry.isotope({
                itemSelector: '.grid-item',
                layoutMode: 'masonry'
            });
        })
    }

    //============== masonry js code end ==============//


    //============== load more btn js ==============//
    $(".load_more_btn_active .load_more_section_active").slice(0, 3).show();
    $("#seeMore").click(function (e) {
        e.preventDefault();
        $(".load_more_section_active:hidden").slice(0, 3).fadeIn("slow");

        if ($(".load_more_section_active:hidden").length == 0) {
            $("#seeMore").fadeOut("slow");
        }
    });
    //============== load more btn js end ==============//

    //============== map js code ==============//
    var contactMap = document.getElementById("contactMap");
    if (contactMap) {
        var $lat = $('#contactMap').data('lat');
        var $lon = $('#contactMap').data('lon');
        var $zoom = $('#contactMap').data('zoom');
        var $marker = $('#contactMap').data('marker');
        var $info = $('#contactMap').data('info');
        var $markerLat = $('#contactMap').data('mlat');
        var $markerLon = $('#contactMap').data('mlon');
        var map = new GMaps({
            el: '#contactMap',
            lat: $lat,
            lng: $lon,
            scrollwheel: false,
            scaleControl: true,
            streetViewControl: false,
            panControl: true,
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            zoom: $zoom,
        });
        map.addMarker({
            lat: $markerLat,
            lng: $markerLon,
            icon: $marker,
            infoWindow: {
                content: $info
            }
        })
    }
    //============== map js code end ==============//

    //============== inspirational creations tab js ==============//
    $(".inspirational_creations_bg_img_tab_menu .nav-link").hover(function () {
        $(this).tab('show');
    });
    //============== inspirational creations tab js code end ==============//


    //============== dl popup gallery js ==============//
    var dl_popup_gallery = $('.dl_popup_gallery');
    if (dl_popup_gallery.length) {
        dl_popup_gallery.magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
        });
    }
    //============== dl popup gallery js code end ==============//

    //============== headroom js code here ==============//
    var bttHeadroom = new Headroom(document.getElementById("dl_scorl_top"), {
        tolerance: 0,
        offset: 500,
        tolerance: {
            up: 0,
            down: 0
        },
        classes: {
            initial: "slide",
            top: "headroom--top",
            pinned: "slide--reset",
            unpinned: "slide--down"
        }
    });
    bttHeadroom.init();
    //============== headroom js code end here ==============//

    //============== dl scorl top js ==============//
    var dl_scorl_top = $('#dl_scorl_top');
    dl_scorl_top.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });
    //============== dl scorl top js end ==============//

    //============== parallaxie back ground image ==============//
    var parallaxie = $('.parallaxie');
    if (parallaxie.length) {
        parallaxie.parallaxie({
            speed: 0.5,
            offset: 50,
        });
    };
    //============== parallaxie back ground image end ==============//

    //============== style map js ==============//
    var style_map = $('.style_map');
    if (style_map.length) {
        style_map.gmap3({
                center: [41.850033, -87.650052],
                zoom: 12,
                mapTypeId: "shadeOfGrey", // to select it directly
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
                }
            })
            .marker({
                position: [41.850033, -87.650052],
                icon: 'http://droitthemes.com/palash/Location_icon.png'
            })
            .styledmaptype(
                "shadeOfGrey",
                [{
                        "featureType": "all",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "saturation": 36
                        }, {
                            "color": "#000000"
                        }, {
                            "lightness": 40
                        }]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                            "visibility": "on"
                        }, {
                            "color": "#ffffff"
                        }, {
                            "lightness": 16
                        }]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#dddddd"
                        }, {
                            "lightness": 20
                        }]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "color": "#fafafa"
                        }, {
                            "lightness": 17
                        }, {
                            "weight": 1.2
                        }]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#ddddd"
                        }, {
                            "lightness": 20
                        }]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#888"
                        }, {
                            "lightness": 21
                        }]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#999"
                        }, {
                            "lightness": 17
                        }]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "color": "#777"
                        }, {
                            "lightness": 29
                        }, {
                            "weight": 0.2
                        }]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#ffffff"
                        }, {
                            "lightness": 18
                        }]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#cccccc"
                        }, {
                            "lightness": 16
                        }]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#fff"
                        }, {
                            "lightness": 19
                        }]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#eeeeee"
                        }, {
                            "lightness": 17
                        }]
                    }
                ], {
                    name: "Shades of Grey"
                }
            );

    };
    //style map js
    var center = [37.772323, -122.214897];
    var map_markar = $('.map_markar');
    if (map_markar.length) {
        map_markar.gmap3({
            center: center,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        })
        .marker({
            position: center,
            icon: 'http://droitthemes.com/palash/Location_icon.png'
        });
    };
    //============== style map js end ==============//

    //progressbar js
    var fillbar_1 = $('.fillbar_1');
    if (fillbar_1.length) {
        fillbar_1.rProgressbar({
            percentage: 80
        });
    };
    var fillbar_2 = $('.fillbar_2');
    if (fillbar_2.length) {
        fillbar_2.rProgressbar({
            percentage: 90
        });
    };
    var fillbar_3 = $('.fillbar_3');
    if (fillbar_3.length) {
        fillbar_3.rProgressbar({
            percentage: 70
        });
    };
    var fillbar_4 = $('.fillbar_4');
    if (fillbar_4.length) {
        fillbar_4.rProgressbar({
            percentage: 88
        });
    };
    var fillbar_5 = $('.fillbar_5');
    if (fillbar_5.length) {
        fillbar_5.rProgressbar({
            percentage: 95
        });
    };
    var fillbar_6 = $('.fillbar_6');
    if (fillbar_6.length) {
        fillbar_6.rProgressbar({
            percentage: 83
        });
    };
    var fillbar_7 = $('.fillbar_7');
    if (fillbar_7.length) {
        fillbar_7.rProgressbar({
            percentage: 90
        });
    };
    var fillbar_8 = $('.fillbar_8');
    if (fillbar_8.length) {
        fillbar_8.rProgressbar({
            percentage: 85
        });
    };
    var fillbar_9 = $('.fillbar_9');
    if (fillbar_9.length) {
        fillbar_9.rProgressbar({
            percentage: 82
        });
    };
    var fillbar_10 = $('.fillbar_10');
    if (fillbar_10.length) {
        fillbar_10.rProgressbar({
            percentage: 77
        });
    };
    var fillbar_11 = $('.fillbar_11');
    if (fillbar_11.length) {
        fillbar_11.ripProgressbar({
            percentage: 96
        });
    };
    var fillbar_12 = $('.fillbar_12');
    if (fillbar_12.length) {
        fillbar_12.ripProgressbar({
            percentage: 85
        });
    };
    var fillbar_13 = $('.fillbar_13');
    if (fillbar_13.length) {
        fillbar_13.ripProgressbar({
            percentage: 80
        });
    };
    var fillbar_14 = $('.fillbar_14');
    if (fillbar_14.length) {
        fillbar_14.ripProgressbar({
            percentage: 82
        });
    };
    var fillbar_15 = $('.fillbar_15');
    if (fillbar_15.length) {
        fillbar_15.ripProgressbar({
            percentage: 87
        });
    };
    var fillbar_16 = $('.fillbar_16');
    if (fillbar_16.length) {
        fillbar_16.ripProgressbar({
            percentage: 92
        });
    };
    var fillbar_17 = $('.fillbar_17');
    if (fillbar_17.length) {
        fillbar_17.ripProgressbar({
            percentage: 95
        });
    };
    var fillbar_18 = $('.fillbar_18');
    if (fillbar_18.length) {
        fillbar_18.ripProgressbar({
            percentage: 90
        });
    };
    var fillbar_19 = $('.fillbar_19');
    if (fillbar_19.length) {
        fillbar_19.ripProgressbar({
            percentage: 70
        });
    };
    var fillbar_20 = $('.fillbar_20');
    if (fillbar_20.length) {
        fillbar_20.ripProgressbar({
            percentage: 80
        });
    };
    //progressbar js end

    //product count 
    var incrementPlus;
    var incrementMinus;
    var buttonPlus = $(".cart-qty-plus");
    var buttonMinus = $(".cart-qty-minus");

    var incrementPlus = buttonPlus.click(function () {
        var $n = $(this)
            .parent(".product_count")
            .find(".qty");
        $n.val(Number($n.val()) + 1);
    });

    var incrementMinus = buttonMinus.click(function () {
        var $n = $(this)
            .parent(".product_count")
            .find(".qty");
        var amount = Number($n.val());
        if (amount > 0) {
            $n.val(amount - 1);
        }
    });
    //product count end


    //============== testimonial thumbnail slider js ==============//
    var testimonial_thumbnail_slider = document.getElementsByClassName("testimonial_thumbnail_slider");
    if (testimonial_thumbnail_slider.length) {
        var galleryThumbs = new Swiper('.testimonial_gallery_thumbs', {
            spaceBetween: 10,
            slidesPerView: 3,
            loop: true,
            freeMode: true,
            loopedSlides: 5,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            centeredSlides: true,
            center: true
        });
        var galleryTop = new Swiper('.testimonial_gallery_content', {
            spaceBetween: 10,
            loop: true,
            loopedSlides: 5,
            centeredSlides: true,
            center: true,
            thumbs: {
                swiper: galleryThumbs,
            },
        });
    }
    //============== testimonial thumbnail slider js end ==============//

    //============== product gallery content slider js ==============//
    var product_gallery_content = document.getElementsByClassName("product_gallery_content");
    if (product_gallery_content.length) {
        var productgalleryThumbs = new Swiper('.product_gallery_thumbs', {
            spaceBetween: 10,
            slidesPerView: 4,
            loop: true,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        var productgalleryTop = new Swiper('.product_gallery_content', {
            spaceBetween: 10,
            loop: true,
            thumbs: {
                swiper: productgalleryThumbs,
            },
        });
    }
    //============== product gallery content slider js end ==============//

    //============== copon code js ==============//
    $('.submit_cupon_code').hide();
    $('.troggle_btn').on('click', function () {
        $('.submit_cupon_code').slideToggle('500', 'linear');
    });

    $('.other_shiping_address').hide();
    $('#shiping_address').on('click', function () {
        $('.other_shiping_address').slideToggle('500', 'linear');
    });
    //============== copon code js end ==============//

    //============== select2 list code js ==============//
    var select2_list = $('.select2_list');
    if (select2_list.length) {
        select2_list.select2();
    }
    //============== select2 list code js end ==============//


    //============== animated icon code js ==============//
    $(window).on('load', function () {
        $.fn.animateIcon = function (options) {
            if (typeof Pathformer === "function" && typeof Vivus === "function") {
                var settings = $.extend({
                    type: 'delayed',
                    start: 'inViewport',
                    dashGap: 20,
                    duration: 50
                }, options);

                $('.pc-icon svg').each(function () {
                    var iconID = $(this).attr('id');
                    var iconVar = iconID.replace('-', '');
                    window['tc' + iconVar] = new Vivus(iconID, settings);
                });
                $('.animated_icon_box').each(function () {
                    $(".animated_icon_box").on('mouseenter',function () {
                        var iconID = $(this).find('svg').attr('id');
                        var iconVar = iconID.replace('-', '');
                        window['tc' + iconVar].reset().play();
                    });
                });
            }
            return this;
        };
        $('.billey_animated_icon').animateIcon();
    });
    //============== animated icon code js end ==============//

    //============== demo selector js ==============//
    if ($(".dl_color-theme-demos").length > 0)
    {
        //switcher 
        var switchs = true;
        $(".settingBtn").on("click", function (e)
        {
            e.preventDefault();
            if (switchs)
            {
                $(this).addClass("active");
                $(".dl_color-theme-demos").animate({"right": "0px"}, 400);
                switchs = false;
            }
            else
            {
                $(this).removeClass("active");
                $(".dl_color-theme-demos").animate({"right": "-270px"}, 400);
                switchs = true;
            }
            $('.dl_color-theme-demos').toggleClass('active');
        });
    }
    //============== demo selector js end ==============//

    //============== Preloader js ==============//
    $(window).on('load', function() {
        $(".preloder_part").fadeOut();
        $(".sk-chase-dot").delay(1000).fadeOut("slow");
    });
    //============== Preloader js end ==============//

    //============== fashion boutique banner slider js ==============//
    var fashion_boutique_banner_slider = document.getElementsByClassName("fashion_boutique_banner_slider");
    if (fashion_boutique_banner_slider.length) {
        var swiper = new Swiper('.fashion_boutique_banner_slider', {
            effect: 'fade',
            loop: true,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.swiper_pagination',
                clickable: true,
                type: 'fraction'
            },
            navigation: {
                nextEl: '.swipernext',
                prevEl: '.swiperprev',
            },
        });
    }
    //============== fashion boutique banner slider js end ==============//

    //============== creative agency banner slider js end ==============//
    var creative_agency_banner_slider = document.getElementsByClassName("creative_agency_banner_slider");
    if (creative_agency_banner_slider.length) {
        var swiper = new Swiper('.creative_agency_banner_slider', {
            effect: 'fade',
            loop: true,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.swiper_pagination',
                clickable: true,
                type: 'fraction'
            },
            navigation: {
                nextEl: '.swipernext',
                prevEl: '.swiperprev',
            },
        });
    }
    //============== fashion boutique banner slider js end ==============//


}(jQuery));