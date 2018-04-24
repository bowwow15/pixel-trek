var Step = {
	spriteStep: function () {
		Sprite.nextFrame();
	},

	step: function () {
		Movement.listen();
	},

	smoothStep: function () {
		Bullet.step();
	}
};