var MouseCoordinates = {
	x: 0,
	y: 0,

	rotation: 0,

	calculatePlayerFacing: function () {
		let mouse_x_pixel_dens = this.x * Screen.pixelDensity;
		let mouse_y_pixel_dens = this.y * Screen.pixelDensity;

		this.rotation = Math.atan2((Player.x + 9) - (mouse_x_pixel_dens - View.x), - ((Player.y + 17.5) - (mouse_y_pixel_dens - View.y)) )*(180/Math.PI);

		Player.facing = this.rotation;
	}
}