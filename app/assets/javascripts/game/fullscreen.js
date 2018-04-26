function goFullScreen(){
    var canvas = document.getElementById("body");
    if(canvas.requestFullScreen)
        canvas.requestFullScreen();
    else if(canvas.webkitRequestFullScreen)
        canvas.webkitRequestFullScreen();
    else if(canvas.mozRequestFullScreen)
        canvas.mozRequestFullScreen();
}

document.addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    goFullScreen();
  }
}, false);