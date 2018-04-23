var Step = {
	spriteStep: function () {
		Sprite.nextFrame();
	},

	step: function () {
		Movement.listen();

		Player.drawJumpAnimations();

		Map.drawAll();
	}
};