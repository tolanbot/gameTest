// const canvas = document.getElementById('gameCanvas');
// const ctx = canvas.getContext('2d');

// let boxX = 50;
// let boxY = 50;
// let boxSize = 50;
// let speed = 2;

// function updateGame() {
//     // Update the position of the box
//     boxX += speed;
//     if (boxX + boxSize > canvas.width || boxX < 0) {
//         speed *= -1;
//     }
// }

// function drawGame() {
//     // Clear the canvas
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
    
//     // Draw the box
//     ctx.fillStyle = 'blue';
//     ctx.fillRect(boxX, boxY, boxSize, boxSize);

//     // Call updateGame to change the game state
//     updateGame();

//     // Request to draw the next frame
//     requestAnimationFrame(drawGame);
// }

// canvas.addEventListener('click', function(event) {
//     const x = event.pageX - canvas.offsetLeft;
//     const y = event.pageY - canvas.offsetTop;
//     if (x > boxX && x < boxX + boxSize && y > boxY && y < boxY + boxSize) {
//         alert('Box clicked!');
//     }
// });

// // Start the game loop
// drawGame();

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

    // Optional: Keep the box within the canvas boundaries
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
