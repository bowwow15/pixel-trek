var keyW;
var keyA;
var keyS;
var keyD;

var jumpKey = false; //spacebar

var Movement = {
	x: 0,
	y: 0,

	listen: function () {

		if (keyW) Movement.y = Player.speed * -1;
		if (keyA) Movement.x = Player.speed * -1;
		if (keyS) Movement.y = Player.speed;
		if (keyD) Movement.x = Player.speed;

		if (this.x != 0 || this.y != 0) {
			Player.move(this.x, this.y);
		}

		if (this.x == 0 && this.y == 0) {
      if (Player.state != "idle") {
			 Player.stopMoving();
      }
		}

		if (jumpKey) {
			// Player.jump(15);
      // nope, no jumping anymore/
		} else {
			// Player.resetJump();
		}

		//reset coordinate properties
		if (this.x != 0) this.x = 0;
		if (this.y != 0) this.y = 0;
	},

  reset: function () {
    keyW = false;
    keyA = false;
    keyS = false;
    keyD = false;
  }
}

Movement.reset(); //set's initial values

function onKeyDown(event) {
  var keyCode = event.keyCode;

  switch (keyCode) {
  	case 68: //d
      keyD = true;
      break;
    case 39: //right
      keyD = true;
      break;
    case 83: //s
      keyS = true;
      break;
    case 40: //down
      keyS = true;
      break;
    case 65: //a
      keyA = true;
      break;
    case 37: //left
      keyA = true;
      break;
    case 87: //w
      keyW = true;
      break;
    case 38: //up
      keyW = true;
      break;
    case 32:
      jumpKey = true;
      break;

    case 72: // H key (HUD)

      Hud.toggle(); //hides or shows heads up display

      break;

    case 82: // R key (RELOAD)
      Player.reload();
      break;

    case 77: // M key (MUSIC)
      Audio.startAudio(music_audio);
      break;
  }
}

function onKeyUp(event) {
  var keyCode = event.keyCode;

  switch (keyCode) {
  	case 68: //d
      keyD = false;
      break;
    case 39: //right
      keyD = false;
      break;
    case 83: //s
      keyS = false;
      break;
    case 40: //down
      keyS = false;
      break;
    case 65: //a
      keyA = false;
      break;
    case 37: //left
      keyA = false;
      break;
    case 87: //w
      keyW = false;
      break;
    case 38: //up
      keyW = false;
      break;
    case 32:
      //ignore jump key. (resets after function is called)
      break;
  }
}

window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);