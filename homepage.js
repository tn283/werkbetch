$(document).ready(function() {
   $('.one').mouseenter(function() {
       $(this).fadeTo('fast',0.45)
     })
     $('.one').mouseout(function() {
         $(this).fadeTo('fast',1)
       })
});
