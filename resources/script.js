// // Wait for the document to be ready
// $(document).ready(function () {
//   // Select the h1 element and attach a click event handler
//   $("h1").hover(function () {
//     // Change the background color of the h1 element to red
//     $(this).css("background-color", "red");
//   });
// });

const newLocal = $(".js-nav-icon").click(function () {
  var nav = $(".js-main-nav");
  var icon = $(".js-nav-icon i");

  nav.slideToggle(200);
  if (icon.hasClass("ion-navicon-round")) {
    icon.addClass("ion-close-round");
    icon.removeClass("ion-navicon-round");
  } else {
    icon.addClass("ion-navicon-round");
    icon.removeClass("ion-close-round");
  }
});
// $(document).ready(function () {
//   $("h1").hover(function () {
//     $(this).css("background-color", "red");
//   });
// });

// var waypoints = $("#handler-first").waypoint(
//   function (direction) {
//     notify(this.element.id + " hit 25% from top of window");
//   },
//   {
//     offset: "25%",
//   }
// );

$(document).ready(function () {
  // sticky navigation
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "65px",
    }
  );

  // for scrolling effect to plan
  $(".scroll-to-plan").click(function () {
    $("html, body").animate({ scrollTop: $(".js-plans").offset().top }, 1000);
  });

  // for scrolling effect to features
  $(".scroll-to-features").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  //  Navigation scroll
  $("a[href*=#]:not([href=#])").click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate({ scrollTop: target.offset().top }, 10000);
        return False;
      }
    }
  });
});
