

var tabs = [];
// Home
tabs["Home"] = {
    "heading": "Ian Christie",
    "image": "Profile.jpg",
    "description": "Here is a description of something"
};
// Contact
tabs["Contact"] = {
    "heading": "Contact",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Phone_font_awesome.svg/768px-Phone_font_awesome.svg.png",
    "description": ""
};
// Email
tabs["Email"] = {
    "heading": "Email",
    "image": "http://cdn.onlinewebfonts.com/svg/img_495.svg",
    "description": "iankchristie@gmail.com",
};
// Resume
tabs["Resume"] = {
    "heading": "Resume",
    "image": "http://cdn.onlinewebfonts.com/svg/img_122808.svg",
    "description": "Click on this link to view my resume."
};
// Github
tabs["Github"] = {
    "heading": "Github",
    "image": "https://cdn.worldvectorlogo.com/logos/github-icon.svg",
    "description": "https://github.com/iankchristie"
};
// Professional
tabs["Professional"] = {
    "heading": "Professional",
    "image": "",
    "description": "asdfasdfasdfasdfadsfasd",
};
// Google
tabs["Google"] = {
    "heading": "Google",
    "image": "",
    "description": "asdfasdfasdfasdfadsfasd"
};
// Chrome
tabs["Chrome"] = {
    "heading": "Chrome",
    "image": "",
    "description": "asdfasdfasdfasdfadsfasd"
};
// YouTube
tabs["YouTube"] = {
    "heading": "YouTube",
    "image": "",
    "description": "asdfasdfasdfasdfadsfasd",
};
// GoldmanSachs
tabs["GoldmanSachs"] = {
    "heading": "GoldmanSachs",
    "image": "",
    "description": "asdfasdfasdfasdfadsfasd"
};
// BrandeisUniversity
tabs["BrandeisUniversity"] = {
    "heading": "BrandeisUniversity",
    "image": "",
    "description": "asdfasdfasdfasdfadsfasd"
};
// Personal
tabs["Personal"] = {
    "heading": "Personal",
    "image": "",
    "description": "asdfasdfasdfasdfadsfasd",
};
// Neuroscience
tabs["Neuroscience"] = {
    "heading": "Neuroscience",
    "image": "",
    "description": "asdfasdfasdfasdfadsfasd"
};
// FirstModel
tabs["FirstModel"] = {
    "heading": "FirstModel",
    "image": "",
    "description": "asdfasdfasdfasdfadsfasd"
};
// JavaApplet
tabs["JavaApplet"] = {
    "heading": "JavaApplet",
    "image": "",
    "description": "asdfasdfasdfasdfadsfasd",
};
// Research
tabs["Research"] = {
    "heading": "Research",
    "image": "",
    "description": "asdfasdfasdfasdfadsfasd"
};
// Projects
tabs["Projects"] = {
    "heading": "Projects",
    "image": "",
    "description": "asdfasdfasdfasdfadsfasd"
};
// iGel
tabs["iGel"] = {
    "heading": "iGel",
    "image": "",
    "description": "asdfasdfasdfasdfadsfasd"
};
// AirlessBreathalyzer
tabs["AirlessBreathalyzer"] = {
    "heading": "AirlessBreathalyzer",
    "image": "",
    "description": "asdfasdfasdfasdfadsfasd",
};
// Neuroscience
tabs["Neuroscience"] = {
    "heading": "Neuroscience",
    "image": "",
    "description": "asdfasdfasdfasdfadsfasd"
};
// Foxus
tabs["Foxus"] = {
    "heading": "Foxus",
    "image": "",
    "description": "asdfasdfasdfasdfadsfasd"
};
// BluetoothApp
tabs["BluetoothApp"] = {
    "heading": "BluetoothApp",
    "image": "",
    "description": "asdfasdfasdfasdfadsfasd",
};
// Outdoor
tabs["Outdoor"] = {
    "heading": "Outdoor",
    "image": "",
    "description": "asdfasdfasdfasdfadsfasd"
};
// Biking
tabs["Biking"] = {
    "heading": "Biking",
    "image": "",
    "description": "asdfasdfasdfasdfadsfasd"
};
// Climbing
tabs["Climbing"] = {
    "heading": "Climbing",
    "image": "",
    "description": "asdfasdfasdfasdfadsfasd"
};
// BoyScouts
tabs["BoyScouts"] = {
    "heading": "BoyScouts",
    "image": "",
    "description": "asdfasdfasdfasdfadsfasd",
};

function setTab(activeId) {
  var tabInfo = tabs[activeId];
  $("#Heading").text(tabInfo.heading);
  $("#Image img").attr("src", tabInfo.image);
  $("#Description").text(tabInfo.description);
}
// "Contact", "Email", "Resume", "Github", "Professional", "Google",
//             "YouTube", "Chrome", "GoldmanSachs", "BrandeisUniversity", "Personal",
//             "Neuroscience", "FirstModel", "JavaApplet", "Research", "Projects",
//             "iGel", "AirlessBreathalyzer", "BluetoothApp", "Foxus", "Outdoor",
//             "Biking", "Climbing", "BoyScouts"];

function zoomSelfAndParents(jQNode) {
  if (jQNode.hasClass("circle")) {
    jQNode.addClass("zoom");
    zoomSelfAndParents(jQNode.parent());
  }
}

$(document).click(function(e) {
  var id = e.target.id;
  $(".zoom").removeClass("zoom");
  $(".hidden").css("display: none");
  if (id === "Space" || id === "square") {
    setTab("Home");
    return;
  }
  if (id in tabs) {
    var jQNode = $("#"+id);
    zoomSelfAndParents(jQNode);
    console.log(id);
    setTab(id);
  }
});
