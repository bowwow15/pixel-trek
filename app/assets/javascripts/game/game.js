var Game = {
	step: 30,
	spriteStep: 12,

	mouseMove: function (e) {
		MouseCoordinates.x = e.clientX;
    	MouseCoordinates.y = e.clientY;

    	MouseCoordinates.calculatePlayerFacing();
	}
};	