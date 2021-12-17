$("input, select, textarea").attr("autocomplete", "off");

(function ($) {
    "use strict";

    $(document).ready(function () {


        //============= Mobile Navigation  ============ 

        $('.navbar-nav').on('click', 'a', function (event) {
            $('.navbar-collapse').collapse('hide');
        });

        //============= lightbox  ============ 

        lightbox.option({
            'resizeDuration': 200,
            'positionFromTop': 100
        })

        //============= Mixitup  ============ 

        $('#mixstart').mixItUp();


        //============= Owl carousel for Testimonial  ============ 

        $(".test-inner").owlCarousel({
            autoPlay: true,
            slideSpeed: 2000,
            pagination: true,
            navigation: false,
            singleItem: true,
            items: 1,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],

        });

        //============= Owl carousel for Client logo area  ============ 

        $(".client-logo").owlCarousel({
            autoPlay: true,
            slideSpeed: 2000,
            pagination: false,
            navigation: false,

            items: 4,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [991, 3],
            itemsTablet: [767, 2],
            itemsMobile: [479, 1],
        });

        //============= One page navigation menu ============ 

        $('ul#nav').onePageNav({
            currentClass: 'current',
            scrollOffset: 80
        });

        //============= scrollUp ============ 

        $.scrollUp({
            scrollText: '<i class="fa fa-angle-up"></i>',
            easingType: 'linear',
            scrollSpeed: 900,
            animation: 'fade'
        });

        //============= Google Map ============
        
        
         function initialize() {
            var mapOptions = {
                zoom: 15,
                scrollwheel: false,
                center: new google.maps.LatLng(40.663293, -73.956351)
            };

            var map = new google.maps.Map(document.getElementById('googleMap'),
                mapOptions);

            var marker = new google.maps.Marker({
                position: map.getCenter(),
                animation:google.maps.Animation.BOUNCE,
                icon: 'img/map-marker.png',
                map: map
              });

            }

            google.maps.event.addDomListener(window, 'load', initialize);
        
     


    }); /*----- Document Ready End -----*/
    
    
    //============= Sticky menu ============
    
    
    var stickyNavTop = $('#sticker').offset().top;
    var sticker = $('#sticker');
    var stickyNav = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > stickyNavTop) {
            sticker.addClass('stick');
        } else {
            sticker.removeClass('stick');
        }
    };

    stickyNav();

    $(window).on('scroll', function () {
        stickyNav();
    });


})(jQuery);