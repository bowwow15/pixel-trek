var Game = {
	step: 30,
	smoothStep: 60,
	spriteStep: 12,

	load: function () {
		window.setInterval(function(){
			Step.step();
		}, 1000/Game.step);

		window.setInterval(function(){
			Step.spriteStep();
		}, 1000/Game.spriteStep);

		window.setInterval(function(){
			Step.smoothStep();
		}, 1000/Game.smoothStep);

		//Tells server to check for game timeout every 10 seconds
		window.setInterval(function(){
			App.game.checkTimeout();
		}, 10000);

		//Resets player every 2 seconds
		ServerPlayer.sendAbsolutePosition();
		window.setInterval(function(){
			ServerPlayer.sendAbsolutePosition();
		}, 2000);

		document.getElementById("loadingScreen").style.display = "none"; //hides loading screen

		renderFrame();

		//default functions for testing...
		Player.holding = "ak_47";
		Player.weilding = true;
	},

	mouseMove: function (e) {
		if (!Player.dead) {
			MouseCoordinates.x = e.clientX;
	    	MouseCoordinates.y = e.clientY;

	    	MouseCoordinates.calculatePlayerFacing();

	    	App.game.movePlayer({
				uuid: Player.uuid,
				x: 0,
				y: 0,
				state: Player.state,
				facing: Player.facing,
				weilding: Player.weilding,
				holding: Player.holding
			});
	    }
	}
};	