
const canvas = document.getElementById('game-canvas');
const board = canvas.getContext('2d')
let c = canvas.getContext('2d')

canvas.height = 650
canvas.width = 750

    
canvas.addEventListener("mousedown", dropChip, false)

function dropChip() {

    let y = 50;
    let dy = 20;
    let radius = 30; 

    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, 750, 650);
        
        c.beginPath();
        c.arc(75, y, radius, 0, Math.PI * 2, false)
        c.fillStyle = 'green';
        c.fill();
        c.lineWidth = 5;
        c.strokeStyle = 'black';
        c.stroke();
        
            if (y + radius < 600 ) {
                y += dy } 


        for (let yVal = 50; yVal < 650; yVal += 100) {
            for (let xVal = 75; xVal < 750; xVal += 100) {
                c.beginPath();
                c.arc(xVal, yVal, 30, Math.PI * 2, false)
                c.fillStyle = 'transparent';
                c.fill();
                c.lineWidth = 5;
                c.strokeStyle = 'black';
                c.stroke();
            }
        }

    } 
    animate()
}




