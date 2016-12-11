$(document).ready(function(){

  $("#accordion").accordion({
    autoHeight: false,
    collapsible: true
  });

  $("#tabs").tabs();

$(".arrest-sounds audio").on("play", function (){
  $(".arrest-sounds audio").on("ended", function(){
    $(this).hide("blind", {direction: "horizontal"});
    });
  });

  $("body").append('<div id="dialog"/>')
    $("#dialog").dialog({
      height:400, width:500, modal: true, autoOpen:false
    });
    $('#child > img').on('click', function() {
      $("#dialog").html($('<img />', {src:this.src}));
      $("#dialog").dialog("open");
    });

});
