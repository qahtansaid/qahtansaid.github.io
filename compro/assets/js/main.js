!(function ($) {
  "use strict";

  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(1000)
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

  //AOS
  $(window).on("load", function () {
    aos_init();
  });

  //venobox
  $(document).ready(function () {
    $(".venobox").venobox();
  });

  //EmailJS
  // $(document).ready(function () {
  //   emailjs.init("user_ou24vEuSDtE3gwIgjyb45");
  // });

  $("#ticketForm").submit(function (evt) {
    evt.preventDefault();
    let cust_name = $("#cust_name").val();
    let cust_email = $("#cust_email").val();
    let subject = $("#subject").val();
    let message = $("#message").val();
    var templateParams = {
      user_name: cust_name,
      user_email: cust_email,
      msg_subject: subject,
      msg_body: message,
    };
    console.log(JSON.stringify(templateParams));
    $.ajax("http://localhost:8000/mailer", {
      type: "POST",
      data: JSON.stringify(templateParams),
      success: function (data, status, xhr) {
        swal("Email has been sent!", "We will contact you ASAP!", "success");
        $("#ticketForm").trigger("reset");
      },
      error: function (jqXhr, textStatus, errorMessage) {
        swal(
          "Oops. Failed!",
          "Please try again later, or contact us directly!",
          "error"
        );
      },
    });

    // emailjs.send("service_vlld6cm", "template_j0d7omr", templateParams).then(
    //   function (response) {
    //     console.log("ticket : ", response);
    //     if (response.status == 200) {
    //       swal("Email has been sent!", "We will contact you ASAP!", "success");
    //       $("#ticketForm").trigger("reset");
    //     } else {
    //       swal(
    //         "Oops. Failed!",
    //         "Please try again later, or contact us directly!",
    //         "error"
    //       );
    //     }
    //   },
    //   function (error) {
    //     console.log("ticket error: ", error);
    //     swal(
    //       "Oops. Failed!",
    //       "Please try again later, or contact us directly!",
    //       "error"
    //     );
    //   }
    // );
  });
})(jQuery);
