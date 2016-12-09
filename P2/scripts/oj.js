$(document).ready(function(){

  $("#accordion").accordion({
    autoHeight: false,
    collapsible: true
  });

  $("#tabs").tabs();

var arrestSound = $("#arrest-sounds audio");
for (i = 0; i < arrestSound.length; i++){
  arrestSound[i].onended = function (){
      $(this).effect("blind");
    }
  }
});
