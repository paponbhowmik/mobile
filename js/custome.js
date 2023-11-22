$('.counter').counterUp();

$('.testimonial-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
  });


$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    center: true,
    autoplay: true,
    responsive:{
        0:{
            items:3,
        },
        600:{
            items:5,
        },
        1000:{
            items:5,
        }
    }
})
})

// preloder js st
var loder = document.getElementById("preloder");
window.addEventListener("load", function(){
    loder.style.display = "none"
    $("#preloder").delay(6000).fadeOut("slow");
})
// preloder js end
// back to top button js st
var btn = $('.top-button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
// back to top button js end

AOS.init({
  offset: 230,
  duration: 1200,
});
