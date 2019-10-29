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

const ballRadius = 10;

const drawBall = () => {
  // paint the ball
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
};

const draw = () => {
  // clear canvas before each frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  // make it bounce of left and right walls
  // ballRadius usedso the ball won't sink half-way into the wall before changing direction
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }

  // make it bounce of top and bottom walls
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }
  // make the ball move
  x += dx;
  y += dy;
};

setInterval(draw, 10);
