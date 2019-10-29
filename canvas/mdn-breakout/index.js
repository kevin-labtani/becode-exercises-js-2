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

// brick variables
let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
// offset so they aren't drawn directly from the top left corner
let brickOffsetTop = 30;
let brickOffsetLeft = 30;

// count score
let score = 0;

// count lives
let lives = 3;

// brick array
let bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

// handle keyboard imput
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

// handle mouse input
const mouseMoveHandler = e => {
  // clientX = the horizontal coordinate in the viewport of the mouse
  // canvas.offsetLeft = left edge of the viewport
  let relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
};

// handle collision
// b variable  stores the brick object in every loop of the collision detection
const collisionDetection = () => {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      let b = bricks[c][r];
      if (b.status == 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
          score++;

          // win condition
          if (score == brickColumnCount * brickRowCount) {
            alert("You've won, congratulations!");
            document.location.reload();
            clearInterval(interval);
          }
        }
      }
    }
  }
};

// draw the score
const drawScore = () => {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  // parameters: text itself, x coord, y coord
  ctx.fillText("Score: " + score, 8, 20);
};

// draw lives
const drawLives = () => {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
};

// listen for controls
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
document.addEventListener("mousemove", mouseMoveHandler);

// paint the ball
const drawBall = () => {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
};

// paint the paddle
const drawPaddle = () => {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
};

// paint the bricks
const drawBricks = () => {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      //draw brick if its status is 1
      if (bricks[c][r].status == 1) {
        let brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        let brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
};

const draw = () => {
  // clear canvas before each frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();

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
      lives--;
      if (!lives) {
        alert("GAME OVER");
        document.location.reload();
        clearInterval(interval);
      } else {
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 2;
        dy = -2;
        paddleX = (canvas.width - paddleWidth) / 2;
      }
      N;
    }
  }

  // make the paddle move
  // inner if statement to prevent it form going offscreen
  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  // make the ball move
  x += dx;
  y += dy;
};

let interval = setInterval(draw, 10);
