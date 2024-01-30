const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let boxX = 50;
let boxY = 50;
let boxSize = 50;
let speed = 5;

let keysPressed = {};

function updateGame() {
    if (keysPressed['ArrowUp']) boxY -= speed;
    if (keysPressed['ArrowDown']) boxY += speed;
    if (keysPressed['ArrowLeft']) boxX -= speed;
    if (keysPressed['ArrowRight']) boxX += speed;

    //Keep the box within the canvas boundaries
    boxX = Math.max(0, Math.min(canvas.width - boxSize, boxX));
    boxY = Math.max(0, Math.min(canvas.height - boxSize, boxY));
}

function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(boxX, boxY, boxSize, boxSize);
    updateGame();
    requestAnimationFrame(drawGame);
}

document.addEventListener('keydown', function(event) {
    keysPressed[event.key] = true;
    event.preventDefault();
});

document.addEventListener('keyup', function(event) {
    keysPressed[event.key] = false;
});

drawGame();
