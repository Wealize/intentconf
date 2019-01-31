$(document).ready(function() {
    $(window).scroll(function() {
        gtag('event', 'scroll', {
            'event_category': 'Scroll'
        });
    });
    let $dropdown = $('.dropdown-menu');
    $dropdown.hide();
    let $icon = $('.icon');
    $icon.on('click', function() {
        $dropdown.toggle('drop', 500);
        $icon.hide();
    });
    document.addEventListener('click', function(event) {
        let menu = document.getElementById("menu");
        let icon = document.getElementById("icon");
        let isClickInside = menu.contains(event.target);
        let isMenuIcon = icon.contains(event.target)
        if (!isClickInside && !isMenuIcon) {
            $dropdown.hide();
            icon.style.display = 'inline-block';
        }
    });
});