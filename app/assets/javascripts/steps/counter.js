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

window.setInterval(function(){
	Step.step();
}, 1000/Game.step);

window.setInterval(function(){
	Step.spriteStep();
}, 1000/Game.spriteStep);