var MouseContext;

MouseContext = {
  canvas: null,
  context: null,

  create: function (canvas_tag_id) {
    this.canvas = document.getElementById(canvas_tag_id); // Initializes canvas by element ID
    this.context = this.canvas.getContext('2d'); // 2 dimentional canvas
  }
};

MouseContext.create("mouse");

var mousectx;

mousectx = MouseContext.context; //important shorthand notice


document.getElementById('mouse').oncontextmenu = function (e) {
    e.preventDefault();
}; //disable context menu