var Hud = {
	visible: false,

	slot: [{
		item: null
	}, {
		item: null
	}, {
		item: null
	}, {
		item: null
	}, {
		item: null
	}, {
		item: null
	}, {
		item: null
	}, {
		item: null
	}],

	boxMargin: 0,

	draw: function () {
		var hudCanvas = document.getElementById('hud');

		if (Player.dead && Player.timeOfDeath + 1000 < Date.now()) {
			hudctx.fillStyle = 'black';

			hudctx.beginPath();
			hudctx.rect(0, 0, hudCanvas.width, hudCanvas.height);
			hudctx.fill();

			hudctx.textAlign = 'center';
			hudctx.font = '50px Courier';
			hudctx.fillStyle = 'red';

			hudctx.fillText("YOU DIED", hudCanvas.width / 2, hudCanvas.height / 2);
		}
	},

	toggle: function () {
		if (this.visible) { this.visible = !this.visible }
		else {
			this.visible = !this.visible;
		}

		resizeCanvas();
	}
};