// grab a reference to the canvas
// ctx stores the 2D rendering context
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// coord
let x = canvas.width / 2;
let y = canvas.height - 30;
// change coord val to make it move
let dx = 2;
let dy = -2;

let drawBall = () => {
  // paint the ball
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
};

let draw = () => {
  // clear canvas before each frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall()
  x += dx;
  y += dy;
};

setInterval(draw, 10);
