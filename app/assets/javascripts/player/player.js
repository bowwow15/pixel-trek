var Player = {
	uuid: null,

	x: 0,
	y: Ground.base,

	x_center: 0,
	y_center: 0,

	x_augmented: this.x,
	y_augmented: canvas.height + this.y,

	speed: 5,
	currentFrame: 0,
	frames: 8,

	facing: 1,
	state: "idle",

	health: 100,

	weilding: false,
	holding: "hand",

	draw: function (playerToDraw, server = false) {
		this.x_center = this.x - 11;
		this.y_center = this.y - 17;

		if (server) {
			x = playerToDraw.x;
			y = playerToDraw.y;

			state = playerToDraw.state;
			facing = playerToDraw.facing;
			currentFrame = playerToDraw.currentFrame;
			weilding = playerToDraw.weilding;
			holding = playerToDraw.holding;

			x = x - 11;
			y = y - 17;
		} else {
			x = this.x_center;
			y = this.y_center;

			state = this.state;
			facing = this.facing;
			weilding = this.weilding;
			holding = this.holding;
			currentFrame = this.currentFrame;
		}
 
		ctx.fillStyle = 'red';
		ctx.beginPath();

		let player_sprite;

		switch (state) {
			case "idle":
				this.frames = 0;

				if (facing < 0) {
					if (weilding) {
						player_sprite = player_idle_weild;
					} else {
						player_sprite = player_idle;
					}
				} else {
					if (weilding) {
						player_sprite = player_idle_weild_reversed;
					} else {
						player_sprite = player_idle_reversed;
					}
				}

				Sprite.draw(player_sprite, currentFrame, 21, 35, x + View.x, y + View.y, 21, 35, this.frames);
				break;

			case "running":
				this.frames = 8;

				if (facing < 0) {
					if (weilding) {
						player_sprite = player_run_weild;
					} else {
						player_sprite = player_run;
					}
				} else {
					if (weilding) {
						player_sprite = player_run_weild_reversed;
					} else {
						player_sprite = player_run_reversed;
					}
				}

				Sprite.draw(player_sprite, currentFrame, 23, 35, x + View.x, y + View.y, 23, 35, this.frames);
				break;

			case "jump":
				this.frames = 2;

				if (facing < 0) {
					player_sprite = player_jump;
				} else {
					player_sprite = player_jump_reversed;
				}

				Sprite.draw(player_sprite, currentFrame, 17, 34, x + View.x, y + View.y, 17, 34, this.frames);
				break;

			case "mid_air":
				this.frames = 2;

				if (facing < 0) {
					player_sprite = player_mid_air;
				} else {
					player_sprite = player_mid_air_reversed;
				}

				Sprite.draw(player_sprite, currentFrame, 20, 35, x + View.x, y + View.y, 20, 35, this.frames);
				break;

			case "landing":
				this.frames = 1;

				if (facing < 0) {
					player_sprite = player_landing;
				} else {
					player_sprite = player_landing_reversed;
				}

				Sprite.draw(player_sprite, currentFrame, 20, 35, x + View.x, y + View.y, 20, 35, this.frames);
				break;
		}

		Weapon.draw(playerToDraw);
	},

	move: function (x, y) {
		//calculate direction of player
		MouseCoordinates.calculatePlayerFacing();

		//check collision with map edges

		let collision = Collision.inverseCheck([this.x, this.y], [0, 0], 21, 33, canvas.width, canvas.height);

		if (!collision) {
			this.x += x;
			this.y += y;

			View.move(x, y);
		}

		if (!this.jumping) {
			this.state = "running";	
		}

		App.game.movePlayer({
			uuid: this.uuid,
			x: x,
			y: y,
			state: this.state,
			facing: this.facing,
			weilding: this.weilding,
			holding: this.holding
		});
	},

	yBeforeJump: 0,

	lastJump: 0,
	jumping: false,
	jumped: false,
	
	jumpYStart: 0,
	jumpY: 0,

	jumpHeight: 6,

	lastJumpPath: 0,
	jumpPath: 0,

	jumpVelocity: 0,

	jumpDirection: 1, //up

	gun: {
		clip: 20,
		bullets: 100
	},

	reloading: false,
	addBullets: function (amount) {
		if (amount < Player.gun.bullets) {
			Player.gun.clip += amount;
			Player.gun.bullets -= amount;
		} else {
			Player.gun.clip += Player.gun.bullets;
		}
	},

	reload: function () {
		if (Player.gun.clip <= 0) {
			Text.add(window.innerWidth / 2, window.innerHeight / 3, "Reloading...", "black", 15, Date.now() + 1400);

			Audio.startAudio(reload_audio);
			Player.reloading = true;
			GameMath.queueEvent(Player.addBullets, Date.now() + 1400, 20); //20 bullets reload, 2 seconds from now.
		}

		Player.reloading = false;
	},

	jump: function (velocity) {
		this.state = "jump";

		if (this.jumping === false) this.yBeforeJump = this.y;

		let jumpPos;

		this.jumpVelocity = velocity;

		if (this.jumping === false) {
			this.jumping = true;

			this.lastJump = GameMath.seconds();
		}
	},

	punch: function () {
		// loads punch animation...


	},

	checkMouseDown: function (alreadyShot = false) {
		if (Cursor.clicking) {
			Player.shoot(alreadyShot);
		} else {
			Audio.stopAudio(ar_audio);
		}
	},

	shoot: function (alreadyShot = false) {
		if (!Weapon.checkIfWeapon(Player.holding)) {
			Player.punch();
		} else {
			if (Player.gun.clip <= 0) {
				Audio.stopAudio(ar_audio);

				if (!Player.reloading) {
					//press r to reload
					Text.add(window.innerWidth / 2, window.innerHeight / 4, "Out of ammo. Press R to reload.", "red", 15, Date.now() + 1500);
				}
			} else {
				if (!alreadyShot) Audio.startAudio(ar_audio);

				Player.weilding = true;

				ServerWeapons.muzzleFlash(Player.x + Bullet.spawnX, Player.y + Bullet.spawnY, Player.facing);
				ServerWeapons.newBullet("white", Player.x + Bullet.spawnX, Player.y + Bullet.spawnY, Player.facing);

				View.shake(Player.facing + 89.67);

				Player.gun.clip -= 1;

				GameMath.queueEvent(Player.checkMouseDown, Date.now() + 100, true);
			}
		}
	},

	drawJumpAnimations: function () {
		let velocity = this.jumpVelocity;

		let jumpPos = GameMath.seconds() - this.lastJump;

		if (this.jumping === true) {
			this.lastJumpPath = this.jumpPath;
			this.jumpPath = Math.sin(jumpPos * velocity) * this.jumpHeight;

			if (this.jumpPath < this.lastJumpPath) {
				this.jumpDirection = 0; //down

				this.jumped = true;

				this.state = "mid_air";
			} else {
				this.jumpDirection = 1; //up

				if (this.jumped) {
					this.state = "landing";

					this.resetJump();
				}
			}

			this.y -= Math.round(this.jumpPath);
		}
	},

	resetJump: function () {
		this.jumping = false;
		this.jumped = false;
		this.currentJump = 0;
		this.jumpPath = 0;

		this.y = this.yBeforeJump;

		jumpKey = false;

		this.state = "idle";
	},

	stopMoving: function () {
		this.currentFrame = 0;
		this.state = "idle";

		App.game.stopMovingPlayer();
	}
};