var Particle = {
	frames: 6,
	currentFrame: 0,

	array: [],

	blood: function (x, y) {
		this.currentFrame = 0;
		
		this.array.push({
			type: blood_hit_sprite,
			x: x,
			y: y
		});
	},

	drawAll: function () {
		this.array.forEach(function (element, index) {
			Sprite.draw(element.type, Particle.currentFrame, 20, 20, element.x + View.x, element.y + View.y, 20, 20, Particle.frames);
		});
	}
};