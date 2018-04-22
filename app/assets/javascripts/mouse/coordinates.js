var MouseCoordinates = {
	x: 0,
	y: 0,

	rotation: 0,

	calculatePlayerFacing: function () {
		this.rotation = Math.atan2(Player.x - (this.x - View.x)*Screen.pixelDensity, - (Player.y - (this.y - View.y)*Screen.pixelDensity) )*(180/Math.PI);

		Player.facing = this.rotation;
	}
}