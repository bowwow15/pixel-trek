var Particle = {
	frames: 6,

	array: [],

	blood: function (x, y) {
		this.array.push({
			type: blood_hit_sprite,
			x: x,
			y: y,

			frame: 0
		});
	},

	drawAll: function () {
		this.array.forEach(function (element, index) {
			Sprite.draw(element.type, element.frame, 20, 20, element.x + View.x, element.y + View.y, 20, 20, Particle.frames);
		});
	}
};