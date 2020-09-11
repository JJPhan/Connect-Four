// // Holds collections of the asteroids, bullets, and your ship.
// //     Game.prototype.step method calls Game.prototype.move on all the objects, and Game.prototype.checkCollisions checks for colliding objects.
// //         Game.prototype.draw(ctx) draws the game.
// // Keeps track of dimensions of the space; wraps objects around when they drift off the screen.


// const canvas = document.getElementById('game-canvas');
// const board = canvas.getContext('2d')

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;



// let c = canvas.getContext('2d');


// // draw a rectangle
// c.fillStyle = 'rgba(255, 0, 0, 0.5)'; 
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(200, 125, 0, 0.5)'; 
// c.fillRect(100, 250, 100, 100);
// c.fillStyle = 'rgba(125, 250, 333, 0.5)'; 
// c.fillRect(600, 500, 100, 100);

// // draw a line
// c.beginPath(); 
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "blue"
// c.lineTo(300, 250);
// c.strokeStyle = "red"
// c.stroke();

// // Arc / Circle
// // c.arc(x: Int, y: Int, r: Int, startAngle: Float
// //  endAngle: Float, drawCounterClockwise: Bool (false))


// function Circle(x, y, dx, dy, radius) {
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.radius = radius

//     this.draw = function() {
//         c.beginPath();
//         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
//         c.strokeStyle = 'green';
//         c.stroke();
//     }

//     this.update = function() {
//         if (this.x + this.radius > innerWidth ||
//             this.x - this.radius < 0) {
//             this.dx = -this.dx
//         }
        
//         if (this.y + this.radius > innerHeight || y - this.radius < 0) {
//             this.dy = -this.dy
//         }

//         this.x += this.dx
//         this.y += this.dy
//         this.draw();

//     }
// }

// var circle = new Circle(200, 200, 3, 3, 30)

// console.log("test")
// let x = 300;
// let dx = 10;
// let y = 450;
// let dy = 10;
// let radius = 100; 
// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight);

//     c.beginPath();
//     c.arc(x, y, radius, 0, Math.PI * 2, false)
//     c.strokeStyle = 'green';
//     c.stroke();

//     if (x + radius > innerWidth || x - radius < 0) {
//         dx = -dx
//     } 
//     x += dx

//     if (y + radius > innerHeight || y - radius < 0 ){
//         dy = -dy
//     }
//     y += dy
// }
// animate();