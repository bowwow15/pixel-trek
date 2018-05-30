var renderFrame = function () {
	requestRenderFrame = requestAnimationFrame(renderFrame);

	//draw stuff
	Terrain.draw();

	ServerPlayer.drawAll();
	Player.draw(Player);

	Bullet.drawAll();

	Particle.drawAll();

	Text.drawAll();

	Health.draw();

	Hud.draw();

	//draw cursor
	Cursor.draw(MouseCoordinates.coordsTimesPixelDensity().x, MouseCoordinates.coordsTimesPixelDensity().y);
} 