/* script.js */
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Resize canvas to fit window
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// Simple moving square
let x = 0, y = 0, dx = 2, dy = 3;
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#0f0';
  ctx.fillRect(x, y, 50, 50);

  x += dx; y += dy;
  if (x < 0 || x + 50 > canvas.width) dx = -dx;
  if (y < 0 || y + 50 > canvas.height) dy = -dy;

  requestAnimationFrame(update);
}
update();
