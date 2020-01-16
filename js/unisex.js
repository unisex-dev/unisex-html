$(document).ready(function() {     
      $("html").niceScroll({
        cursorwidth: "0.3rem",
        cursorfixedheight: 20,
        cursorcolor: "#222222",
        cursorborder: "0px",
        autohidemode: !1,
        zindex: 9999
    });     
//presentacion
    var swiper = new Swiper('.slider-presentacion', {
      slidesPerView: 1,
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }); 

     var swiper = new Swiper('.slider-frases', {
      slidesPerView: 1,
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }); 
   
 
     var swiper = new Swiper('.slider-noticias', {
      slidesPerView: 3,
      spaceBetween: 1,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
          pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
      }
    });    

      var swiper = new Swiper('.slider-testimonios', {
      slidesPerView: 1,
      effect: 'fade',
      autoplay: {
        delay: 8500,
        disableOnInteraction: false,
      },
          pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });  
      
      var swiper = new Swiper('.slider-equipo', {
      slidesPerView: 4,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
          pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 1,
        },
        1024: {
          slidesPerView: 3,
        },
      }
    });  

});

    window.addEventListener('DOMContentLoaded', (event) => {
		        jQuery('#primary-navigation').css(
		        	"background-color", "rgba(59,58,54,0)"
		        	);
        jQuery(window).scroll(function() {
            if (jQuery(window).scrollTop() > 0) {
                jQuery('#primary-navigation').css(
                	"background-color", "rgba(32,32,32,1)"
                	);              
            } else {
                jQuery('#primary-navigation').css(
                	"background-color", "rgba(59,58,54,0)"
                	);
            }
        });
    }); 