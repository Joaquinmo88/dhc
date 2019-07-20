jQuery(document).ready(function ()
{
    // Mobile detection
    var isMobile = {
        Android: function ()
        {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function ()
        {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function ()
        {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function ()
        {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function ()
        {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function ()
        {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    // Popup toggle
    jQuery(document).on('click', '.whats-btn-close', function ()
    {
        jQuery('.whats-container').slideToggle();
        jQuery('.whats-container').attr('whats-popup-status', 0);
    });
    jQuery(document).on('click', '.whats-btn-open', function ()
    {
        jQuery('.whats-container').slideToggle();
        if (jQuery('.whats-container').attr('whats-popup-status') == 0)
        {
            jQuery('.whats-container').attr('whats-popup-status', 1);
        }
        else
        {
            jQuery('.whats-container').attr('whats-popup-status', 0);
        }
    });

    // Send message
    jQuery(document).on('click', '.whats-btn-send', function ()
    {
        var text = jQuery('.whats-input-text').val();
        if (isMobile.any())
        {
            window.open('https://api.whatsapp.com/send?phone=' + '+525951019208' + '&text=' + text);
        } else
        {
            window.open('https://web.whatsapp.com/send?phone=' + '+525951019208' + '&text=' + text);
        }
    });
});