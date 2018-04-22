var Context;

Context = {
  canvas: null,
  context: null,

  create: function (canvas_tag_id) {
    this.canvas = document.getElementById(canvas_tag_id); // Initializes canvas by element ID
    this.context = this.canvas.getContext('2d'); // 2 dimentional canvas
  }
};

Context.create("canvas");

var ctx;

ctx = Context.context; //important shorthand notice