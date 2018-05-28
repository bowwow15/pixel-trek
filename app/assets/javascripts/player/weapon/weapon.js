var Weapon = {
	spawnX: 0,
	spawnY: 1,

	all: ["ak_47"],

	checkIfWeapon: function (holding) {
		return (Weapon.all.indexOf(holding) > -1);
	},

	drawHands: function (player, hand1, hand2, image, radian) {
		let playerX = player.x + View.x;
		let playerY = player.y + View.y;

		ctx.translate(playerX, playerY);
		ctx.rotate(radian * Math.PI / 180);
		ctx.translate(-playerX, -playerY);

		let hand1X = playerX + hand1.x;
		let hand1Y = playerY + hand1.y;
		let hand2X = playerX + hand2.x;
		let hand2Y = playerY + hand2.y;

		if (player.facing >= 0) {
			hand1X = playerX - hand1.x - 5;
			hand2X = playerX - hand2.x - 5;
		}

		ctx.drawImage(hand_1_image, hand1X, hand1Y); //hand 1

		ctx.drawImage(hand_2_image, hand2X, hand2Y); //hand 2

		ctx.resetTransform();
	},

	draw: function (player) {
		ctx.beginPath();

		let radian = player.facing + 89.67;

		let gun_sprite = ak_47_sprite;

		let posX;
		let posY;

		let rotationCenterX;
		let rotationCenterY;

		let image = {
			width: 0,
			height: 0
		};

		switch (player.holding) {
			case "ak_47": //gun sprite 35 x 15
				image = {width: 35, height: 15};
				posX = -10;
				posY = -3;

				rotationCenterX = 10;
				rotationCenterY = 5;

				Bullet.spawnX = 35 * Math.cos(radian * Math.PI / 180);
				Bullet.spawnY = 35 * Math.sin(radian * Math.PI / 180);

				gun_sprite = ak_47_sprite;

				if (player.facing >= 0) {
					gun_sprite = ak_47_sprite_reversed;

					rotationCenterX = 35 - 10;
					rotationCenterY = 5;

					radian += 180;

					posX = -26;
					posY = -4;
				}
				break;
		}

		ctx.translate((player.x + View.x + posX + rotationCenterX), (player.y + View.y + posY + rotationCenterY));

		ctx.rotate(radian * Math.PI / 180);
		ctx.translate(-(player.x + View.x + posX + rotationCenterX), -(player.y + View.y + posY + rotationCenterY));

		ctx.drawImage(gun_sprite, player.x + View.x + posX, player.y + View.y + posY);

		ctx.resetTransform();

		if (player.weilding) {
			this.drawHands(
			player,
			{
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