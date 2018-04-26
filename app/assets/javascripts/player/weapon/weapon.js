var Weapon = {
	spawnPointx: 0,
	spawnPointy: 1,

	holding: null,

	draw: function () {
		ctx.beginPath();

		switch (this.holding) {
			case "ak_47":
				ctx.drawImage(ak_47_sprite, Player.x + View.x, Player.y + View.y);
				break;
		}
	}
};