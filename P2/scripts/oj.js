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

  $(".transcript").click(function (){
    $(this).effect("shake");
  });

  $(".dialog a").on("click", function(e){
    e.preventDefault();
    var page = $(this).attr("href");
    var pageTitle = $(this).attr("title");
    var $dialog = $("<div></div>")
    .html('<iframe style="border: 0px; " src="' + page + '" width="100%" height="100%"></iframe>')
    .dialog({
      autoOpen: false,
      modal: true,
      height: 625,
      width: 500,
      title: pageTitle,
  });
  $dialog.dialog("open");
});

});
