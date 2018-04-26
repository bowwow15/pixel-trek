var View = {
	x: Math.round(canvas.width / 2),
	y: Math.round(canvas.height / 2),
	margin: 50, //margin before game detects edge

	shakeX: 0,
	shakeY: 0,
	shakeCounter: 0,

	hud: false,

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

	center: function () {
		View.x = Math.round(canvas.width / 2) - Player.x;
		View.y = Math.round(canvas.height / 2) - Player.y;
	},

	shakeUp: function (radian) {
		this.shakeX = 2 * Math.round(Math.cos((radian) * Math.PI / 180));
		this.shakeY = 2 * Math.round(Math.sin((radian) * Math.PI / 180));
		this.y -= this.shakeY;
		this.x -= this.shakeX;
	},

	shakeDown: function () {
		this.shakeY = 4;
		this.y += this.shakeY;

		GameMath.queueEvent(View.reset, Date.now() + 30, null);
	},

	shake: function (radian) {
		View.shakeUp(radian);
		GameMath.queueEvent(View.shakeDown, Date.now() + 30, null);
	},

	reset: function () {
		View.x += View.shakeX;
		View.y += View.shakeY;
	}
};