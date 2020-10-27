// import { validColumn, selectColumn } from './board.js'
// const Board = require('./board')
// import Board from './board'

const canvas = document.getElementById('game-canvas');
const c = canvas.getContext('2d')

const board = document.getElementById('game-chip');
const b = board.getContext('2d')

const board_dv1 = document.getElementById("column1")
const board_dv2 = document.getElementById("column2")
const board_dv3 = document.getElementById("column3")
const board_dv4 = document.getElementById("column4")
const board_dv5 = document.getElementById("column5")
const board_dv6 = document.getElementById("column6")
const board_dv7 = document.getElementById("column7")

const columns = document.querySelectorAll("[class='column']")

canvas.height = 650
canvas.width = 700
// c.fillStyle = "blue";
// c.fillRect(0, 0, canvas.width, canvas.height);


board.height = 650
board.width = 700

columns.forEach((column, idx) => column.addEventListener("click", function(){dropChip(idx)}, false))

// how will i get the players token inside...?
// need a function that will
    // on click 
        // checks for a valid column
        // select the column / marking the spot
        // animate => drop the chip


// megafunction(idx, this.Player.token) {

// }


function dropChip(idx) {
    let x = 50 + (idx * 100)
    let y = 50;
    let dy = 20;
    let radius = 30; 

    function animate() {
        for (let yVal = 70; yVal < 650; yVal += 100) {
          for (let xVal = 50; xVal < 700; xVal += 100) {
            c.beginPath();
            c.arc(xVal, yVal, 30, Math.PI * 2, false);
            c.fillStyle = "transparent";
            c.fill();
            c.lineWidth = 5;
            c.strokeStyle = "black";
            c.stroke();
          }
        }


      requestAnimationFrame(animate);
      
      b.clearRect(x - 50, 0, 100, 650);
      // (0, 0, 700, 650)
      b.beginPath();
      b.arc(x, y, radius, 0, Math.PI * 2, false);
      b.fillStyle = "lightgreen";
      b.fill();
      b.lineWidth = 5;
      b.strokeStyle = "black";
      b.stroke();
      
      if (y + radius < 600) {
        y += dy;
      }

    } 
    animate()
}



