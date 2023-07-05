$(window).on('load', addNoise);

function addNoise() {
  $('.noise').css('opacity',1);
}


function changeTheme(themeName) {
  var themeLink = document.getElementById("theme-link");

  themeLink.setAttribute("href", themeName);
  // Store the theme preference in local storage
  localStorage.setItem("theme", themeName);
}

window.addEventListener("DOMContentLoaded", function() {
  var storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    var themeLink = document.getElementById("theme-link");
    themeLink.setAttribute("href", storedTheme);
  }
});

function oncomingissue(){
  alert("The future issues are coming down the pike!")
}

var video = document.getElementById("myVideo");


gsap.to('.titlepage',{
  x:'20%',rotate:10,duration:0.85,scrollTrigger:{
    trigger:'.ttitlepage',
    scrub:true,
    start:'top 25%'
  }
})
gsap.to('.summary',{
  x:'20%',rotate:10,duration:0.85,scrollTrigger:{
    trigger:'.summary',
    scrub:true,
    start:'top 30%'
  }
})
gsap.to('.subtitle',{
  x:'-20%',rotate:-10,duration:0.85,scrollTrigger:{
    trigger:'.subtitle',
    scrub:true,
    start:'top 35%'
  }
})
