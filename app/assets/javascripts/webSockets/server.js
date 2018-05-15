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

		alert("player joined");
	},

	movePlayer: function (uuid, coordinates) {

	},

	drawPlayers: function () {
		this.players.forEach(function (element, index) {
			let aug_x = element.x + View.x;
			let aug_y = element.y + View.y;

			ctx.beginPath();
			ctx.rect(aug_x, aug_y, 5, 5);
			ctx.fillStyle = "#FFFFFF";

			ctx.fill();
		});
	}
};