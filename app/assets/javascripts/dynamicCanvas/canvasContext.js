document.onload = function () {
	Context.create("canvas");

	window.onResize(function () {
		resizeCanvas();
	});
};