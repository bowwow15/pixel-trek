var ServerPlayer = {
	all: [],

	draw: function (player) {
		let x = ServerPlayer.all[player].x;
		let y = ServerPlayer.all[player].y;
		let uuid = ServerPlayer.all[player].uuid;

		let addedPlayer = ServerPlayer.all[player];

		if (uuid != Player.uuid) {
			Player.draw(ServerPlayer.all[player], true);
		}
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
			Server.addPlayer({
				x: 0,
				y: 0,
				state: "idle",
				weilding: false,
				holding: "hand",
				uuid: element,
			});
		});
	},

	sendAbsolutePosition: function () {
		App.game.resetPlayer({
			x: Player.x, 
			y: Player.y
		});
	},

	reset: function (player, uuid) {
		let playerToReset = ServerPlayer.all.map(function(e) { return e.uuid; }).indexOf(uuid);

		if (ServerPlayer.all[playerToReset]) {
			ServerPlayer.all[playerToReset].x = player.x;
			ServerPlayer.all[playerToReset].y = player.y;
		}
	}
};