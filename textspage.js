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
        $('#text').load('1984.html');
        filltabs();
  });

$('#icon2').click(function () {
    $('#text').load('fahrenheit.html');
});

$('#icon3').click(function () {
  $('#text').load('bravenewworld.html');
});

});

//highlights

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
      console.log('tabs');
//			filltab("#file .memory","list-memory","#memory")
//			filltab("#file .time","list-time","#time")
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
