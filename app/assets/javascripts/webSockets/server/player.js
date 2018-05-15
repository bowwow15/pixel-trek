var ServerPlayer = {
	all: [],

	draw: function (player) {
		let x = ServerPlayer.all[player].x;
		let y = ServerPlayer.all[player].y;
		let uuid = ServerPlayer.all[player].uuid;

		let addedPlayer = ServerPlayer.all[player];

		Player.draw(x, y, addedPlayer.state, addedPlayer.facing, true);
	},

	drawAll: function () {
		this.all.forEach(function (element, index) {
			ServerPlayer.draw(index);
		});
	}
};