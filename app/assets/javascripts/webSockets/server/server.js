var Server = {
	addPlayer: function (player) {
		x = player.x;
		y = player.y;
		state = player.state;
		uuid = player.uuid;
		if (uuid != Player.uuid && Player.uuid != null) { //makes sure it's a server player, and not your own player
			ServerPlayer.all.push({
				x: x,
				y: y,
				state: state,
				facing: 1,
				weilding: false,
				holding: "hand",
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

	movePlayer: function (player) {
		uuid = player.uuid;
		x = player.x;
		y = player.y;
		state = player.state;
		facing = player.facing;
		weilding = player.weilding;
		holding = player.holding;

		if (uuid != Player.uuid) { // if the player is not you...
			let playerToMove = ServerPlayer.all.map(function(e) { return e.uuid; }).indexOf(uuid);

			if (ServerPlayer.all.length > 0) {
				ServerPlayer.all[playerToMove].x += x;
				ServerPlayer.all[playerToMove].y += y;

				ServerPlayer.all[playerToMove].frames = 8;
				ServerPlayer.all[playerToMove].state = state;

				ServerPlayer.all[playerToMove].facing = facing;

				ServerPlayer.all[playerToMove].weilding = weilding;
				ServerPlayer.all[playerToMove].holding = holding;

				if (player.state == "idle") {
					Step.spriteToggle(0, playerToMove);
					ServerPlayer.all[playerToMove].frames = 1;
				} else {
					Step.spriteToggle(1, playerToMove);
				}
			}
		}
	},

	stopMovingPlayer: function (uuid) {
		if (uuid != Player.uuid) {
			let playerToMove = ServerPlayer.all.map(function(e) { return e.uuid; }).indexOf(uuid);

			Step.spriteToggle(0, playerToMove);
			ServerPlayer.all[playerToMove].frames = 1;
			ServerPlayer.all[playerToMove].state = "idle";
		}
	},

	addParticle: function (particle, x, y) {
		switch (particle) {
			case "blood":
				Particle.blood(x, y);
				break;
		}
	}
};