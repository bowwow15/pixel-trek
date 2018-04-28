var Bullet = {
	array: [],

	spawnX: 0,
	spawnY: 4,

	spawnXwithoutPI: 0,
	spawnYwithoutPI: 4,

	checkMouseDown: function () {
		if (Cursor.clicking) {
			Player.shoot();
		}
	},

	new: function (type, x, y, radian) {
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
			expiration: expiration
		});

		Particle.muzzleFlash(0 + Bullet.spawnX, 0 + Bullet.spawnY, radian);
		View.shake(radian);

		GameMath.queueEvent(Bullet.checkMouseDown, Date.now() + 100, null);
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
		});
	}
};