var Chunk = {
	tilesize: 20,

	load: function (type, row) {
		var current_tile_x = 0;
		var current_tile_y = row * this.tilesize;

		type.forEach(function (element, index) {
			ctx.beginPath();

			ctx.translate(current_tile_x, current_tile_y);
			ctx.rotate(element.rotation);
			ctx.translate(-current_tile_x, -current_tile_y);

			ctx.drawImage(element.tile, current_tile_x + View.x, current_tile_y + View.y);

			current_tile_x += Chunk.tilesize; //offsets each tile by the size of the tile.

			ctx.resetTransform();
		});
	},

	loadAll: function () {
		for (row = 0; row < 20; row++) {
			let terrainArray = [];

			let rotation = 0;

			for (i = 0; i < 20; i++) {
				terrainArray.push({
					tile: grass_tile,
					rotation: rotation
				});
			}

			this.load(terrainArray, row);
		}
	}
};