$(window).on('load', addNoise);

function addNoise() {
  $('.noise').css('opacity',1);
}


$(document).ready(function(){



  var start_style = sessionStorage.getItem('href');
  switch (start_style) {
    case 'css/stylehome.css':
      document.getElementById('theme').setAttribute('href', 'css/stylehome.css');
      break;
    case 'css/cubism.css':
      document.getElementById('theme').setAttribute('href', 'css/cubism.css');
      break;}


function changeTheme(newTheme) {
  const elem = document.getElementById('theme');
  elem.href = newTheme;
  sessionStorage.setItem('href', newTheme);
}});


function oncomingissue(){
  alert("This is an on coming issue. The future issues are coming down the pike!")
}