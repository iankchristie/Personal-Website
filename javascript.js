
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

$(document).mouseover(function(e) {
  var id = e.target.id;
  var target = $(e.target);

  if (id in tabs) {
    if (activeTab === "Home") {
      setTab(id);
      return;
    }
    var activeTarget = $("#"+activeTab);
    if (target.closest(activeTarget).length > 0) {
      setTab(id);
    }
  } else {
    setTab(activeTab);
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
