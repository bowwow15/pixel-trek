var playerImage = new Image();
playerImage.src = "http://pngimg.com/uploads/donald_trump/donald_trump_PNG84.png";

var Player = {
	x: 10,
	y: Ground.base,

	x_augmented: this.x,
	y_augmented: canvas.height + this.y,

	speed: 5,
	currentFrame: 0,
	frames: 8,

	facing: 1,
	state: "idle",

	draw: function () {
		ctx.fillStyle = 'red';
		ctx.beginPath();

		let player_sprite;

		switch (this.state) {
			case "idle":
				this.frames = 1;

				if (this.facing == 1) {
					player_sprite = player_idle;
				} else {
					player_sprite = player_idle_reversed;
				}

				Sprite.draw(player_sprite, this.currentFrame, 21, 33, this.x, this.y, 21, 33, 0);
				break;

			case "running":
				this.frames = 8;

				if (this.facing == 1) {
					player_sprite = player_run;
				} else {
					player_sprite = player_run_reversed;
				}

				Sprite.draw(player_sprite, this.currentFrame, 21, 33, this.x, this.y, 21, 33, this.frames);
				break;

			case "jump":
				this.frames = 2;

				if (this.facing == 1) {
					player_sprite = player_jump;
				} else {
					player_sprite = player_jump_reversed;
				}

				Sprite.draw(player_sprite, this.currentFrame, 17, 34, this.x, this.y, 17, 34, this.frames);
				break;

			case "mid_air":
				this.frames = 2;

				if (this.facing == 1) {
					player_sprite = player_mid_air;
				} else {
					player_sprite = player_mid_air_reversed;
				}

				Sprite.draw(player_sprite, this.currentFrame, 20, 35, this.x, this.y, 20, 35, this.frames);
				break;

			case "landing":
				this.frames = 1;

				if (this.facing == 1) {
					player_sprite = player_landing;
				} else {
					player_sprite = player_landing_reversed;
				}

				Sprite.draw(player_sprite, this.currentFrame, 20, 35, this.x, this.y, 20, 35, this.frames);
				break;
		}
	},

	move: function (x, y) {

		//check collision with map edges

		let collision = Collision.inverseCheck([this.x, this.y], [0, 0], 21, 33, canvas.width, canvas.height);

		if (!collision) {
			this.x += x;
			this.y += y;
		}

		if (x < 0) {
			this.facing = 0;
		} if (x > 0) {
			this.facing = 1;
		}

		if (!this.jumping) {
			this.state = "running";	
		}
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
	}
};