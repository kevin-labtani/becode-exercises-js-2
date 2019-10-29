// grab a reference to the canvas
// ctx stores the 2D rendering context
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// ball variables
// coord
let x = canvas.width / 2;
let y = canvas.height - 30;
// radius
const ballRadius = 10;

// change coord val to make it move
let dx = 2;
let dy = -2;

// paddle varialbes
let paddleHeight = 10;
let paddleWidth = 75;
// starting point
let paddleX = (canvas.width - paddleWidth) / 2;

// keyboard controls
let rightPressed = false;
let leftPressed = false;

const drawBall = () => {
  // paint the ball
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
};

const drawPaddle = () => {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
};

const draw = () => {
  // clear canvas before each frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();

  // make it bounce of left and right walls
  // ballRadius usedso the ball won't sink half-way into the wall before changing direction
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }

  // make it bounce of top and implement gameover
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    // check whether the center of the ball is between the left and right edges of the paddle
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
      // if it isn't, the ball git the bottom of the screen and it's gameover
    } else {
      alert("GAME OVER");
      // reload the current page
      document.location.reload();
      clearInterval(interval);
    }
  }

  // make the paddle move
  // inner if statement to prevent it form going offscreen
  if (rightPressed) {
    paddleX += 7;
    if (paddleX + paddleWidth > canvas.width) {
      paddleX = canvas.width - paddleWidth;
    }
  } else if (leftPressed) {
    paddleX -= 7;
    if (paddleX < 0) {
      paddleX = 0;
    }
  }

  // make the ball move
  x += dx;
  y += dy;
};

let interval = setInterval(draw, 10);

// handle imput
const keyDownHandler = e => {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
};

const keyUpHandler = e => {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
};

// listen for controls
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
