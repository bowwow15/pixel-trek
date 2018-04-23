var Sprite = {
	draw: function (image, current_frame, dimension_x, dimension_y, destination_x, destination_y, scale_x, scale_y, frames = 8) {
		ctx.drawImage(image, current_frame * dimension_x, 0, dimension_x, dimension_y, destination_x, destination_y, scale_x, scale_y);
	},

	nextFrame: function () {
		 if (Player.currentFrame < Player.frames - 1) {
		 	Player.currentFrame += 1;
		 } else {
		 	Player.currentFrame = 0;
		 }
	}
};