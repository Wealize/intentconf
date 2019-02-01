$(document).ready(function() {
    $(window).scroll(function() {
        gtag('event', 'scroll', {
            'event_category': 'Scroll'
        });
    });
    let $dropdown = $('.dropdown-menu');
    let $icon = $('.icon');
    let $iconClose = $('.close')
    $icon.on('click', function() {
        $dropdown.toggle('drop', 500);
        $icon.hide();
    });
    $iconClose.on('click', function() {
        $dropdown.hide();
        $icon.css('display', 'inline-block');
    });
    document.addEventListener('click', function(event) {
        let menu = document.getElementById("menu");
        let icon = document.getElementById("icon");
        let isClickInside = menu.contains(event.target);
        let isMenuIcon = icon.contains(event.target)
        if (!isClickInside && !isMenuIcon) {
            $dropdown.fadeOut();
            icon.style.display = 'inline-block';
        }
    });
});