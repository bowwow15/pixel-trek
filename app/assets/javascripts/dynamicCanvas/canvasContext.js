document.onload = function () {
	Context.create("canvas");

	resizeCanvas();

	window.onResize(function () {
		resizeCanvas();
	});
};