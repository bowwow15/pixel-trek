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

		document.getElementById("loadingScreen").style.display = "none"; //hides loading screen

		renderFrame();
	},

	mouseMove: function (e) {
		MouseCoordinates.x = e.clientX;
    	MouseCoordinates.y = e.clientY;

    	MouseCoordinates.calculatePlayerFacing();
	}
};	