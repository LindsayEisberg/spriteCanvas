(function() {
  var myCanvas = document.getElementById("my-canvas");
  var context = myCanvas.getContext("2d");
  var image = document.createElement('img');
  image.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/The_Horse_in_Motion.jpg/800px-The_Horse_in_Motion.jpg";
  image.onload = draw;

  var width = 187;
  var height = 119;
  var borderThickness = 8;

  var clipRegion = new Path2D();
  clipRegion.rect(50, 50, width, height);
  context.clip(clipRegion);

  var row = 0,
    col = 0;

  var fps = 15;
  var frameDuration = 1000 / fps;

  function draw() {
    col = col + 1;
    if (col > 3) {
      col = 0;
      row += 1;
    }
    if (col == 3 && row == 2) {
      col = 0;
      row = 0;
    }
    context.drawImage(image,
      36 - (width + borderThickness) * col,
      35 - (height + borderThickness) * row
    );
    setTimeout(draw, frameDuration);
  }
})();
