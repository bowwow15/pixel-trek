var Chunk = {
	tilesize: 20,

	load: function (type, row) {
		var current_tile_x = 0;
		var current_tile_y = row * this.tilesize;

		type.forEach(function (element, index) {
			ctx.beginPath();
			ctx.drawImage(element, current_tile_x + View.x, current_tile_y + View.y);

			current_tile_x += Chunk.tilesize; //offsets each tile by the size of the tile.
		});
	},

	loadAll: function () {
		for (row = 0; row < 100; row++) {
			let terrainArray = [];

			for (i = 0; i < 100; i++) {
				terrainArray.push(grass_tile);
			} 

			this.load(terrainArray, row);
		}
	}
};