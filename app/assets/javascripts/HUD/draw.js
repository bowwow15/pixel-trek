var Hud = {
	width: canvas.width * 0.7,
	height: 50,

	draw: function () {
		//draw grid squares...

		hudctx.clearRect(0, 0, canvas.width, canvas.height);

		hudctx.fillStyle = '#000000';

		hudctx.beginPath();
		hudctx.rect((canvas.width / 2) - (Hud.width / 2), canvas.height - Hud.height, Hud.width, Hud.height); // container for bottom inventory hudslots

		hudctx.stroke();
	}
};