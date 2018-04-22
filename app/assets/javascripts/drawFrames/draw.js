var renderFrame = function () {
	requestRenderFrame = requestAnimationFrame(renderFrame);

	//draw stuff
	Terrain.draw();

	Player.draw();
}

document.onload = renderFrame();