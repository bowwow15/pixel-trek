var ServerPlayer = {
	all: [],

	draw: function (player) {
		let x = ServerPlayer.all[player].x;
		let y = ServerPlayer.all[player].y;
		let uuid = ServerPlayer.all[player].uuid;

		let addedPlayer = ServerPlayer.all[player];

		Player.draw(x, y, addedPlayer.state, addedPlayer.facing, addedPlayer.currentFrame, addedPlayer.weilding, true);
		// console.log(addedPlayer.currentFrame);
	},

	spriteStep: function (player) {
		ServerPlayer.all[player].currentFrame += 1;

		if (ServerPlayer.all[player].currentFrame >= ServerPlayer.all[player].frames) {
			ServerPlayer.all[player].currentFrame = 0;
		}
	},

	drawAll: function () {
		this.all.forEach(function (element, index) {
			ServerPlayer.draw(index);
		});
	},

	getAllPlayers: function (player_uuid) {
		player_uuid.forEach(function (element, index) {
			ServerPlayer.all.push({
				uuid: element
			});
		});
	}
};