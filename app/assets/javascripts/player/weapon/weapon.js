var Weapon = {
	spawnPointx: 0,
	spawnPointy: 1,

	holding: null,

	draw: function () {
		ctx.beginPath();

		switch (this.holding) {
			case "ak_47":
				let posX = -5;
				let posY = -3;

				ctx.translate((Player.x + View.x + posX), (Player.y + View.y + posY));

				let radian = Player.facing + 89.67;

				Bullet.spawnX = 35 * Math.cos(radian * Math.PI / 180);
				Bullet.spawnY = 35 * Math.sin(radian * Math.PI / 180);

				ctx.rotate(radian * Math.PI / 180);
				ctx.translate(-(Player.x + View.x + posX), -(Player.y + View.y + posY));

				ctx.drawImage(ak_47_sprite, Player.x + View.x + posX, Player.y + View.y + posY);

				ctx.resetTransform();
				break;
		}
	}
};