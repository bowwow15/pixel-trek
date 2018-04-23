var Terrain = {
	draw: function () {
		ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'; //use alpha element for motion blur (1 = none, 0 = all)
		ctx.beginPath();

		ctx.rect(0, 0, canvas.width, canvas.height);
		ctx.fill();

		//test
		ctx.drawImage(grass_tile, 0 + View.x, 0 + View.y,);
	}
};