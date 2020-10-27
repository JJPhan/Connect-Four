import Player from "./player";
import Computer from "./computer";
import Board from "./board";

class Game {
    constructor(){
        this.board = new Board();
        this.computer = new Computer();
        this.player = new Player();
        this.currentPlayer = this.player
    }

    switchTurns() {
        if (this.currentPlayer === this.player) {
            this.currentPlayer = this.computer
        } else {
            this.currentPlayer = this.player
        }
    }

    play() {
        console.log(this.board);
    }
}

// test

console.log("");
console.log("new game and print board")
const g = new Game();
console.log(g.board);


console.log("");
console.log("select column and drop token")
g.board.selectColumn(0, g.currentPlayer.token);
console.log(` !~~~~~~~~~~test ${g.currentPlayer.token}`)
console.log(g.board);


console.log("")
console.log("check current player/ switch player/ drop token")
g.switchTurns();
console.log(` !~~~~~~~~~~test ${g.currentPlayer.token}`);
g.board.selectColumn(1, g.currentPlayer.token)
// console.log(g.currentPlayer);
// console.log(g.board);

// g.switchTurns();
// console.log(g.currentPlayer);

export default Game