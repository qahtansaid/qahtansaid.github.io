!(function ($) {
  "use strict";

  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(100)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });

  $(document).ready(function () {
    let owl = $(".owl-carousel");
    owl.owlCarousel({
      // animateOut: "fadeOut",
      loop: true,
      margin: 5,
      items: 5,
      nav: true,
      dots: false,
      center: true,
      autoplay: true,
      autoplayTimeout: 1000,
      autoplayHoverPause: true,
    });
  });

  const swiper = new Swiper(".swiper-logo", {
    // Optional parameters
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 4,
  });

  const swiper_one = new Swiper(".swiper-one", {
    // Optional parameters
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 10,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
    } else {
      $("#header").removeClass("header-scrolled");
    }
  });

  if ($(window).scrollTop() > 100) {
    $("#header").addClass("header-scrolled");
  }

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      mirror: false,
    });
  }
  $(window).on("load", function () {
    aos_init();
  });
})(jQuery);
