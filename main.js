// owl carousel
$(document).ready(function () {
  // MAIN SLIDER
  $(".main-slider").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: false,
    responsive: false,
    items: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    smartSpeed: 500,
    autoplayHoverPause: true,
  });
  // PRODUCTS SLIDER
  $(".product-slider").owlCarousel({
    loop: true,
    margin: 25,
    responsiveClass: true,

    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 4,
        nav: true,
      },
    },
    autoplay: true,
    autoplaySpeed: 1000,
    smartSpeed: 500,
    autoplayHoverPause: true,
  });
  // TESTIMONIALS-SLIDER
  $(".testimonials-slide").owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
      600: {
        items: 2,
        nav: false,
        dots: true,
      },
      1000: {
        items: 2,
      },
    },
  });
  // COMPANIES SLIDER
  $(".companies-slider").owlCarousel({
    loop: true,
    margin: 40,
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      850: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  });
});
