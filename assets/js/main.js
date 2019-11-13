/* =================================
------------------------------------
 Ventriglia Styles
 version 1.0
 ------------------------------------
 ====================================*/

"use strict";

$(window).on("load", function() {
  /*------------------
		Preloder
	--------------------*/
  $(".loader").fadeOut();
  $("#preloder")
    .delay(400)
    .fadeOut("slow");
});

$(document).ready(function() {
  let scroll_link = $(".scroll");

  /*------------------
		Smooth Scrolling
	--------------------*/
  scroll_link.click(function(e) {
    e.preventDefault();
    let url = $("body")
      .find($(this).attr("href"))
      .offset().top;
    $("html, body").animate(
      {
        scrollTop: url
      },
      1500
    );
    $(this)
      .parent()
      .addClass("active");
    $(this)
      .parent()
      .siblings()
      .removeClass("active");
    return false;
  });
});

(function($) {
  /*------------------
		Navigation
	--------------------*/
  $(".header-section .container").append(
    '<div class="mobile-nav-switch"><i class="fa fa-bars"></i></div><ul class="mobile-menu"></ul>'
  );
  var m1 = $(".main-menu-left ")
    .children()
    .clone();
  var m2 = $(".main-menu-right ")
    .children()
    .clone();
  $(".mobile-menu").append(m1, m2);
  $(".mobile-nav-switch").on("click", function() {
    $(".mobile-menu").slideToggle();
  });

  // Search model
  $(".search-switch").on("click", function() {
    $(".search-model").fadeIn(400);
  });

  $(".search-close-switch").on("click", function() {
    $(".search-model").fadeOut(400, function() {
      $("#search-input").val("");
    });
  });

  /*------------------
		Background Set
	--------------------*/
  $(".set-bg").each(function() {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  /*------------------
		Gallery Slider
	--------------------*/
  $(".hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    margin: 0,
    items: 1,
    nav: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    autoplay: true
  });

  /*------------------
		Portfolio
	--------------------*/

  // Portfolio item height
  var PorfolioItemFix = function() {
    var portfolioItem = $(".portfolio-item");
    var PIheight = portfolioItem.width();
    var h = PIheight;
    var wideH = h * 2;
    portfolioItem.css("height", h);
    if (window.innerWidth > 479) {
      $(".portfolio-item.--big").css("height", wideH);
    } else {
      $(".portfolio-item.--big").css("height", h);
    }
  };
  PorfolioItemFix();

  $(window).on("resize", function() {
    PorfolioItemFix();
  });

  var $container = $(".portfolio-gallery");
  $container.isotope();

  $(".portfolio-filter li").on("click", function() {
    $(".portfolio-filter li").removeClass("active");
    $(this).addClass("active");
    var selector = $(this).attr("data-filter");
    $container.isotope({
      filter: selector
    });
    return false;
  });

  // Popup view
  $(".portfolio-view").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    mainClass: "img-popup-warp",
    removalDelay: 500
  });

  /*------------------
		Accordions
	--------------------*/
  $(".panel-header").on("click", function(e) {
    $(".panel-header").removeClass("active");
    var $this = $(this);
    if (!$this.hasClass("active")) {
      $this.addClass("active");
    }
    e.preventDefault();
  });
  $(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 100);
			return false;
		});
});
  /*------------------
		Circle progress
	--------------------*/
  $(".circle-progress").each(function() {
    var cpvalue = $(this).data("cpvalue");
    var cpcolor = $(this).data("cpcolor");
    var cptitle = $(this).data("cptitle");
    var cpid = $(this).data("cpid");

    $(this).append(
      '<div class="' +
        cpid +
        '"></div><div class="progress-info"><h2>' +
        cpvalue +
        "%</h2><p>" +
        cptitle +
        "</p></div>"
    );

    if (cpvalue < 100) {
      $("." + cpid).circleProgress({
        value: "0." + cpvalue,
        size: 146,
        thickness: 2,
        fill: cpcolor,
        emptyFill: "rgba(0, 0, 0, 0)"
      });
    } else {
      $("." + cpid).circleProgress({
        value: 1,
        size: 146,
        thickness: 2,
        fill: cpcolor,
        emptyFill: "rgba(0, 0, 0, 0)"
      });
    }
  });
})(jQuery);
