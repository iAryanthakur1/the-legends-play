const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let car = {
  x: 350,
  y: 500,
  width: 100,
  height: 50,
  color: "red",
  speed: 5
};

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") car.x -= car.speed;
  if (e.key === "ArrowRight") car.x += car.speed;
  if (e.key === "ArrowUp") car.y -= car.speed;
  if (e.key === "ArrowDown") car.y += car.speed;
});

function drawCar() {
  ctx.fillStyle = car.color;
  ctx.fillRect(car.x, car.y, car.width, car.height);
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCar();
  requestAnimationFrame(gameLoop);
}

gameLoop();
