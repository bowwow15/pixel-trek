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

player_landing_reversed.addEventListener("load", function(e) {
	window.setTimeout(function () {
		Game.load();
	}, 500);
});

player_landing_reversed.src = "images/sprites/player_landing_reversed.png";