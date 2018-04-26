var cursor_image = new Image();
cursor_image.src = "images/cursor.png";

var click_image = new Image();
click_image.src = "images/click.png";

var bullet_image = new Image();
bullet_image.src = "images/sprites/bullet.png";

//GUNS

var ak_47_sprite = new Image();
ak_47_sprite.src = "images/sprites/weapons/ak_47.png";
var ak_47_sprite_reversed = new Image();
ak_47_sprite_reversed.src = "images/sprites/weapons/ak_47_reversed.png";

//END GUNS

var blood_hit_sprite = new Image();
blood_hit_sprite.src = "images/sprites/blood_hit.png";

var muzzle_flash_sprite = new Image();
muzzle_flash_sprite.src = "images/sprites/muzzle_flash.png";

var player_run = new Image();
player_run.src = "images/sprites/player_run.png";
var player_run_reversed = new Image();
player_run_reversed.src = "images/sprites/player_run_reversed.png";

var player_run_weild = new Image();
player_run_weild.src = "images/sprites/player_run_weild.png";
var player_run_weild_reversed = new Image();
player_run_weild_reversed.src = "images/sprites/player_run_weild_reversed.png";

var player_idle = new Image();
player_idle.src = "images/sprites/player_idle.png";
var player_idle_reversed = new Image();
player_idle_reversed.src = "images/sprites/player_idle_reversed.png";

var player_idle_weild = new Image();
player_idle_weild.src = "images/sprites/player_idle_weild.png";
var player_idle_weild_reversed = new Image();
player_idle_weild_reversed.src = "images/sprites/player_idle_weild_reversed.png";

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

var dirt_tile = new Image();
dirt_tile.src = "images/sprites/dirt.png";

var grass_tile = new Image();

grass_tile.addEventListener("load", function(e) {
	window.setTimeout(function () {
		Game.load();
	}, 500);
});

grass_tile.src = "images/sprites/grass.jpg";