var $ = require('jquery');
var bootstrap = require('bootstrap');

var style = getComputedStyle(document.body);

var windowSmall = window.matchMedia("(max-width: 1439px)");
var windowLarge = window.matchMedia("(min-width: 1439.1px)");
var slowParallaxSpeed;
var medParallaxSpeed;
var fastParallaxSpeed;
var slowParallaxFactor;
var medParallaxFactor;
var fastParallaxFactor;
var wScroll;

/* PAGE LEAVE EFFECTS */

/* Portfolio Leave Effects */
$("#csbyus").on("click", function(event) {
  if (windowLarge.matches) {
    $(".portfolio-text-wrapper").css("opacity", "0");
    $("#csbyus").css("filter", "grayscale(0%)");
    $('#csbyus').css('width', '100%');
    $("#kmi").css('width', 0);
    $('#teachhouse').css('width', 0);
    event.preventDefault();
    var linkUrl = $(this).attr('href');
    setTimeout(function(url) { window.location = url; }, 1000, linkUrl);
  }
});

$("#kmi").on("click", function(event) {
  if (windowLarge.matches) {
    $(".portfolio-text-wrapper").css("opacity", "0");
    $("#kmi").css("filter", "grayscale(0%)");
    $('#csbyus').css('width', 0);
    $("#kmi").css('width', '100%');
    $('#teachhouse').css('width', 0);
    event.preventDefault();
    var linkUrl = $(this).attr('href');
    setTimeout(function(url) { window.location = url; }, 1000, linkUrl);
  }
});

$("#teachhouse").on("click", function(event) {
  if (windowLarge.matches) {
    $(".portfolio-text-wrapper").css("opacity", "0");
    $("#teachhouse").css("filter", "grayscale(0%)");
    $('#csbyus').css('width', 0);
    $("#kmi").css('width', 0);
    $('#teachhouse').css('width', '100%');
    event.preventDefault();
    var linkUrl = $(this).attr('href');
    setTimeout(function(url) { window.location = url; }, 1000, linkUrl);
  }
});

/* Universal Fade and Leave */
/*$("a").on("click", function(event){
  if (this == document.getElementById("csbyus") || this == document.getElementById("kmi") || this == document.getElementById("teachhouse")) {
    return;
  }
  $("main").addClass("fadeOut");
  event.preventDefault();
  var linkUrl = $(this).attr('href');
  setTimeout(function(url) { window.location = url; }, 500, linkUrl);
})*/
/*~~~~~~~~~~~~~~~~~~~~*/

/* Scroll effects */
$(window).scroll(function(){
  wScroll = $(this).scrollTop();

  if(windowLarge.matches) {
    $(".scroll-fade").each(function(){
      if(wScroll > $(this).offset().top - ($(window).height() / 1.1)) {
        $(this).css("opacity", "1");
      } else {
        $(this).css("opacity", "0");
      }
    });
    /*
    $(".far-parallax").each(function(){
      slowParallaxSpeed = 5;
      slowParallaxFactor = (wScroll/slowParallaxSpeed) - (($(this).offset().top/slowParallaxSpeed) - ($(window).height() / (2*slowParallaxSpeed)));
      $(this).css("transform", "translate(0px, " + slowParallaxFactor + "px)");
      $(this).css("-webkit-transform", "translate(0px, " + slowParallaxFactor + "px)");
      $(this).css("-moz-transform", "translate(0px, " + slowParallaxFactor + "px)");
    })
  
    $(".medium-parallax").each(function(){
      medParallaxSpeed = 4;
      medParallaxFactor = (wScroll/medParallaxSpeed) - (($(this).offset().top/medParallaxSpeed) - ($(window).height() / (2*medParallaxSpeed)));
      $(this).css("transform", "translate(0px, " + medParallaxFactor + "px)");
      $(this).css("-webkit-transform", "translate(0px, " + medParallaxFactor + "px)");
      $(this).css("-moz-transform", "translate(0px, " + medParallaxFactor + "px)");
    })
  
    $(".close-parallax").each(function(){
      fastParallaxSpeed = 3;
      fastParallaxFactor = (wScroll/fastParallaxSpeed) - (($(this).offset().top/fastParallaxSpeed) - ($(window).height() / (2*fastParallaxSpeed)));
      $(this).css("transform", "translate(0px, " + fastParallaxFactor + "px)");
      $(this).css("-webkit-transform", "translate(0px, " + fastParallaxFactor + "px)");
      $(this).css("-moz-transform", "translate(0px, " + fastParallaxFactor + "px)");
    })*/
  }

  if(windowSmall.matches) {
    $(".portfolio-item").each(function(){
      if(wScroll > $(this).offset().top - ($(window).height() / 2) && wScroll < $(this).offset().top + ($(this).height() / 2)) {
        $(this).css("filter", "grayscale(0%)");
      } else {
        $(this).css("filter", "grayscale(100%)");
      }
    });
  }
});