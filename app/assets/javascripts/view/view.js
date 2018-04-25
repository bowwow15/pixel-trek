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

	shakeUp: function () {
		this.shakeY = 2;
		this.y -= this.shakeY;
	},

	shakeDown: function () {
		this.shakeY = 4;
		this.y += this.shakeY;

		GameMath.queueEvent(View.reset, Date.now() + 30, null);
	},

	shake: function () {
		View.shakeUp();
		GameMath.queueEvent(View.shakeDown, Date.now() + 30, null);
	},

	reset: function () {
		View.x += View.shakeX;
		View.y += View.shakeY;
	}
};