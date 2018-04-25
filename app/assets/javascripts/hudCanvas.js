var HudContext;

HudContext = {
  canvas: null,
  context: null,

  create: function (canvas_tag_id) {
    this.canvas = document.getElementById(canvas_tag_id); // Initializes canvas by element ID
    this.context = this.canvas.getContext('2d'); // 2 dimentional canvas
  }
};

HudContext.create("hud");

var ctx;

hudctx = HudContext.context; //important shorthand notice


document.getElementById('hud').oncontextmenu = function (e) {
    e.preventDefault();
}; //disable context menu