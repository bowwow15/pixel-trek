var Terrain = {
	array: [],

	draw: function () {
		ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'; //use alpha element for motion blur (1 = none, 0 = all)
		ctx.beginPath();

		ctx.rect(0, 0, canvas.width, canvas.height);
		ctx.fill();

		//test
		Chunk.loadAll();
	}
};