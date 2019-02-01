$(document).ready(function() {
    window.dataLayer = window.dataLayer || [];

    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'UA-133185320-1');

    $(window).scroll(function() {
        gtag('event', 'scroll', {
            'event_category': 'Scroll'
        });
    });
});