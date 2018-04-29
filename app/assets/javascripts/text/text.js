var Text = {
	array: [],

	add: function (x, y, text, color, size, timeout) {
		let textObject = {
			x: x,
			y: y,
			text: text,
			color: color,
			size: size,
			timeout: timeout
		};

		if (Text.array.indexOf(textObject) >= 0) {
			//text exists
		}

		this.array.push(textObject);
	},

	drawAll: function () {
		hudctx.clearRect(0, 0, hudCanvas.width, hudCanvas.height);

		this.array.forEach(function (element, index) {
			if (Date.now() < element.timeout) { // if text has not timed out, draw.
				hudctx.font = element.size + "px Courier";

				hudctx.beginPath();

				hudctx.fillStyle = element.color;
	    		hudctx.textAlign = 'center';

				hudctx.fillText(element.text, element.x, element.y);
			}
		});
	}	
};