var eventoSizeH = $(".evento img").height();
//$(".todos-eventos").attr("style", "height: " + eventoSizeH + "px");

//sobre
//$(".sobre").attr("style", "padding-top: " + (eventoSizeH - 50) + "px");


var eventoSizeW = $(".evento img").width();
var trescoposRight = eventoSizeW / 2;
//$(".tres-copos").attr("style", "right: "+ (trescoposRight - 100) +"px");
//$(".tres-copos img").attr("style", "width: " + (trescoposRight + 100) + "px");

$(".menubtn").click(function() {
    if ($(".menuarea").hasClass("menuon")) {
        $(".menuarea").removeClass("menuon");
    } else {
        $(".menuarea").addClass("menuon");
    }
});