var resizeCanvas;

var pixelDensity = 0.5;

resizeCanvas = function () { //resizes canvas to browser window
    var aspectRatio = window.innerWidth / window.innerHeight;

    canvas.width = window.innerWidth * pixelDensity;
    canvas.height = window.innerHeight * pixelDensity;
}

resizeCanvas();