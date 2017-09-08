

// Image caching to remove jankiness.
$(function() {
  function preloadImages() {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i in tabs) {
      //console.log(tabs[i].image);
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = tabs[i].image;
    }
  }

  preloadImages();
});

// Handles the tooltip. Only show when inside a circle.
$( document ).on( "mousemove", function( event ) {
  var id = event.target.id;
  if (id in tabs || id === "Tooltip") {
    $( ".tooltip" ).css("display", "inline-block");
    $(".tooltip").css({
      "left" : event.pageX + 5,
      "top" : event.pageY + 5
    });
    if (id !== "Tooltip") {
      $("#Tooltip").text(tabs[id].heading);
    }
} else {
  $( ".tooltip" ).css("display", "none");
}
});

// This handles the parrallax background.
$(document).ready(function() {
  var movementStrength = 10;
  var height = movementStrength / $(window).height();
  var width = movementStrength / $(window).width();
  $(document).mousemove(function(e){
    var pageX = e.pageX - ($(window).width() / 2);
    var pageY = e.pageY - ($(window).height() / 2);
    var newvalueX = width * pageX * -1 - 25;
    var newvalueY = height * pageY * -1 - 50;
    $('#BackgroundImage').css("background-position", newvalueX+"px "+newvalueY+"px");
  });
});

// Handles zooming. Remove the zooming class from all elements, then add it to
// the current circle and all parent circles.
$(document).click(function(e) {
    var id = e.target.id;
    var target = $(e.target);
    if (target.closest($("#LeftPane")).length > 0) {
      return;
    }
    $(".zoom").removeClass("zoom");
    if (id === "Contact" || id === "ContactP") {
        $("#Contact").addClass("zoom");
        setTab("Contact");
    }
    if (id === "Space" || id === "Square") {
        setTab("Home");
        return;
    }
    if (id in tabs) {
        var jQNode = $("#" + id);
        zoomSelfAndParents(jQNode);
        setTab(id);
    }
});

// Recursively add zooming class to current jquery node and parents.
function zoomSelfAndParents(jQNode) {
    if (jQNode.hasClass("circle")) {
        jQNode.addClass("zoom");
        zoomSelfAndParents(jQNode.parent());
    }
}

// Takes an info tab object and updates the information tab.
function setTab(activeId) {
    var tabInfo = tabs[activeId];
    $("#"+activeId).addClass("visited");
    $("#Info h1").text(tabInfo.heading);
    $("#Image").attr("src", tabInfo.image);
    $("#Description").empty();
    $("#Description").append(tabInfo.description[0]);
    for (var i = 1; i < tabInfo.description.length; i++) {
        $("#Description").append("<br/>" + tabInfo.description[i]);
    }
}
