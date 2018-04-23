//images laoded in images.js

var Cursor = {
	clicking: false,

	draw: function (x, y) {
		x = Math.round(x);
		y = Math.round(y);

		let cursor_image_rendered = cursor_image;

		if (this.clicking) {
			cursor_image_rendered = click_image;
		}

		ctx.beginPath();
		ctx.drawImage(cursor_image_rendered, x - 8, y - 8); // - 7 centers cursor
	}
};