
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
  }
});
