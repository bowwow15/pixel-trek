var Game = {
	step: 30,
	spriteStep: 12,

	load: function () {
		window.setInterval(function(){
			Step.step();
		}, 1000/Game.step);

		window.setInterval(function(){
			Step.spriteStep();
		}, 1000/Game.spriteStep);

		document.getElementById("loadingScreen").style.display = "none"; //hides loading screen

		renderFrame();
	},

	mouseMove: function (e) {
		MouseCoordinates.x = e.clientX;
    	MouseCoordinates.y = e.clientY;

    	MouseCoordinates.calculatePlayerFacing();
	}
};	