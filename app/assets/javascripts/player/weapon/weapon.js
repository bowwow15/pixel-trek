var Weapon = {
	spawnX: 0,
	spawnY: 1,

	holding: "hand",

	drawHands: function (hand1, hand2, image, radian) {
		let playerX = Player.x + View.x;
		let playerY = Player.y + View.y;

		ctx.translate(playerX, playerY);
		ctx.rotate(radian * Math.PI / 180);
		ctx.translate(-playerX, -playerY);

		let hand1X = playerX + hand1.x;
		let hand1Y = playerY + hand1.y;
		let hand2X = playerX + hand2.x;
		let hand2Y = playerY + hand2.y;

		if (Player.facing > 0) {
			hand1X = playerX - hand1.x - 5;
			hand2X = playerX - hand2.x - 5;
		}

		ctx.drawImage(hand_1_image, hand1X, hand1Y); //hand 1

		ctx.drawImage(hand_2_image, hand2X, hand2Y); //hand 2

		ctx.resetTransform();
	},

	draw: function () {
		ctx.beginPath();

		let radian = Player.facing + 89.67;

		let gun_sprite = ak_47_sprite;

		let posX;
		let posY;

		let rotationCenterX;
		let rotationCenterY;

		let image;

		switch (this.holding) {
			case "ak_47": //gun sprite 35 x 15
				image = {width: 35, height: 15};
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

					rotationCenterX = 35 - 10;
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

		if (Player.weilding) {
			this.drawHands({
				x: -3,
				y: 3
			}, {
				x: 10,
				y: 2
			},

			{
				width: image.width,
				height: image.height
			},

			radian);
		}
	}
};