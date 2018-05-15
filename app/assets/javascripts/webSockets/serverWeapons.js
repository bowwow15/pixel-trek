var ServerWeapons = {
	newBullet: function (type, x, y, radian) {
		App.game.newBullet({
			type: type,
			x: x,
			y: y,
			radian: radian
		});
	}
};