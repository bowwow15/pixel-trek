//images laoded in images.js

var Cursor = {
	draw: function (x, y) {
		x = Math.round(x);
		y = Math.round(y);

		ctx.beginPath();
		ctx.drawImage(cursor_image, x - 8, y - 8); // - 7 centers cursor
	}
};