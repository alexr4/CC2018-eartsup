var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

function setup(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");
}

function draw(){
  background(217);

  var x = width/4;
  var y = height/4;

  var scale = 0.5;

  var Ax = 100    * scale;
  var Ay = 0      * scale;
  var Bx =  50.00 * scale;
  var By =  86.60 * scale;
  var Cx = -49.99 * scale;
  var Cy =  86.60 * scale;
  var Dx = -100   * scale;
  var Dy =  1.22  * scale;
  var Ex = -50.00 * scale;
  var Ey = -86.60 * scale;
  var Fx = 49.999 * scale;
  var Fy = -86.60 * scale;

  strokeWeight(2);
  fill(255, 127);
  //row1
  beginShape(POINTS);
  vertex(Ax + x * 1, Ay + y * 1);
  vertex(Bx + x * 1, By + y * 1);
  vertex(Cx + x * 1, Cy + y * 1);
  vertex(Dx + x * 1, Dy + y * 1);
  vertex(Ex + x * 1, Ey + y * 1);
  vertex(Fx + x * 1, Fy + y * 1);
  endShape();

  beginShape(LINES);
  vertex(Ax + x * 2, Ay + y * 1);
  vertex(Bx + x * 2, By + y * 1);
  vertex(Cx + x * 2, Cy + y * 1);
  vertex(Dx + x * 2, Dy + y * 1);
  vertex(Ex + x * 2, Ey + y * 1);
  vertex(Fx + x * 2, Fy + y * 1);
  endShape();

  beginShape();
  vertex(Ax + x * 3, Ay + y * 1);
  vertex(Bx + x * 3, By + y * 1);
  vertex(Cx + x * 3, Cy + y * 1);
  vertex(Dx + x * 3, Dy + y * 1);
  vertex(Ex + x * 3, Ey + y * 1);
  vertex(Fx + x * 3, Fy + y * 1);
  endShape();

  //row2
  beginShape();
  vertex(Ax + x * 1, Ay + y * 2);
  vertex(Bx + x * 1, By + y * 2);
  vertex(Cx + x * 1, Cy + y * 2);
  vertex(Dx + x * 1, Dy + y * 2);
  vertex(Ex + x * 1, Ey + y * 2);
  vertex(Fx + x * 1, Fy + y * 2);
  endShape(CLOSE);

  beginShape(TRIANGLES);
  vertex(Ax + x * 2, Ay + y * 2);
  vertex(Bx + x * 2, By + y * 2);
  vertex(Cx + x * 2, Cy + y * 2);
  vertex(Dx + x * 2, Dy + y * 2);
  vertex(Ex + x * 2, Ey + y * 2);
  vertex(Fx + x * 2, Fy + y * 2);
  endShape();

  beginShape(TRIANGLE_STRIP);
  vertex(Ax + x * 3, Ay + y * 2);
  vertex(Bx + x * 3, By + y * 2);
  vertex(Cx + x * 3, Cy + y * 2);
  vertex(Dx + x * 3, Dy + y * 2);
  vertex(Ex + x * 3, Ey + y * 2);
  vertex(Fx + x * 3, Fy + y * 2);
  endShape();

  //row3
  beginShape(TRIANGLE_FAN);
  //center
  vertex(x * 1, y * 3);
  vertex(Ax + x * 1, Ay + y * 3);
  vertex(Bx + x * 1, By + y * 3);
  vertex(Cx + x * 1, Cy + y * 3);
  vertex(Dx + x * 1, Dy + y * 3);
  vertex(Ex + x * 1, Ey + y * 3);
  vertex(Fx + x * 1, Fy + y * 3);
  vertex(Ax + x * 1, Ay + y * 3);
  endShape();

  beginShape(QUADS);
  //quad1
  vertex(Ax + x * 2, Ay + y * 3);
  vertex(Bx + x * 2, By + y * 3);
  vertex(Cx + x * 2, Cy + y * 3);
  vertex(Dx + x * 2, Dy + y * 3);

  vertex(Dx + x * 2, Dy + y * 3);
  vertex(Ex + x * 2, Ey + y * 3);
  vertex(Fx + x * 2, Fy + y * 3);
  vertex(Ax + x * 2, Ay + y * 3);
  endShape();

  beginShape(QUAD_STRIP);
  vertex(Ax + x * 3, Ay + y * 3 + 20);
  vertex(Bx + x * 3, By + y * 3 + 20);
  vertex(Dx + x * 3, Dy + y * 3 + 20);
  vertex(Cx + x * 3, Cy + y * 3 + 20);

  vertex(Dx + x * 3, Dy + y * 3 - 20);
  vertex(Ex + x * 3, Ey + y * 3 - 20);
  vertex(Ax + x * 3, Ay + y * 3 - 20);
  vertex(Fx + x * 3, Fy + y * 3 - 20);
  endShape();
}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
