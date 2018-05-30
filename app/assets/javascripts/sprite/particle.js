var Particle = {
	frames: 12,

	array: [],

	blood: function (x, y) {
		this.array.push({
			type: blood_hit_sprite,
			x: x - 10,
			y: y - 10,

			rotation: 0,

			fixedToPlayer: false,

			frame: 0
		});
	},

	muzzleFlash: function (x, y, rotation, fixedToPlayer = true) { //x and y are just to change already set value. sprite is fixed to player.
		rotation += 89.67;

		this.array.push({
			type: muzzle_flash_sprite,
			x: x,
			y: y + 1,

			rotation: rotation,

			fixedToPlayer: fixedToPlayer,

			frame: 0
		});
	},

	cartridgeEject: function (x, y) {
		this.array.push({
			type: cartridge_eject_sprite,
			x: x + Math.floor(Math.random() * (5 - 1)) - 3, // random spread
			y: y + 5,

			rotation: 0,

			fixedToPlayer: false,

			frame: 0
		});
	},

	corpse: function (x, y) {
		this.array.push({
			type: corpse_sprite,
			x: x,
			y: y + 5,

			rotation: 0,

			fixedToPlayer: false,

			frame: 0
		});
	},

	drawAll: function () {
		this.array.forEach(function (element, index) {
			let element_x_rendered = Math.round(element.x);
			let element_y_rendered = Math.round(element.y);

			if (element.fixedToPlayer) {
				element_x_rendered += Player.x;
				element_y_rendered += Player.y;
			}

			//sprite rotation
			ctx.translate((element_x_rendered + View.x), (element_y_rendered + View.y));
			ctx.rotate(element.rotation * Math.PI / 180);
			ctx.translate(-(element_x_rendered + View.x), -(element_y_rendered + View.y));

			element_x_rendered -= 10;
			element_y_rendered -= 10;

			Sprite.draw(element.type, element.frame, 20, 20, element_x_rendered + View.x, element_y_rendered + View.y, 20, 20, Particle.frames, element.rotation);

			ctx.resetTransform();
		});
	}
};