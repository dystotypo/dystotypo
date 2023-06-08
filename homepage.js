$(window).on('load', addNoise);

function addNoise() {
  $('.noise').css('opacity',1);
}


function changeTheme() {
  var themeLink = document.getElementById("theme-link");

  if (themeLink.getAttribute("href") === "css/stylehome.css") {
    themeLink.setAttribute("href", "css/cubism.css");
    // Store the theme preference in local storage
    localStorage.setItem("theme", "css/cubism.css");
  } else {
    themeLink.setAttribute("href", "css/stylehome.css");
    // Store the theme preference in local storage
    localStorage.setItem("theme", "css/stylehome.css");
  }
}

window.addEventListener("load", function() {
  var storedTheme = localStorage.getItem("theme-link");
  if (storedTheme) {
    var themeLink = document.getElementById("theme-link");
    themeLink.setAttribute("href", storedTheme);
  }
});

function oncomingissue(){
  alert("This is an on coming issue. The future issues are coming down the pike!")
}