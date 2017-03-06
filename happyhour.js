$(document).ready(function() {
   $('.inner-image').mouseenter(function() {
       $(this).fadeTo('fast',0.45)
     })
     $('.inner').mouseout(function() {
         $(this).fadeTo('fast',1)
       })
});
