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

// $(document).ready(function () {
//   $('#icon1').click(function () {
//     $('#text').load('1984.html');
//         // $('#file').html(d);
//     $('.show').prop("checked", false);
//     filltabs();
//     addIds();
//   });
//   $('#icon2').click(function () {
//     $('#text').load('fahrenheit.html');
//         // $('#file').html(d);
//     $('.show').prop("checked", false);
//     filltabs();
//     addIds();
//   });
//   $('#icon3').click(function () {
//     $('#text').load('bravenewworld.html');
//         // $('#file').html(d)
//     $('.show').prop("checked", false);
//     filltabs();
//     addIds();
// });
// });

// Testing alternatives

$(document).ready(function () {
    $('#icon1').click(function () {
      $('#text').load('1984.html', function() {
        filltabs();
        addIds();
      });
      $('.show').prop("checked", false);
    });


  $('#icon2').click(function () {
    $('#text').load('fahrenheit.html', function() {
      filltabs();
      addIds();
    });
    $('.show').prop("checked", false);
  });

  $('#icon3').click(function () {
    $('#text').load('bravenewworld.html', function() {
      filltabs();
      addIds();
    });
    $('.show').prop("checked", false);
  });

    $('#comparison').click(function () {
      $('#text').load('comparison.html', function() {
        filltabs();
        addIds();
      });
      $('.show').prop("checked", false);
    });
});


$(document).ready(main);
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

			filltab("#text .truth","list-truth","#truth");
      filltab("#text .memory","list-memory","#memory");
      filltab("#text .time","list-time","#time");
		}

    function filltab(what,style,where) {
      var list = `<li class="list $style"><a href="#" onclick="scrollToElement('${where}')">$content</a></li>`
			var elements = $(what);
      console.log(elements);
			$(where+' ul').empty();
			for (var i=0; i<elements.length; i++) {
				$(where+' ul').append(list.tpl({
					style:style,
          where: '#'+elements[i].id,
					content: elements[i].innerHTML
				}))
			}
		}

    //function goto(id) {
			//var t = $(id)[0].offsetTop;
			//$('#text').animate({ scrollTop: t - 600}, 200);
			//$(id).addClass('animate');
			//setTimeout(function(){
				//$(id).removeClass('animate');
			//},5000);
		//}


    //Alternative Function to GoTo
     function scrollToElement(id) {
       var target = document.getElementById(id);
       if (target) {
         var offsetTop = target.offsetTop;
         window.scrollTo({
           top: offsetTop,
           behavior: 'smooth'
         });
       }
     }
