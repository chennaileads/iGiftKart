


(function ($) {
  "use strict";
  var windowOn = $(window);




  // windowOn.on("load", function () {
  //   $('.cookie-popup').delay(2000).queue(function (next) {
  //     $(this).addClass('active');
  //     next(); // Allows the queue to continue
  //   });

  //   // 2. Accept ba Decline button click korle hide hobe
  //   $('.accept-btn, .disline-btn, .close-btn').on('click', function () {
  //     $('.cookie-popup').removeClass('active');


  //   });
  // });






  $(".popup-video").magnificPopup({
    type: "iframe",
    removalDelay: 260,
    mainClass: "mfp-zoom-in",
  });


  // loader js
  windowOn.on("load", function () {
    $(".op-page-loader").fadeOut("slow", function () {
      $(this).remove(1000);
    });
  });

  $('grid').imagesLoaded(function () {
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1
      }
    });


    $('.op-features-arrivals-btn').on('click', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    $('.op-features-arrivals-btn').on('click', function (event) {


      $(this).siblings('.active-gallery-btn').removeClass('active-gallery-btn')
      $(this).addClass('active-gallery-btn');
      event.preventDefault();
    });

  });


  function mousecursor() {
    if ($("body")) {
      const e = document.querySelector(".op-cursor-inner"),
        t = document.querySelector(".op-cursor-outer");
      let n,
        i = 0,
        o = !1;
      (window.onmousemove = function (s) {
        o ||
          (t.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (e.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (n = s.clientY),
          (i = s.clientX);
      }),
        $("body").on("mouseenter", "a, .cursor-pointer", function () {
          e.classList.add("cursor-hover");
          t.classList.add("cursor-hover");
        }),
        $("body").on("mouseleave", "a, .cursor-pointer", function () {
          ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
            (e.classList.remove("cursor-hover"),
              t.classList.remove("cursor-hover"));
        }),
        (e.style.visibility = "visible"),
        (t.style.visibility = "visible");
    }
  }
  $(function () {
    mousecursor();
  });


  // // // Scroll to top when button is clicked

  windowOn.on('scroll', function () {

    let scroll = windowOn.scrollTop();
    if (scroll > 100) {
      $('.op-backToTop').addClass('visible'); // Add class when scrolling down
    } else {
      $('.op-backToTop').removeClass('visible'); // Remove class when at top
    }
  });

  $('#backToTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;


  });





  //  sticky menu


  let lastScrollTop = 0;

  windowOn.on('scroll', function () {
    let scrollTop = windowOn.scrollTop();

    // যখন একদম top এ
    if (scrollTop === 0) {
      $('#header-area').removeClass('header-sticky');
      $('#header-area-two').removeClass('header-sticky-two');
      $('.header-area-top').removeClass('header-sticky-top');

    }
    else if (scrollTop < lastScrollTop && scrollTop > 100) {
      // Scrolling UP
      $('#header-area').addClass('header-sticky');
      $('#header-area-two').addClass('header-sticky-two');
      $('.header-area-top').addClass('header-sticky-top');

    }
    else {
      // Scrolling DOWN
      $('#header-area').removeClass('header-sticky');
      $('#header-area-two').removeClass('header-sticky-two');
      $('.header-area-top').removeClass('header-sticky-top');

    }

    lastScrollTop = scrollTop;
  });






  $('.op-header-categories-btn').on('click', function () {
    $('.header-categories ul').slideToggle(400);
  });



  // // Mouse Cursor    





  $(document).ready(function () {
    // Shobgulo element-ke ekshathe select kore toggle function apply kora
    $('#filterBtn, #overlay').on('click', function () {
      $('#mainLayout').toggleClass('filter-active');

    });
  });




  $('.ab-header-search').on('click', function () {

    $('.ab-search-bar').addClass('ab-search-bar-open');
    $('.mobile-offcanvas-overlay').addClass('mobile-offcanvas-overlay-open');
  })

  $('.ab-search-close, .mobile-offcanvas-overlay').on('click', function () {

    $('.ab-search-bar').removeClass('ab-search-bar-open');
    $('.mobile-offcanvas-overlay').removeClass('mobile-offcanvas-overlay-open');

    console.log('first')

  })




  const $productCols = $('.op-productShop-col');
  const $layoutContainer = $('.layout-container');
  const $allBtnsTwo = $('.op-productShop-menu-btn');
  const $allBtns = $('.op-menu-btn');

  $('.productShop-overlay').on('click', function () {
    $layoutContainer.removeClass('filter-active');
  })

  $allBtns.on('click', function () {
    // 1. Remove the 'active' class from all buttons in the set
    $allBtns.removeClass('active');

    // 2. Add the 'active' class to the specific button clicked
    $(this).addClass('active');
  });
  $allBtnsTwo.on('click', function () {
    // 1. Remove the 'active' class from all buttons in the set
    $allBtnsTwo.removeClass('active');

    // 2. Add the 'active' class to the specific button clicked
    $(this).addClass('active');
  });
  /* reset */
  function prepareGrid(btn) {
    $productCols.removeClass('col-xl-12 col-xl-6 col-xl-4 col-md-6 col-6 col-12');
    $allBtns.removeClass('active');
    $(btn).addClass('active');
  }

  /* 1 column */
  $('.grid-btn-full').click(function (e) {
    e.preventDefault();
    prepareGrid(this);
    $productCols.addClass('col-12');
  });

  /* 2 column */
  $('.grid-btn-2').click(function (e) {
    e.preventDefault();
    prepareGrid(this);
    $productCols.addClass('col-xl-6 col-md-6 col-6');
  });

  /* 3 column */
  $('.grid-btn-3').click(function (e) {
    e.preventDefault();
    prepareGrid(this);
    $productCols.addClass('col-xl-4 col-md-6 col-6');
  });
  
if (window.matchMedia("(max-width: 992px)").matches) {

  if ($layoutContainer.hasClass('filter-active')) {
    $layoutContainer.removeClass('filter-active');
    $productCols.addClass('col-xl-6 col-md-6 col-6');
  } else {
    $layoutContainer.removeClass('filter-active');
    $productCols.addClass('col-xl-6 col-md-6 col-6');
  }

}
 

  /* filter toggle (sidebar hide/show + grid change) */
  $('.sider-hide').click(function (e) {
    e.preventDefault();
    prepareGrid(this);
    if ($layoutContainer.hasClass('filter-active')) {
      $layoutContainer.removeClass('filter-active');
    } else {
      $layoutContainer.addClass('filter-active');
    }


    if ($layoutContainer.hasClass('filter-active')) {
      // sidebar hidden → 3 column
      $productCols.addClass('col-xl-4 col-md-6 col-6');
    }

    else {
      // sidebar visible → 2 column default
      $productCols.addClass('col-xl-6 col-md-6 col-6');
    }
  });
  /* row reverse */
  $('.row-reverse-btn').click(function (e) {
    e.preventDefault();
    $('.product-row').toggleClass('flex-row-reverse');
  });

  /* sidebar left/right toggle */
  $('.sidebar-toggle').click(function (e) {

    e.preventDefault();
    $layoutContainer.toggleClass('sidebar-right');
  });

let countdown = 12 * 24 * 60 * 60 + 7 * 60 * 60 + 51 * 60 + 44;

function updateTimer() {

  let days = Math.floor(countdown / (24 * 60 * 60));
  let hours = Math.floor((countdown % (24 * 60 * 60)) / (60 * 60));
  let minutes = Math.floor((countdown % (60 * 60)) / 60);
  let seconds = countdown % 60;

  let d = document.querySelector(".days");
  let h = document.querySelector(".hours");
  let m = document.querySelector(".minutes");
  let s = document.querySelector(".seconds");

  if (d && h && m && s) {
    d.textContent = days;
    h.textContent = String(hours).padStart(2, '0');
    m.textContent = String(minutes).padStart(2, '0');
    s.textContent = String(seconds).padStart(2, '0');
  }

  countdown--;

  if (countdown < 0) {
    clearInterval(timer);
  }
}

updateTimer();
let timer = setInterval(updateTimer, 1000);


  $('.dropdown-wrapper').each(function () {
    const $wrapper = $(this);

    $wrapper.find('.toggle-button').on('click', function (e) {
      e.stopPropagation();
      $wrapper.find('.filter-menu').toggleClass('active');
    });

    $wrapper.find('.filter-item-list').on('click', function () {
      const value = $(this).data('value');
      $wrapper.find('.toggle-button span').text(value);
      $wrapper.find('.filter-menu').removeClass('active');
    });
  });

  $(document).on('click', function () {
    $('.filter-menu').removeClass('active');
  });

  /*-----------------------------------
         Set Background Image  
  //     -----------------------------------*/
  if ($("[data-bg-src]").length > 0) {
    $("[data-bg-src]").each(function () {
      var src = $(this).attr("data-bg-src");
      $(this).css("background-image", "url(" + src + ")");
      $(this).removeAttr("data-bg-src").addClass("background-image");
    });
  }
  if ($("[data-mask-src]").length > 0) {
    $("[data-mask-src]").each(function () {
      var mask = $(this).attr("data-mask-src");
      $(this).css({
        "mask-image": "url(" + mask + ")",
        "-webkit-mask-image": "url(" + mask + ")",
      });
      $(this).addClass("bg-mask");
      $(this).removeAttr("data-mask-src");
    });
  }








  document.querySelectorAll(".selected-item").forEach(menu => {

    const items = menu.querySelectorAll(".op-header-midle-usd-submenu li");

    items.forEach(item => {
      item.addEventListener("click", function () {

        let currentText = menu.childNodes[0].nodeValue.trim();
        let clickedText = this.textContent;

        menu.childNodes[0].nodeValue = clickedText + " ";
        this.textContent = currentText;

      });
    });

  });
  const heroSlider = new Swiper(".op-hero-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    speed: 1500, // transition speed
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true, // pause on hover
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });



  var project = new Swiper(".blog-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    speed: 1200,
    // autoplay: {
    // 	delay: 2500,
    // 	disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });



  const opProducthome2 = new Swiper(".op-product-slider-homeTwo", {
    loop: true,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 24,

    grabCurser: true,
    speed: 1500, // transition speed
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true, // pause on hover
    },
    navigation: {
      nextEl: ".op-product-slider-next",
      prevEl: ".op-product-slider-prev",
    },

    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 2,
      },

      // when window width is >= 720px
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
      // when window width is >= 1250PX
      1400: {
        slidesPerView: 5,
      },
    },

  });

  var swiper3 = new Swiper(".op-auto-slider-two", {
    loop: true,
    freemode: false,
    slidesPerView: "auto",
    spaceBetween: 0,

    centeredSlides: true,
    speed: 2000,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },

  });
  var swiper3 = new Swiper(".op-auto-slider", {
    loop: true,
    freemode: false,
    slidesPerView: "auto",
    spaceBetween: 0,

    centeredSlides: true,
    speed: 20000,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },

  });



  /*-----------------------------------
         service active 
         -----------------------------------*/
  var swiper5 = new Swiper(".op-testi-active", {
    loop: true,
    freemode: true,
    slidesPerView: 5,
    spaceBetween: 24,

    grabCurser: true,

    navigation: {
      nextEl: ".op-testi-next",
      prevEl: ".op-testi-prev",
    },

    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 5
      },

      // when window width is >= 720px
      992: {
        slidesPerView: 6,
      },
      // when window width is >= 1250PX
      1200: {
        slidesPerView: 7,
      },
      1400: {
        slidesPerView: 8,
      },
    },

  });
  var swiper5 = new Swiper(".op-intsa-active", {
    loop: true,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 24,

    grabCurser: true,



    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },

      // when window width is >= 720px
      992: {
        slidesPerView: 3,
      },
      // when window width is >= 1250PX
      1200: {
        slidesPerView: 5,
      },
    },

  });
  const opRelative = new Swiper(".my-product-slider", {
    loop: true,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 24,

    grabCurser: true,



    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },

      // when window width is >= 720px
      992: {
        slidesPerView: 3,
      },
      // when window width is >= 1250PX
      1200: {
        slidesPerView: 5,
      },
    },

  });


  var swiper5 = new Swiper(".op-testi-active-two", {
    loop: true,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 24,

    grabCurser: true,

    navigation: {
      nextEl: ".op-btn-prev",
      prevEl: ".op-btn-next",
    },

    breakpoints: {
      // when window width is >= 320px
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },

      // when window width is >= 720px
      992: {
        slidesPerView: 4,
      },
      // when window width is >= 1250PX
      1600: {
        slidesPerView: 5,
      },
    },

  });
  var swiper5 = new Swiper(".op-exlcusiveCollection-slider", {
    loop: true,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 24,

    grabCurser: true,
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".op-btn-next",
      prevEl: ".op-btn-prev",
    },

    breakpoints: {
      // when window width is >= 320px
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },

      // when window width is >= 720px
      992: {
        slidesPerView: 2,
      },
      // when window width is >= 1250PX
      1200: {
        slidesPerView: 2,
      },

      1600: {
        slidesPerView: 3,
      },
    },

  });

  var swiper5 = new Swiper(".op-newArrival-three", {
    loop: true,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    grabCurser: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".op-testi-next",
      prevEl: ".op-testi-prev",
    },

    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 2,
      },

      // when window width is >= 720px
      992: {
        slidesPerView: 3,
      },
      // when window width is >= 1250PX
      1400: {
        slidesPerView: 4,
      },
      1600: {
        slidesPerView: 5,
      },
    },

  });

  var swiper5 = new Swiper(".op-heroTwo-active", {
    loop: true,
    freemode: true,
    slidesPerView: 1,
    effect: 'fade',
    grabCurser: true,

    navigation: {
      nextEl: ".op-testi-next",
      prevEl: ".op-testi-prev",
    },
    fadeEffect: {
      crossFade: true, // Enables simultaneous fade out of the old slide and fade in of the new one
    },
    speed: 4000,
    autoplay: {
      delay: 2,
      disableOnInteraction: true,
    },

  });

  var swiper5 = new Swiper(".category-three-slider-active", {
    loop: true,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 1000, // transition speed
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true, // pause on hover
    },
    grabCurser: true,

    navigation: {
      nextEl: ".op-cate-next",
      prevEl: ".op-cate-prev",
    },

    breakpoints: {
      // when window width is >= 320px
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },

      // when window width is >= 720px
      992: {
        slidesPerView: 2,
      },
      // when window width is >= 1250PX
      1200: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 4,
      },
    },

  });
  const trending = new Swiper(".op-trending-two-slider", {
    loop: true,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 24,

    grabCurser: true,

    navigation: {
      nextEl: ".op-trending-two-prev",
      prevEl: ".op-trending-two-next ",
    },

    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 2,
      },

      // when window width is >= 720px
      992: {
        slidesPerView: 3,
      },
      // when window width is >= 1250PX
      1200: {
        slidesPerView: 4,
      },
    },

  });

  // Open Sidebar (multiple buttons)
  $('.cart-toggle').on('click', function (e) {
    e.preventDefault();
    $('.cart-sidebar').addClass('active');
    $('.cart-overlay').addClass('active');
    $('body').css('overflow', 'hidden'); // স্ক্রল বন্ধ করা
  });

  // Close Sidebar
  $('#cart-close, .cart-overlay').on('click', function () {
    $('.cart-sidebar').removeClass('active');
    $('.cart-overlay').removeClass('active');
    $('body').css('overflow', 'auto'); // স্ক্রল চালু করা
  });


  // Quantity Logic
  $('.qty-btn').click(function () {
    var $input = $(this).parent().find('input');
    var val = parseInt($input.val());
    if ($(this).text() == '+') {
      $input.val(val + 1);
    } else {
      if (val > 1) $input.val(val - 1);
    }
  });







  // --- 1. Wishlist Toggle ---
  // Using delegation in case you load products dynamically via AJAX
  $(document).on('click', '.op-productShop-wishlist-btn', function () {
    $(this).toggleClass('active');

    // Toggle heart icon between regular and solid
    const icon = $(this).find('i');
    if ($(this).hasClass('active')) {
      icon.removeClass('fa-regular').addClass('fa-solid');
    } else {
      icon.removeClass('fa-solid').addClass('fa-regular');
    }
  });





  document.addEventListener('DOMContentLoaded', () => {
  const wrappers = document.querySelectorAll('.dropdown-wrapper');

  wrappers.forEach(wrapper => {
    const btn = wrapper.querySelector('.toggle-button');
    const menu = wrapper.querySelector('.filter-menu');

    // 🔥 FIX: guard against missing elements
    if (!btn || !menu) return;

    const span = btn.querySelector('span');

    btn.addEventListener('click', (e) => {
      e.stopPropagation();

      document.querySelectorAll('.filter-menu').forEach(m => {
        if (m !== menu) m.classList.remove('show');
      });

      document.querySelectorAll('.toggle-button').forEach(b => {
        if (b !== btn) b.classList.remove('active');
      });

      menu.classList.toggle('show');
      btn.classList.toggle('active');
    });

    menu.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    const items = wrapper.querySelectorAll('.filter-item-list');

    items.forEach(item => {
      item.addEventListener('click', () => {
        if (span) {
          span.textContent = item.getAttribute('data-value');
        }

        menu.classList.remove('show');
        btn.classList.remove('active');
      });
    });
  });

  window.addEventListener('click', () => {
    document.querySelectorAll('.filter-menu').forEach(m => m.classList.remove('show'));
    document.querySelectorAll('.toggle-button').forEach(b => b.classList.remove('active'));
  });
});


  // /*-----------------------------------
  //           mpbile menu open  view    
  //   -----------------------------------*/


  $('.op-header-top-menu , .op-header-top-menu-two,.op-header-top-menu-three').on('click', function () {

    $('.mobile-offcanvas').addClass('mobile-offcanvas-open');
    $('.mobile-offcanvas-overlay').addClass('mobile-offcanvas-overlay-open');
    console.log('first')
  })
  $('.mobile-offcanvas-close button, .mobile-offcanvas-overlay').on('click', function () {

    $('.mobile-offcanvas').removeClass('mobile-offcanvas-open');
    $('.mobile-offcanvas-overlay').removeClass('mobile-offcanvas-overlay-open');

  })




  // // mobile menu 
  // // Clone menu and append to offcanvas menu
  var abMenuWrap = $('.mobile-menu-active > ul').clone();
  var abSideMenu = $('.mobile-offcanvas-menu nav');
  abSideMenu.append(abMenuWrap);

  // Hide all submenus initially
  abSideMenu.find('.sub-menu').hide();

  // Add toggle buttons to menu items with submenus
  if (abSideMenu.find('.sub-menu').length != 0) {
    abSideMenu.find('.sub-menu').parent().append('<button class="menu-close"><i class="fas fa-chevron-right"></i></button>');
  }

  var sideMenuList = $('.mobile-offcanvas-menu nav > ul > li > a, .mobile-offcanvas-menu nav > ul > li > button');

  // Toggle submenu on click
  $(sideMenuList).on('click', function (e) {
    var $submenu = $(this).siblings('.sub-menu');

    // Only proceed if submenu exists
    if ($submenu.length) {
      e.preventDefault(); // Prevent default link behavior

      if (!$(this).parent().hasClass('active')) {
        $(this).parent().addClass('active');
        $submenu.slideDown();
      } else {
        $submenu.slideUp();
        $(this).parent().removeClass('active');
      }
    }
  });





  document.addEventListener("DOMContentLoaded", function () {

    gsap.registerPlugin(ScrollTrigger);

    const animateFade = (targets, vars) => {
      gsap.utils.toArray(targets).forEach((el) => {
        gsap.from(el, {
          ...vars,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%", 
            toggleActions: "play none none none", 
          },
        });
      });
    };

    
    animateFade(".fade-upText", { y: 50 });      
    animateFade(".fade-downText", { y: -50 });   
    animateFade(".fade-leftText", { x: 50 });    
    animateFade(".fade-rightText", { x: -250 }); 

    // Split text animation
    if ($(".split-text").length > 0) {
      let st = $(".split-text");
      if (st.length == 0) return;
      gsap.registerPlugin(SplitText);
      st.each(function (index, el) {
        el.split = new SplitText(el, {
          type: "lines,words,chars",
          linesClass: "tp-split-line"
        });
        gsap.set(el, {
          perspective: 400
        });
        if ($(el).hasClass('right')) {
          gsap.set(el.split.chars, {
            opacity: 0,
            x: "50",
            ease: "Back.easeOut",
          });
        }
        if ($(el).hasClass('left')) {
          gsap.set(el.split.chars, {
            opacity: 0,
            x: "-50",
            ease: "circ.out",
          });
        }
        if ($(el).hasClass('up')) {
          gsap.set(el.split.chars, {
            opacity: 0,
            y: "80",
            ease: "circ.out",
          });
        }
        if ($(el).hasClass('down')) {
          gsap.set(el.split.chars, {
            opacity: 0,
            y: "-80",
            ease: "circ.out",
          });
        }
        el.anim = gsap.to(el.split.chars, {
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
          },
          x: "0",
          y: "0",
          rotateX: "0",
          scale: 1,
          opacity: 1,
          duration: 0.7,
          stagger: 0.03,
        });
      });
    }


    // Image reveal js

    gsap.registerPlugin(ScrollTrigger);

    let revealContainers = document.querySelectorAll(".reveal");
    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      tl.set(container, {
        autoAlpha: 1
      });

      if (container.classList.contains('zoom-out')) {
        // Zoom-out effect
        tl.from(image, 1.5, {
          scale: 1.4,
          ease: Power2.out
        });
      } else if (container.classList.contains('left') || container.classList.contains('right')) {
        let xPercent = container.classList.contains('left') ? -100 : 100;
        tl.from(container, 1.5, {
          xPercent,
          ease: Power2.out
        });
        tl.from(image, 1.5, {
          xPercent: -xPercent,
          scale: 1,
          delay: -1.5,
          ease: Power2.out
        });
      } else if (container.classList.contains('up') || container.classList.contains('down')) {
        let yPercent = container.classList.contains('up') ? 100 : -100;
        tl.from(container, 1.5, {
          yPercent,
          ease: Power2.out
        });
        tl.from(image, 1.5, {
          yPercent: -yPercent,
          scale: 1,
          delay: -1.5,
          ease: Power2.out
        });
      }
    });



    // Fade-up effect animation
    $(".content").each(function (i) {
      let target = $(this).find(".fade-up");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: $(this),
          start: 'top 80%',
          toggleActions: 'play none none none',
          markers: false,
        }
      });

      if (target.length) {
        tl.from(target, {
          opacity: 0,
          y: 60,
          duration: 0.7,
          stagger: 0.2,
        });
      }
    });
    $(".content").each(function (i) {
      let target = $(this).find(".fade-left, .fade-right");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: $(this),
          start: 'top 100%',
          toggleActions: 'play none none none',
          markers: false,
        }
      });

      if (target.length) {
        target.each(function () {
          let animProps = {
            opacity: 0,
            duration: 1.1,
            stagger: 0.2,
          };
          if ($(this).hasClass("fade-left")) {
            animProps.x = -90; // fade from left
          } else if ($(this).hasClass("fade-right")) {
            animProps.x = 90; // fade from right
          }

          tl.from(this, animProps); // apply per element
        });
      }
    });



  });












})(jQuery);










