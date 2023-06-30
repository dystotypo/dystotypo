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
