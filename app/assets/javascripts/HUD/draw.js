var Hud = {
	width: canvas.width * 0.3,
	height: 47,

	visible: true,

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
		//draw initial container

		// hudctx.clearRect(0, 0, canvas.width, canvas.height);

		// hudctx.strokeStyle = '#000000';
		// hudctx.lineWidth = 2;

		// hudctx.beginPath();
		// hudctx.rect((canvas.width / 2) - (Hud.width / 2), canvas.height - Hud.height, Hud.width, Hud.height); // container for bottom inventory hudslots

		// hudctx.stroke();

		// draw grid squares

		var currentBoxDrawn = 0;
		var boxSize = this.width / (this.slot.length + (this.boxMargin * 2));

		hudctx.strokeStyle = '#FFFFFF';
		hudctx.lineWidth = 1;

		this.slot.forEach(function (element, index) {
			hudctx.beginPath();
			hudctx.rect((canvas.width / 2) - (Hud.width / 2) + (currentBoxDrawn * boxSize), canvas.height - Hud.height, boxSize, boxSize);
			hudctx.stroke();

			currentBoxDrawn += 1;
		});
	},

	toggle: function () {
		if (this.visible) { this.visible = !this.visible }
		else {
			this.visible = !this.visible;
		}

		resizeCanvas();
	}
};