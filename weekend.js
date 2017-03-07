$(document).ready(function() {
   $('.inner-image').mouseenter(function() {
       $(this).fadeTo('fast',0.45)
     })
     $('.inner-image').mouseout(function() {
         $(this).fadeTo('fast',1)
       })
    $("#myAnimation").click(function() {
      myMove()
    })
});


function myMove() {
  var elem = document.getElementById("myAnimation");
  var thepicture= $("#theweekend")
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos === 500) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}
