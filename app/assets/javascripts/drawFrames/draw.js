var renderFrame = function () {
	requestRenderFrame = requestAnimationFrame(renderFrame);

	//draw stuff
	Terrain.draw();

	Player.draw();

	Bullet.drawAll();

	Particle.drawAll();

	//draw cursor
	Cursor.draw(MouseCoordinates.coordsTimesPixelDensity().x, MouseCoordinates.coordsTimesPixelDensity().y);
} 