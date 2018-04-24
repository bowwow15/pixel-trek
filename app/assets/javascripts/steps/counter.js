var Step = {
	spriteStep: function () {
		Sprite.nextFrame();
	},

	step: function () {
		Movement.listen();

		GameMath.queuedEvents();
	},

	smoothStep: function () {
		Bullet.step();
	}
};