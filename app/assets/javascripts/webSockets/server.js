var Server = {
	players: [],

	addPlayer: function (x, y, uuid) {
		if (uuid != Player.uuid) { //makes sure it's a server player, and not your own player
			this.players.push({
				x: x,
				y: y,
				uuid: uuid
			});
		}
	}
};