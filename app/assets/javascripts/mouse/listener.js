function mouseMove (event) {
	Game.mouseMove(event);
}

function mouseDown (event) {
	Cursor.clicking = true;

	Bullet.new("white", Player.x + Bullet.spawnX, Player.y + Bullet.spawnY, Player.facing);
}

function mouseUp (event) {
	Cursor.clicking = false;
}

window.addEventListener("mousemove", mouseMove);

window.addEventListener("mousedown", mouseDown);
window.addEventListener("mouseup", mouseUp);