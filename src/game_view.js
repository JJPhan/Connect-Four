// Stores a Game instance.
// Stores a canvas context to draw the game into.
// Installs key listeners to move the ship and fire bullets.
// Installs a timer to call Game.prototype.step.


const canvas = document.getElementById('game-canvas');
const board = canvas.getContext('2d')
let c = canvas.getContext('2d')

canvas.height = 500
canvas.width = 500

// canvas.addEventListener("mousedown", dropChip, false)
// function dropChip(event) {}
    
canvas.addEventListener("mousedown", dropChip, false)

function dropChip() {

    let y = 35;
    let dy = 5;
    let radius = 30; 

    
    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, 500, 500);


        c.beginPath();
        c.arc(200, y, radius, 0, Math.PI * 2, false)
        c.fillStyle = 'green';
        c.fill();
        c.lineWidth = 5;
        c.strokeStyle = 'black';
        c.stroke();
        
        // while (y + radius < 500) {
        //     y += dy
        // }
        // while (y + radius < 500 )
        if (y + radius < 500 ) {
             y += dy } 
        
        // y += dy

    }
    
    animate()

}

dropChip();

// this.drop = function() {
//     if (x + 30)
// }



