var Terrain = {
	draw: function () {
		ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'; //motion blur
		ctx.beginPath();

		ctx.rect(0, 0, canvas.width, canvas.height);
		ctx.fill();
	}
};