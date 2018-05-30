var Health = {
	bar_width: 150,
	bar_height: 10,

	draw: function () {
		healthToDecimal = Player.health / 100;

		hudctx.beginPath();
		//draw container box
		hudctx.strokeStyle = 'white';
		hudctx.rect(10, 10, this.bar_width, this.bar_height);
		hudctx.stroke();

		//draw amount of health in red
		hudctx.fillStyle = 'red';

		hudctx.beginPath();
		hudctx.rect(10, 10, this.bar_width*healthToDecimal, this.bar_height);
		hudctx.fill();

		//draw "health" inside health bar
		hudctx.fillStyle = 'white';
		hudctx.textAlign = 'center';
		hudctx.font = '12px Courier';

		hudctx.beginPath();
		hudctx.fillText("Health " + Player.health + "%", 10 + (this.bar_width / 2), 9 + (this.bar_height));
	}
};	