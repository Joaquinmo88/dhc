(function ($) {

    "use strict";

    $(window).load(function () {
        if ($('#preloader').length > 0) {
            $('#preloader').fadeOut('slow', function () {
                $(this).remove();
            });
        }
    });

    $(window).scroll(function () {
        var navbar = $("#navbar");
        if ($(this).scrollTop() > 45) {
            navbar.addClass("fixed-top-navbar")
            navbar.find('.nav-link').css({ 'color': '#2f2f2f' });
            navbar.find('.navbar-brand').css({ 'color': '#2f2f2f' });
            navbar.find('img').attr({ 'src': '../assets/images/logo-icon.png' });
        } else {
            navbar.removeClass("fixed-top-navbar");
            navbar.find('.nav-link').removeAttr('style');
            navbar.find('.navbar-brand').removeAttr('style');
            navbar.find('img').attr({ 'src': '../assets/images/logo-text.png' });
        }
    });

    $(document).ready(function () {

        // $('body').scrollspy({
        //     offset: 46,
        //     target: '.navbar-fixed-top'
        // });

        if ($("#owl-demo").length > 0) {
            $("#owl-demo").owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 3,
                navigation: true,
                itemsDesktop: [1000, 3], //5 items between 1000px and 901px
                itemsDesktopSmall: [900, 2], // betweem 900px and 601px
                itemsTablet: [600, 1], //2 items between 600 and 0
                // animateOut: 'fadeOut',
            });
        }

        if ($("#gallery").length > 0) {
            $("#gallery").unitegallery();
        }

        if ($(".increment-number").length > 0) {
            $(".increment-number").counterUp({
                delay: 10,
                time: 1000
            });
        }

        if ($('#slide-1').length > 0) {
            var s = skrollr.init({
                forceHeight: false
            });


            // Refresh Skrollr after resizing our sections
            s.refresh($('#slide-1'));
        }

        if ($("#map").length > 0) {
            initMap();
        }


    });




})(jQuery);


function initMap() {
    var myLatLng = { lat: 19.5582287, lng: -98.8594732 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        // title: 'Hello World!'
    });
}