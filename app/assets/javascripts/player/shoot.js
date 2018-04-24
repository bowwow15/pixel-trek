var Bullet = {
	array: [],

	new: function (type, x, y, radian) {
		let speed = 15.0; // pixels per step

		radian += 90;

		let x_velocity = speed * Math.cos((radian) * Math.PI / 180);
		let y_velocity = speed * Math.sin((radian) * Math.PI / 180);

		expiration = 150; //steps

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
			Bullet.array[index].x += element.x_velocity;
			Bullet.array[index].y += element.y_velocity;
		});
	}
};