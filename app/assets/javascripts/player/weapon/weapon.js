var Weapon = {
	spawnX: 0,
	spawnY: 1,

	holding: null,

	draw: function () {
		ctx.beginPath();

		let radian = Player.facing + 89.67;

		let gun_sprite = ak_47_sprite;

		let posX;
		let posY;

		let rotationCenterX;
		let rotationCenterY;

		switch (this.holding) {
			case "ak_47":
				posX = -10;
				posY = -3;

				rotationCenterX = 10;
				rotationCenterY = 5;

				Bullet.spawnX = 30 * Math.cos(radian * Math.PI / 180);
				Bullet.spawnY = 30 * Math.sin(radian * Math.PI / 180);

				if (Player.facing < 0) {
					gun_sprite = ak_47_sprite;
				} else {
					gun_sprite = ak_47_sprite_reversed;

					rotationCenterX = 26;
					rotationCenterY = 5;

					radian += 180;

					posX = -26;
					posY = -4;
				}
				break;
		}

		ctx.translate((Player.x + View.x + posX + rotationCenterX), (Player.y + View.y + posY + rotationCenterY));

		ctx.rotate(radian * Math.PI / 180);
		ctx.translate(-(Player.x + View.x + posX + rotationCenterX), -(Player.y + View.y + posY + rotationCenterY));

		ctx.drawImage(gun_sprite, Player.x + View.x + posX, Player.y + View.y + posY);

		ctx.resetTransform();
	}
};