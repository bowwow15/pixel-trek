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
		this.load([grass_tile, grass_tile, grass_tile, grass_tile, grass_tile, grass_tile], 0);
		this.load([grass_tile, dirt_tile, grass_tile, grass_tile, grass_tile, grass_tile], 1);
		this.load([dirt_tile, dirt_tile, dirt_tile, grass_tile, grass_tile, grass_tile], 2);
		this.load([dirt_tile, dirt_tile, grass_tile, grass_tile, grass_tile, grass_tile], 3);
		this.load([grass_tile, grass_tile, grass_tile, grass_tile, grass_tile, grass_tile], 4);
		this.load([grass_tile, grass_tile, grass_tile, grass_tile, grass_tile, grass_tile], 5);
	}
};