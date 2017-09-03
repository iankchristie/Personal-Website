
var activeTab = "Home";

function setTab(activeId) {
    var tabInfo = tabs[activeId];
    $("#Heading h1").text(tabInfo.heading);
    $("#Image").attr("src", tabInfo.image);
    $("#Description").empty();
    $("#Description").append(tabInfo.description[0]);
    for (var i = 1; i < tabInfo.description.length; i++) {
        $("#Description").append("<br/>" + tabInfo.description[i]);
    }
}

function zoomSelfAndParents(jQNode) {
    if (jQNode.hasClass("circle")) {
        jQNode.addClass("zoom");
        zoomSelfAndParents(jQNode.parent());
    }
}

// $(document).mouseover(function(e) {
//   var id = e.target.id;
//   var target = $(e.target);
//
//   if (id in tabs) {
//     if (activeTab === "Home") {
//       setTab(id);
//       return;
//     }
//     var activeTarget = $("#"+activeTab);
//     if (target.closest(activeTarget).length > 0) {
//       setTab(id);
//     }
//   } else {
//     setTab(activeTab);
//   }
// });

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

$(document).click(function(e) {
    var id = e.target.id;
    var target = $(e.target);
    if (target.closest($("#Info")).length > 0) {
      return;
    }
    $(".zoom").removeClass("zoom");
    if (id === "Contact" || id === "ContactP") {
        $("#Contact").addClass("zoom");
        activeTab = "Contact";
        setTab("Contact");
    }
    if (id === "Space" || id === "square") {
        setTab("Home");
        activeTab = "Home";
        return;
    }
    if (id in tabs) {
        var jQNode = $("#" + id);
        zoomSelfAndParents(jQNode);
        activeTab = id;
        setTab(id);
    }
});

// function preloadImages(array) {
//     if (!preloadImages.list) {
//         preloadImages.list = [];
//     }
//     var list = preloadImages.list;
//     for (var i = 0; i < array.length; i++) {
//         var img = new Image();
//         img.onload = function() {
//             var index = list.indexOf(this);
//             if (index !== -1) {
//                 // remove image from the array once it's loaded
//                 // for memory consumption reasons
//                 list.splice(index, 1);
//             }
//         }
//         list.push(img);
//         img.src = array[i];
//     }
// }
//
// $(document).load(function () {
//   console.log("On Load");
//    if (!preloadImages.list) {
//        preloadImages.list = [];
//    }
//    var list = preloadImages.list;
//    for (var info in tabs) {
//      console.log(info.image);
//        var img = new Image();
//        img.onload = function() {
//            var index = list.indexOf(this);
//            if (index !== -1) {
//                // remove image from the array once it's loaded
//                // for memory consumption reasons
//                list.splice(index, 1);
//            }
//        }
//        list.push(img);
//        img.src = info.image;
//    }
// });

//$(document).load(preloadImages);

$(function() {
  function preloadImages() {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i in tabs) {
      console.log(tabs[i].image);
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
}
);
