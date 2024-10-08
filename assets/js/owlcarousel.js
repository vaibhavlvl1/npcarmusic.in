$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1 // For mobile devices
            },
            600: {
                items: 1 // For tablets
            },
            1000: {
                items: 1 // For desktops
            }
        }
    });
});