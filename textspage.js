var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

$(document).ready(function () {
  $('#icon1').click(function () {
        $('#text').load('1984.html');
  });
  });

  $(document).ready(function () {
    $('#icon2').click(function () {
          $('#text').load('fahrenheit.html');
    });
    });

$(document).ready(function () {
  $('#icon3').click(function () {
        $('#text').load('bravenewworld.html');
  });
  });