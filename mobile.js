
$(function() {
  var isMobile = false;
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    isMobile = true;
   console.log('Mobile');
  } else {
   console.log('Not Mobile');
  }

  if(isMobile) {
    console.log("Doing Mobile work");
    $("#Tooltip").remove();
    $("#BackgroundImage").css("background-size", "cover");
    $("#InfoPane").addClass("mobile");
    $("#Name").hide();
    $("#MobileName").show();
    $("#Info").addClass("mobile");
    $("#Description").addClass("mobile");
    $("#Graph").addClass("mobile");
    $("#Contact").addClass("mobile");
    $("#Square").addClass("mobile");
    $(".circle-title").addClass("mobile");

    $("#Professional").removeClass("deg0");
    $("#Professional").addClass("mobile");
    $("#Professional").addClass("deg90");

    $("#Personal").removeClass("deg180");
    $("#Personal").addClass("deg270");
    $("#Personal").addClass("mobile");
  }
});
