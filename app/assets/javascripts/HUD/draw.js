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

	},

	toggle: function () {
		if (this.visible) { this.visible = !this.visible }
		else {
			this.visible = !this.visible;
		}

		resizeCanvas();
	}
};