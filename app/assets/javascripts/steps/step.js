var Step = {
	playingPlayerSprites: [],

	spriteStep: function () {
		Sprite.nextFrame();

		this.playingPlayerSprites.forEach(function (element, index) {
			ServerPlayer.spriteStep(element);
		});
	},

	spriteToggle: function (action = 1, player) { //1 = play, 0 = stop
		switch (action) {
			case 1:
				if (Step.playingPlayerSprites.indexOf(player) >= 0) {
					
				} else {
					this.playingPlayerSprites.push(player);
				}
				break;
			case 2:
				this.playingPlayerSprites.splice(Step.playingPlayerSprites.indexOf(player), 1); //deletes
				break;
		}
	},

	step: function () {
		Movement.listen();

		GameMath.queuedEvents();
	},

	smoothStep: function () {
		Bullet.step();
	}
};