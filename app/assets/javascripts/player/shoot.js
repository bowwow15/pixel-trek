var Bullet = {
	array: [],

	spawnX: 0,
	spawnY: 4,

	spawnXwithoutPI: 0,
	spawnYwithoutPI: 4,

	new: function (type, x, y, radian, uuid = null) {
		let speed = 20.0; // pixels per step

		radian += 89.67;

		let x_velocity = speed * Math.cos((radian) * Math.PI / 180);
		let y_velocity = speed * Math.sin((radian) * Math.PI / 180);

		expiration = Date.now() + 1000; //milliceonds

		this.array.push({
			speed: speed,
			type: type,

			x: x,
			y: y,

			x_velocity: x_velocity,
			y_velocity: y_velocity,

			radian: radian,
			expiration: expiration,

			uuid: uuid
		});
	},

	drawAll: function () {
		this.array.forEach(function (element, index) {
			ctx.save();
			ctx.beginPath();

			ctx.translate((element.x + View.x), (element.y + View.y));
			ctx.rotate(element.radian * Math.PI / 180);
			ctx.translate(-(element.x + View.x), -(element.y + View.y));

			ctx.drawImage(bullet_image, element.x + View.x, element.y + View.y);

			ctx.restore();
		});
	},

	step: function () {
		this.array.forEach(function (element, index) {
			if (element.expiration > Date.now()) {
				Bullet.array[index].x += element.x_velocity;
				Bullet.array[index].y += element.y_velocity;
			} else {
				Bullet.array.splice(index, 1); //deletes bullet
			}

			//detect player collision
			let playerShot = Collision.check([element.x, element.y], [Player.x, Player.y], 5, 5, 35, 21);

			if (playerShot && element.uuid != Player.uuid) {
				App.game.addParticle({
					particle: "blood",
					x: element.x + 10,
					y: element.y + 10
				}); // adding bullet sprite dimensions to center the particle

				App.game.deleteBullet(index);
			}
		});
	},

	delete: function (index) {
		Bullet.array.splice(index, 1); //deletes bullet
	}
};