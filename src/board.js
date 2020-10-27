const Player = require('./player' )
const Computer = require('./computer')

class Board {
    constructor() { 
        this.board = new Array(6);
        for (let i = 0; i < this.board.length; i++) {
          this.board[i] = new Array(7).fill("empty");
          // this.col0 = document.getElementById("column0")
          // this.col1 = document.getElementById("column1")
          // this.col2 = document.getElementById("column2")
          // this.col3 = document.getElementById("column3")
          // this.col4 = document.getElementById("column4")
          // this.col5 = document.getElementById("column5")
          // this.col6 = document.getElementById("column6")
        }
        this.Player = new Player();
        this.Computer = new Computer();
        // this.ComputerPlayer = new ComputerPlayer();
    }
    

    // checks to see if the given column has any space still free
    validColumn(column){
        let matrix = this.board;
        let matColumn
        // get an array of every spot in the column 
        for (let i = 5; i > 0; i--) {
             matColumn = 
                [ matrix[i][column], 
                matrix[i][column], 
                matrix[i][column],
                matrix[i][column],
                matrix[i][column], 
                matrix[i][column], 
                matrix[i][column] ]    

        }
        // checks to see if there is not any empty values in the column
        return (matColumn.some((ele) => ele === "empty"))
        
    }


    
    selectColumn(column, token) {
        let matrix = this.board; 
        if (this.validColumn(column)) {
            for (let i = 5; i >= 0; i--) {
                if (matrix[i][column] === "empty") {
                    // matrix[i][column] = this.Player.token
                    matrix[i][column] = token
                    return }
                    // how should i get the canvas to change color to the players token?
                    // give a onChange to of the tiles on the matrix? 
                    // onChange on tile of matrix => creates a new object dropping to location
                }   
        } else {
            // alert("Invalid Column; Column Maxed")
            console.log("invalid")
            return "INVALID"
        }
    }

    
    
    // win?
    // if the current player gets 4 connsecutive pieces aligned
    // (horizontally, 
    // vertically, 
    //diagonally)
    // then the current player wins
    

    horizontalWin() {
        let matrix = this.board
        for (let row = 0; row < matrix.length; row++) {
            for (let column = 0; column < 4; column++) {
// Why 4 vs 3...?

                if ( 
                    matrix[row][column] !== "empty"
                    && matrix[row][column] === matrix[row][column + 1] 
                    && matrix[row][column] === matrix[row][column + 2]
                    && matrix[row][column] === matrix[row][column + 3] ) {
                    return true } 
            }
        }
        
        return false
    }

// Why 6 & 3...
    verticalWin() {
        let matrix = this.board;
        for (let column = 0; column < 7; column++) {
            for (let row = 0; row < 3; row++) {
                if ( matrix[row][column] !== "empty"
                    && matrix[row][column] === matrix[row + 1][column]
                    && matrix[row][column] === matrix[row + 2][column]
                    && matrix[row][column] === matrix[row + 3][column]) {
                // console.log(row, column)
                return true }
            }
        }
        return false
    }
    
        
    leftDiagonalWin() {
        let matrix = this.board;
        for (let row = 0; row < 4; row++) {
            for (let column = 0; column < 4; column++) {
                if (matrix[row][column] !== "empty"
                    && matrix[row][column] === matrix[row + 1][column + 1]
                    && matrix[row][column] === matrix[row + 2][column + 2]
                    && matrix[row][column] === matrix[row + 3][column + 3]) {
                    return true }                 
            }
        }
        return false
    }
            
    rightDiagonalWin() {
        let matrix = this.board;
        for (let row = 0; row < 3; row++) {
            for (let column = 6; column > 2; column--) {
                if (matrix[row][column] !== "empty"
                    && matrix[row][column] === matrix[row + 1][column - 1]
                    && matrix[row][column] === matrix[row + 2][column - 2]
                    && matrix[row][column] === matrix[row + 3][column - 3]) {
                return true }
            }
        }

        return false
    }
                
    wonGame() {
        console.log("game won?")
        if ( this.horizontalWin() 
        || this.verticalWin()
        || this.leftDiagonalWin()
        || this.rightDiagonalWin()
        ) {return true}
    }
                
    // game_over?
    // if none of the tiles are still "empty"
    // board is filled / the game is over
    
    // if this.win? || this.lose? 
    // the game is over
    
    gameOver() {
        console.log("game over - no spaces left")
        let matrix = this.board
        
        matrix.forEach(row => {
            let hasEmpty = row.some(tile => tile === "empty")
            if (hasEmpty) return false
        })
        return true
    }

}

// module.exports = Board
export default Board

/////////// test //////////////

// console.log("test board")
// let b = new Board();
// console.log(b)

// let testValidB =[ b.validColumn(0), 
//     b.validColumn(1), 
//     b.validColumn(2), 
//     b.validColumn(3), 
//     b.validColumn(4), 
//     b.validColumn(5), 
//     b.validColumn(6) ]
// console.log(testValidB)


// console.log("horizontal test")
// let testSelectC = [
//     b.selectColumn(6, "x"),
//     b.selectColumn(5, "x"),
//     b.selectColumn(4, "x"),
//     b.selectColumn(3, "x")
// ]
// console.log(b)
// console.log(b.horizontalWin());

// console.log("vertical test")
// let testSelectC = [
//     b.selectColumn(6, "x"),
//     b.selectColumn(6, "x"),
//     b.selectColumn(6, "x"),
//     b.selectColumn(6, "x"),
// ]
// console.log(b)
// console.log(b.verticalWin());

// console.log("left diagonal test")
// let testLeftDWin = [
//         b.selectColumn(6, "x"),
//         b.selectColumn(5, "y"),
//         b.selectColumn(5, "x"),
//         b.selectColumn(4, "x"),
//         b.selectColumn(4, "y"),
//         b.selectColumn(4, "x"),
//         b.selectColumn(3, "y"),
//         b.selectColumn(3, "x"),
//         b.selectColumn(3, "y"),
//         b.selectColumn(3, "x"),

//     ]
// console.log(b)
// console.log(b.leftDiagonalWin());
    
// console.log("left diagonal test")
//     let testLeftWin = [
//         b.selectColumn(3, "y"),
//         b.selectColumn(2, "x"),
//         b.selectColumn(2, "y"),
//         b.selectColumn(1, "x"),
//         b.selectColumn(1, "x"),
//         b.selectColumn(1, "y"),
//         b.selectColumn(0, "x"),
//         b.selectColumn(0, "y"),
//         b.selectColumn(0, "x"),
//         b.selectColumn(0, "y") ]
// console.log(b)
// console.log(b.leftDiagonalWin());



// let testRightWin = [
//     b.selectColumn(0, "y"),
//     b.selectColumn(1, "x"),
//     b.selectColumn(1, "y"),
//     b.selectColumn(2, "x"),
//     b.selectColumn(2, "x"),
//     b.selectColumn(2, "y"),
//     b.selectColumn(3, "x"),
//     b.selectColumn(3, "y"),
//     b.selectColumn(3, "x"),
//     b.selectColumn(3, "y") ]
// console.log(b)
// console.log(b.rightDiagonalWin());


// let testRightWin = [
//     b.selectColumn(3, "y"),
//     b.selectColumn(4, "x"),
//     b.selectColumn(4, "y"),
//     b.selectColumn(5, "x"),
//     b.selectColumn(5, "x"),
//     b.selectColumn(5, "y"),
//     b.selectColumn(6, "x"),
//     b.selectColumn(6, "y"),
//     b.selectColumn(6, "x"),
//     b.selectColumn(6, "y") ]
// console.log(b)
// console.log(b.rightDiagonalWin());
    
// console.log(b.wonGame());



