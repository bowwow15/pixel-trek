var View = {
	x: 0,
	y: 0,

	calculate: function () {
		return {
			x: Player.x - this.x,
			y: Player.y - this.y
		};
	}
};