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


        if ($("#gallery").length > 0) {
            $("#gallery").unitegallery();
        }

        if ($("#gallery-1").length > 0) {
            $("#gallery-1").unitegallery();
        }

        if ($("#gallery-2").length > 0) {
            $("#gallery-2").unitegallery();
        }

        if ($("#gallery-3").length > 0) {
            $("#gallery-3").unitegallery();
        }

        if ($(".increment-number").length > 0) {
            $(".increment-number").counterUp({
                delay: 10,
                time: 1000
            });
        }

        if ($("#map").length > 0) {
            initMap();
        }
        
        if ($('#contactForm').length > 0) {
            $('#contactForm').on('submit', function(e){
                e.preventDefault();
                
                $('button').prop('disabled', true).html(`
                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                <span class="small">espere un momemnto</span>`);

                $("#response-message").fadeIn('fast', function(){
                   
                    
                        $(this).fadeOut('2500', function(){
                            $('button').prop('disabled', false).html("Enviar");
                        })
                    
                })

            })
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