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
		this.array.forEach(function (element, index) {
			if (Date.now() < element.timeout) { // if text has not timed out, draw.
				ctx.font = element.size + "px Courier";

				ctx.beginPath();

				ctx.fillStyle = element.color;
	    		ctx.textAlign = 'center';

				ctx.fillText(element.text, element.x, element.y);
			}
		});
	}	
};