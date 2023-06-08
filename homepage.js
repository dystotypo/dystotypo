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
      break;
    case 'css/XIX.css':
      document.getElementById('theme').setAttribute('href', 'assets/css/XIX.css');
      break;
    case 'assets/css/bauhaus.css':
      document.getElementById('theme').setAttribute('href', 'assets/css/bauhaus.css');
      break;
     case 'assets/css/sixties.css':
      document.getElementById('theme').setAttribute('href', 'assets/css/sixties.css');
      break;
    case 'assets/css/vapo.css':
      document.getElementById('theme').setAttribute('href', 'assets/css/vapo.css');
      break;
    case 'assets/css/future.css':
        document.getElementById('theme').setAttribute('href', 'assets/css/future.css');
        break;}


function changeTheme(newTheme) {
  const elem = document.getElementById('theme');
  elem.href = newTheme;
  sessionStorage.setItem('href', newTheme);
}});


function oncomingissue(){
  alert("This is an on coming issue. The future issues are coming down the pike!")
}