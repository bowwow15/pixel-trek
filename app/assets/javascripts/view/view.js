var View = {
	x: Math.round(canvas.width / 2),
	y: Math.round(canvas.height / 2),
	margin: 50, //margin before game detects edge

	shakeX: 0,
	shakeY: 0,
	shakeCounter: 0,

	calculate: function () {
		return {
			x: Player.x - this.x,
			y: Player.y - this.y
		};
	},

	move: function (x, y) {
		this.x -= x;
		this.y -= y;
	},

	shake: function () {
		this.shakeCounter += 1;

		this.shakeX = 0;

		if (this.shakeCounter <= 1) {
			this.shakeY = 1;
		} else {
			this.shakeY = -2;
		}

		this.x += this.shakeX;
		this.y += this.shakeY; // -5 to 5...

		if (this.shakeCounter <= 1) {
			GameMath.queueEvent(View.shake, Date.now() + 25);
			this.shakeCounter = 0;
		} else {
			GameMath.queueEvent(View.reset, Date.now() + 50);
			this.shakeCounter = 0;
		}
	},

	reset: function () {
		View.x -= View.shakeX;
		View.y -= View.shakeY;
	}
};