var player_run = new Image();
player_run.src = "images/sprites/player_run.png";
var player_run_reversed = new Image();
player_run_reversed.src = "images/sprites/player_run_reversed.png";

var player_idle = new Image();
player_idle.src = "images/sprites/player_idle.png";
var player_idle_reversed = new Image();
player_idle_reversed.src = "images/sprites/player_idle_reversed.png";

var player_mid_air = new Image();
player_mid_air.src = "images/sprites/player_mid_air.png";
var player_mid_air_reversed = new Image();
player_mid_air_reversed.src = "images/sprites/player_mid_air_reversed.png";

var player_jump = new Image();
player_jump.src = "images/sprites/player_jump.png";
var player_jump_reversed = new Image();
player_jump_reversed.src = "images/sprites/player_jump_reversed.png";

var player_landing = new Image();
player_landing.src = "images/sprites/player_landing.png";
var player_landing_reversed = new Image();
player_landing_reversed.src = "images/sprites/player_landing_reversed.png";

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