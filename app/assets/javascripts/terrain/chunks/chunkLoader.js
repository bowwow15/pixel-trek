var Chunk = {
	tilesize: 20,

	all: [], // each coordinate is multiplied by chunk size!

	load: function (chunk, x, y) {
		var current_tile_x = x * this.tilesize;
		var current_tile_y = y * this.tilesize;

		ctx.beginPath();

		ctx.translate(current_tile_x, current_tile_y);
		ctx.rotate(chunk.rotation);
		ctx.translate(-current_tile_x, -current_tile_y);

		ctx.drawImage(chunk.tile, current_tile_x + View.x, current_tile_y + View.y);

		current_tile_x += Chunk.tilesize; //offsets each tile by the size of the tile.

		ctx.resetTransform();
	},

	loadAll: function () {
		Chunk.all.forEach(function (element, index) {
			Chunk.load({
				tile: element.tile,
				rotation: 0,
			},

			element.x, element.y);
		});
	},

	fromServer: function (chunks) {
		Chunk.all = [];

		chunks.forEach(function(element, index) {
			chunks[index].tile = eval(chunks[index].tile); // tile is rendered as string.

			Chunk.all.push(element);
		});
	}
};