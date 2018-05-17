var Server = {
	addPlayer: function (x, y, state, uuid) {
		if (uuid != Player.uuid && Player.uuid != null) { //makes sure it's a server player, and not your own player
			ServerPlayer.all.push({
				x: x,
				y: y,
				state: state,
				facing: 1,
				currentFrame: 0,
				frames: 8,
				uuid: uuid
			});
		}
	},

	removePlayer: function (uuid) {
		let playerToRemove = ServerPlayer.all.map(function(e) { return e.uuid; }).indexOf(uuid);
		ServerPlayer.all.splice(playerToRemove, 1); //deletes player
	},

	movePlayer: function (uuid, x, y) {
		let playerToMove = ServerPlayer.all.map(function(e) { return e.uuid; }).indexOf(uuid);

		if (ServerPlayer.all.length > 0) {
			ServerPlayer.all[playerToMove].x += x;
			ServerPlayer.all[playerToMove].y += y;

			ServerPlayer.all[playerToMove].state = "running";

			ServerPlayer.spriteStep(playerToMove);
		}
	}
};