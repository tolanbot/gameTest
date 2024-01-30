// const canvas = document.getElementById('gameCanvas');
// const ctx = canvas.getContext('2d');

// let boxX = 50;
// let boxY = 50;
// let boxSize = 50;
// let speed = 5;

// let keysPressed = {};

// function updateGame() {
//     if (keysPressed['ArrowUp']) boxY -= speed;
//     if (keysPressed['ArrowDown']) boxY += speed;
//     if (keysPressed['ArrowLeft']) boxX -= speed;
//     if (keysPressed['ArrowRight']) boxX += speed;

//     //Keep the box within the canvas boundaries
//     boxX = Math.max(0, Math.min(canvas.width - boxSize, boxX));
//     boxY = Math.max(0, Math.min(canvas.height - boxSize, boxY));
// }

// function drawGame() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.fillStyle = 'blue';
//     ctx.fillRect(boxX, boxY, boxSize, boxSize);
//     updateGame();
//     requestAnimationFrame(drawGame);
// }

// document.addEventListener('keydown', function(event) {
//     keysPressed[event.key] = true;
//     event.preventDefault();
// });

// document.addEventListener('keyup', function(event) {
//     keysPressed[event.key] = false;
// });

// drawGame();


//version 2

// const canvas = document.getElementById('gameCanvas');
// const ctx = canvas.getContext('2d');

// let boxX = 50;
// let boxY = 50;
// let boxSize = 50;
// let speed = 2;

// let keysPressed = {};

// function updateGame() {
//     if (keysPressed['ArrowUp']) boxY -= speed;
//     if (keysPressed['ArrowDown']) boxY += speed;
//     if (keysPressed['ArrowLeft']) boxX -= speed;
//     if (keysPressed['ArrowRight']) boxX += speed;

//     boxX = Math.max(0, Math.min(canvas.width - boxSize, boxX));
//     boxY = Math.max(0, Math.min(canvas.height - boxSize, boxY));
// }

// function drawGame() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.fillStyle = 'blue';
//     ctx.fillRect(boxX, boxY, boxSize, boxSize);
//     updateGame();
//     requestAnimationFrame(drawGame);
// }

// document.addEventListener('keydown', function(event) {
//     keysPressed[event.key] = true;
// });

// document.addEventListener('keyup', function(event) {
//     keysPressed[event.key] = false;
// });

// canvas.addEventListener('touchstart', function(event) {
//     const touch = event.touches[0];
//     const canvasRect = canvas.getBoundingClientRect();
//     const touchX = touch.clientX - canvasRect.left;
//     const touchY = touch.clientY - canvasRect.top;

//     boxX = touchX - boxSize / 2;
//     boxY = touchY - boxSize / 2;
// });

// drawGame();


//version 3

const canvas = document.getElementById('gameCanvas');
// canvas.width = window.innerWidth;
const ctx = canvas.getContext('2d');

let boxX = 50;
let boxY = 50;
let boxSize = 50;
let targetX = boxX;
let targetY = boxY;
let speed = 5;

let keysPressed = {};

function updateGame() {
    if (keysPressed['ArrowUp']) targetY -= speed;
    if (keysPressed['ArrowDown']) targetY += speed;
    if (keysPressed['ArrowLeft']) targetX -= speed;
    if (keysPressed['ArrowRight']) targetX += speed;

        boxX = Math.max(0, Math.min(canvas.width - boxSize, boxX));
    boxY = Math.max(0, Math.min(canvas.height - boxSize, boxY));

    // Move box towards the target
    if (boxX < targetX) boxX += Math.min(speed, targetX - boxX);
    if (boxX > targetX) boxX -= Math.min(speed, boxX - targetX);
    if (boxY < targetY) boxY += Math.min(speed, targetY - boxY);
    if (boxY > targetY) boxY -= Math.min(speed, boxY - targetY);
}

function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(boxX, boxY, boxSize, boxSize);
    updateGame();
    requestAnimationFrame(drawGame);
}

// document.addEventListener('keydown', function(event) {
//     keysPressed[event.key] = true;
// });
document.addEventListener('keydown', function(event) {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        event.preventDefault(); // Prevent scrolling when arrow keys are pressed
    }
    keysPressed[event.key] = true;
});


document.addEventListener('keyup', function(event) {
    keysPressed[event.key] = false;
});

// canvas.addEventListener('touchstart', function(event) {
//     const touch = event.touches[0];
//     const canvasRect = canvas.getBoundingClientRect();
//     targetX = touch.clientX - canvasRect.left - boxSize / 2;
//     targetY = touch.clientY - canvasRect.top - boxSize / 2;
//     event.preventDefault(); // Prevent default touch behavior (like scrolling)
// });

canvas.addEventListener('touchstart', function(event) {
    const touch = event.touches[0];
    const canvasRect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    targetX = (touch.clientX - canvasRect.left) * ratio - boxSize / 2;
    targetY = (touch.clientY - canvasRect.top) * ratio - boxSize / 2;
    event.preventDefault();
});


drawGame();
