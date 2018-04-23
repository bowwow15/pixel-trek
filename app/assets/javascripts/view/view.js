var View = {
	x: Math.round(canvas.width / 2),
	y: Math.round(canvas.height / 2),
	margin: 50, //margin before game detects edge

	calculate: function () {
		return {
			x: Player.x - this.x,
			y: Player.y - this.y
		};
	},

	move: function (x, y) {
		this.x -= x;
		this.y -= y;
	}
};