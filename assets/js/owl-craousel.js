jQuery("#carousel").owlCarousel({
    autoplay: true,
    rewind: false /* use rewind if you don't want loop */,
    margin: 0,
    loop: true,
    /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
        0: {
            items: 3
        },

        600: {
            items: 6
        },

        1024: {
            items: 10
        },

        1366: {
            items: 10
        }
    }
});