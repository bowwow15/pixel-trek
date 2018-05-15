var ServerWeapons = {
	newBullet: function (type, x, y, radian) {
		App.game.newBullet({
			type: type,
			x: x,
			y: y,
			radian: radian
		});
	},

	muzzleFlash: function (spawnX, spawnY, radian) {
		App.game.muzzleFlash({
			spawnX: spawnX,
			spawnY: spawnY,
			radian: radian
		});
	},

	drawMuzzleFlash: function (spawnX, spawnY, radian, uuid) {
		let fixedToPlayer = false;

		if (uuid == Player.uuid) { // if the uuid is your own player, muzzle flash is fixed to player
			fixedToPlayer = true;

			spawnX -= Player.x;
			spawnY -= Player.y;
		} else {
			fixedToPlayer = false;
		}

		Particle.muzzleFlash(spawnX, spawnY, radian, fixedToPlayer);
	}
};