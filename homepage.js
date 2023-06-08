$(window).on('load', addNoise);

function addNoise() {
  $('.noise').css('opacity',1);
}

$(document).ready(function () {
  var mySwiper = new Swiper(".swiper", {
    autoHeight: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false
    },
    speed: 500,
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    },
    loop: false,
    effect: "slide",
    spaceBetween: 30,
    on: {
      init: function () {
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(".swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
      }
    }
  });
  $(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
    mySwiper.slideTo($(this).index());
    $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
    $(this).addClass("active");
  });
});

function1 = () => {
  var headTag = document.getElementsByTagName('head')[0]
  const linkforCSSfile = document.createElement("link");
  linkforCSSfile.href = 'codefile.css'
  linkforCSSfile.type = 'text/css'
  linkforCSSfile.rel = 'stylesheet'
  headTag.appendChild(linkforCSSfile);
  document.body.appendChild(headTag);
};

function2 = () => {
  var headTag = document.getElementsByTagName('head')[0]
  const linkforCSSfile = document.createElement("link");
  linkforCSSfile.href = 'css/cubism.css'
  linkforCSSfile.type = 'text/css'
  linkforCSSfile.rel = 'stylesheet'
  headTag.appendChild(linkforCSSfile);
  document.body.appendChild(headTag);
  sessionStorage.setItem('href', linkforCSSfile.href);

  if (linkforCSSfile.getAttribute("href") === "css/stylehome.css") {
    linkforCSSfile.setAttribute("href", "css/cubism.css");
    // Store the theme preference in local storage
    localStorage.setItem("theme", "css/cubism.css");
  } else {
    linkforCSSfile.setAttribute("href", "css/stylehome.css");
    // Store the theme preference in local storage
    localStorage.setItem("theme", "css/stylehome.css");
  }
  }


// Check if the user has a stored theme preference and apply it on page load
window.addEventListener("load", function() {
var storedTheme = localStorage.getItem("theme");
if (storedTheme) {
  var themeLink = document.getElementById("theme-link");
  themeLink.setAttribute("href", storedTheme);
}
});

function oncomingissue(){
  alert("This is an on coming issue. The future issues are coming down the pike!")
}