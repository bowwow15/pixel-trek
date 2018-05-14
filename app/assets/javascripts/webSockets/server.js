var Server = {
	players: [],

	movePlayer: function (uuid, coordinates) {

	},

	drawPlayers: function () {
		this.players.forEach(function (element, index) {
			ctx.beginPath();
			ctx.rect(element.x, element.y, 5, 5);
			ctx.fillStyle = "#FFFFFF";
			
			ctx.fill();
		});
	}
};