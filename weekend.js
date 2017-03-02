$(document).ready(function() {
   $('.inner-image').mouseenter(function() {
       $(this).fadeTo('fast',0.45)
     })
     $('.inner-image').mouseout(function() {
         $(this).fadeTo('fast',1)
       })
});
