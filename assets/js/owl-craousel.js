// Function to initialize an Owl Carousel
function initializeOwlCarousel(selector, options) {
    jQuery(selector).owlCarousel(options);
}

// Common settings for all carousels
const commonSettings = {
    autoplay: true,
    rewind: false,
    margin: 0,
    loop: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true
};

// Initialize the main carousel
initializeOwlCarousel("#carousel", {
    ...commonSettings,
    responsive: {
        0: { items: 3 },
        600: { items: 6 },
        1024: { items: 10 },
        1366: { items: 10 }
    }
});

// Initialize the selling carousel
initializeOwlCarousel("#carousel-selling", {
    ...commonSettings,
    responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1024: { items: 3 },
        1366: { items: 3 }
    }
});
initializeOwlCarousel("#carousel-best-seller", {
    ...commonSettings,
    responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1024: { items: 5 },
        1366: { items: 5 }
    }
});
initializeOwlCarousel("#carousel-just-landing", {
    ...commonSettings,
    responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1024: { items: 5 },
        1366: { items: 5 }
    }
});
