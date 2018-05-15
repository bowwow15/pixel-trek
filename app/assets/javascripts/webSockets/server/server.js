var Server = {
	players: [],

	addPlayer: function (x, y, state, uuid) {
		if (uuid != Player.uuid) { //makes sure it's a server player, and not your own player
			ServerPlayer.all.push({
				x: x,
				y: y,
				state: state,
				facing: 1,
				uuid: uuid
			});
		}

		alert("player joined");
	},
};