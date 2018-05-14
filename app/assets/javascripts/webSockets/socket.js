var Socket = {
	movePlayer: function (x, y, uuid) {
		App.game.movePlayer({
			x: x,
			y: y,
			uuid: Player.uuid
		});
	}
};