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

$(document).ready(main);

$(document).ready(function () {
  $('#icon1').click(function () {
        $('#text').load('1984.html')
        $('#file').html(d)
        $('.show').prop("checked", false)
        filltabs()
        addIds()
  });
  $('#icon2').click(function () {
        $('#text').load('fahrenheit.html')
        $('#file').html(d)
        $('.show').prop("checked", false)
        filltabs()
        addIds()
  });
  $('#icon3').click(function () {
        $('#text').load('bravenewworld.html')
        $('#file').html(d)
        $('.show').prop("checked", false)
        filltabs();
        addIds();
});
});

//highlights functionalities

  function main() {
    $('#showtruth').click(function() {
      if (this.checked)
        $('.truth').addClass('text-truth')
      else
        $('.truth').removeClass('text-truth')
    })
    $('#showmemory').click(function() {
      if (this.checked)
        $('.memory').addClass('text-memory')
      else
        $('.memory').removeClass('text-memory')
    })
    $('#showtime').change(function() {
      if (this.checked)
        $('.time').addClass('text-time')
      else
        $('.time').removeClass('text-time')
    })
  }

//metadata info fill

String.prototype.tpl = function(o) {
    var r = this ;
    for (var i in o) {
        r = r.replace(new RegExp("\\$"+i, 'g'),o[i])
    }
    return r
}

function addIds() { //function one

    addId('.truth','truth') //adds ids to the annotations
    addId('.memory', 'memory')
    addId('.time', 'time')

}

function addId(what, prefix) {
    var id = '0'
    var elements = $(what);
    for (var i=0; i<elements.length; i++) { //adding numbered ids
        elements[i].id = prefix + "-" + id++
    }
}

function filltabs(){
			filltab("#file .truth","list-truth","#truth");
      filltab("#file .memory","list-memory","#memory")
      filltab("#file .time","list-time","#time")
		}

    function filltab(what,style,where) {
			var list = `<li class="list $style">$content</li>`
			var elements = $(what);
			$(where+' ul').empty();
			for (var i=0; i<elements.length; i++) {
				$(where+' ul').append(list.tpl({
					style:style,
					content: elements[i].innerHTML
				}) )
			}
		}

//change themes

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