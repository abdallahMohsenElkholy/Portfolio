$(document).ready(function () {
  let homeHeight = $(".home").outerHeight();

  // Full Page Plugin

  function fullPage(...x) {
    $(".splash").fadeOut(800);

    // Some Default Style & Animations

    let width = $(".home h1").outerWidth();
    let sectionsNumWidth = $(".sectionNumContainer").width();

    $(".sectionNumContainer").css("right", `${-sectionsNumWidth / 3}px`);

    // Sections Number done here to be called again after pressing back button
    if (x == 1) {
      $(".work a .before").css("width", "0");
      $(".work a .after").css("width", "0");
      $(".work a")
        .delay(0)
        .animate({ width: "100%", height: "80%", marginLeft: "0" }, 450);
      $(".sectionNumContainer").delay(500).slideDown(400);

      $(".about a .before").css("width", "0");
      $(".about a .after").css("width", "0");
      $(".about a")
        .stop()
        .delay(0)
        .animate({ width: "100%", height: "80%", marginLeft: "0" }, 450);
    } else {
      $(".sectionNumContainer").delay(1500).slideDown(400);
      $(".home h1").animate(
        {
          left: "0",
        },
        800
      );

      $(".vapour").hide(); // Hide Smoke Before Animation

      $(".cup").animate(
        {
          right: "0",
        },
        1300,
        function () {
          $(".vapour").fadeIn(800);
        }
      );

      $(".plate").animate(
        {
          left: "50%",
        },
        800
      );
    }

    $("#fullpage").fullpage({
      anchors: ["home", "work", "about", "contact"],
      normalScrollElements: "#about",
      autoScrolling: true,
      css3: false,
      navigation: true,
      scrollingSpeed: 1300,
      fadingEffect: true,
      animateAnchor: !1,
      navigation: !0,

      onLeave: function (i, nextI, direction) {
        $(".sectionNumContainer").css("display", "none");

        //Home
        if (i == 1) {
          $(".home h1").animate(
            {
              left: `${-width}`,
            },
            800
          );
          $(".cup").animate(
            {
              right: "-100%",
            },
            800
          );

          $(".plate").animate(
            {
              left: "180%",
            },
            1200
          );

          $(".vapour").fadeOut();
        }
        if (nextI == 1) {
          $(".home h1").delay(500).animate(
            {
              left: "0",
            },
            800
          );

          $(".cup").animate(
            {
              right: "0",
            },
            1300,
            function () {
              $(".vapour").fadeIn(800);
            }
          );

          $(".plate").animate(
            {
              left: "50%",
            },
            800
          );
        }

        // work
        let hWidth = $(".work h2").outerWidth();
        if (i == 2) {
          $(".work h2").animate(
            {
              left: `${-hWidth}`,
            },
            800
          );
        }

        if (nextI == 2) {
          $(".work h2").delay(600).animate(
            {
              left: "0",
            },
            800
          );
          $(".work a .before").addClass("slideRight1");
          $(".work a .after").addClass("slideRight2");
          if (x != 1) {
            $(".work a")
              .delay(800)
              .animate({ width: "100%", height: "80%", marginLeft: "0" }, 450);
          }
        }

        //About
        if (i == 3) {
          $(".about h2").animate(
            {
              left: "-110%",
            },
            800
          );
        }
        if (nextI == 3) {
          $(".about h2").delay(500).animate(
            {
              left: "0",
            },
            800
          );
          $(".about a .before").addClass("slideRight1");
          $(".about a .after").addClass("slideRight2");
          if (x != 1) {
            $(".about a")
              .stop()
              .delay(800)
              .animate({ width: "100%", height: "80%", marginLeft: "0" }, 450);
          }
        }

        //Contact
        if (i == 4) {
          $(".contact h2").animate(
            {
              left: "-110%",
            },
            800
          );
        }

        if (nextI == 4) {
          $(".contact h2").delay(500).animate(
            {
              left: "0",
            },
            800
          );
          $(".contact a .before").addClass("slideRight1");
          $(".contact a .after").addClass("slideRight2");
          $(".contact a")
            .stop()
            .delay(800)
            .animate({ width: "100%", height: "80%", marginLeft: "0" }, 450);
        }
      },

      afterLoad: function (e, s) {
        $(".sectionNumContainer").slideDown(400);

        //work
        if (s != 2) {
          $(".work a .before").css("width", "100%");
          $(".work a .after").css("width", "100%");
          $(".work a .before").removeClass("slideRight1");
          $(".work a .after").removeClass("slideRight2");
          $(".work a").css({
            width: "90%",
            height: "70%",
            marginLeft: "10%",
          });
        }

        //About
        if (s != 3) {
          $(".about a .before").css("width", "100%");
          $(".about a .after").css("width", "100%");
          $(".about a .before").removeClass("slideRight1");
          $(".about a .after").removeClass("slideRight2");
          $(".about a").css({
            width: "90%",
            height: "70%",
            marginLeft: "10%",
          });
        }
        //Contact
        if (s != 4) {
          $(".contact a .before").removeClass("slideRight1");
          $(".contact a .after").removeClass("slideRight2");
          $(".contact a").css({
            width: "90%",
            height: "70%",
            marginLeft: "10%",
          });
        }
      },
    });
    x = 0;
  }

  fullPage();

  //methods

  // work Section

  $("#workBtn").click(function () {
    showMore(".work");
    $(".workMore").removeClass("d-none");
  });

  $(".workBackBtn").click(function () {
    if ($(window).scrollTop() > homeHeight) {
      $("body, html").animate({ scrollTop: 0 }, 1000);

      setTimeout(() => {
        backBtn(".work");
        $(".workMore").addClass("d-none");
      }, 1000);
    } else {
      backBtn(".work");
      $(".workMore").addClass("d-none");
    }
  });

  // About Section

  $("#aboutBtn").click(() => {
    showMore(".about");
    $(".aboutMore").removeClass("d-none");
  });

  $(".aboutBackBtn").click(function () {
    if ($(window).scrollTop() > homeHeight) {
      $("body, html").animate({ scrollTop: 0 }, 1000);

      setTimeout(() => {
        $(".aboutMore").addClass("d-none");
        backBtn(".about");
      }, 1000);
    } else {
      backBtn(".about");
      $(".aboutMore").addClass("d-none");
    }
  });

  // Show More & Back Button function

  function showMore(section) {
    $(section).siblings().css("display", "none");
    $(`${section} a`).animate({ height: "100%" }, 500);
    $(`${section}`).css("backgroundColor", "#020B16");
    $(`${section}BackBtn svg`).delay(150).animate(
      {
        right: "0",
      },
      600
    );
    $("footer").show();
    $("#fp-nav").slideUp(500);
    $(".sectionNumContainer").animate({ right: "0" }, 200).slideUp(200);
    $.fn.fullpage.destroy();
    $(section).css("backgroundImage", "none");

    $(".owl-carousel").owlCarousel({
      margin: 24,
      slideTransition: "linear",
      responsive: {
        // breakpoint from 0 up
        1200: {
          items: 3,
        },
        // breakpoint from 480 up
        768: {
          items: 2,
        },
        // breakpoint from 768 up
        0: {
          items: 1,
        },
      },

      onDragged: function () {
        $(".swipeRight").animate(
          {
            opacity: "0",
          },
          500
        );
      },
    });

    $(window).resize(function () {
      homeHeight = $(section).outerHeight();
    });

    changeNav();
  }

  function backBtn(section) {
    $(section).siblings().css("display", "table");
    $(`${section}BackBtn svg`).animate(
      {
        right: "100%",
      },
      500
    );
    $(section).css("backgroundImage", "url(images/moonlight.svg)");
    $("footer").hide();
    $("#fp-nav").fadeIn(800);
    $.fn.fullpage.destroy("all");
    fullPage(1);
  }

  function changeNav() {
    $(window).scroll(function () {
      if ($(window).scrollTop() > homeHeight - 77) {
        $(".myNav a").css("color", "#000");
        $(".myNav a").hover(
          function () {
            $(this).css("color", "#708090");
          },
          function () {
            $(this).css("color", "#000");
          }
        );
        $(".work svg g, .about svg g").attr("stroke", "#000");
      } else {
        $(".myNav a").css("color", "#fff");
        $(".myNav a").hover(
          function () {
            $(this).css("color", "#708090");
          },
          function () {
            $(this).css("color", "#fff");
          }
        );
        $(".work svg g, .about svg g").attr("stroke", "#fff");
      }
    });
  }

  // Email & Phone Copy

  $("#emailCopy").click(function (e) {
    e.preventDefault();
    $("#clickToCopy").remove();
    navigator.clipboard.writeText("omaralkholy2021@gmail.com").then(
      function () {
        $("#emailCopied").fadeIn(500).fadeOut(500);
      },
      function () {
        alert("Failure to copy. Check permissions for clipboard");
      }
    );
  });

  $("#phoneCopy").click(function () {
    navigator.clipboard.writeText("+201061861636").then(
      function () {
        $("#phoneCopied").fadeIn(500).fadeOut(500);
      },
      function () {
        alert("Failure to copy. Check permissions for clipboard");
      }
    );
  });

  $("#emailCopy").mouseover(function () {
    $("#clickToCopy").fadeIn(600).fadeOut(300);
  });
});

// About Section
