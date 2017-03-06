$(document).ready(function() {
   $('.inner-image').mouseenter(function() {
       $(this).fadeTo('fast',0.45)
     })
     $('.inner').mouseout(function() {
         $(this).fadeTo('fast',1)
       })
});


function myMove() {
  var elem = document.getElementById("myAnimation");
  var pos = 100;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 602) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}
