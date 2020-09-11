// const CurrentPlayer = require( './human_player' )

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
        // this.CurrentPlayer = new CurrentPlayer();
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


    
    selectColumn(column) {
        let matrix = this.board; 
        if (this.validColumn(column)) {
            for (let i = 5; i >= 0; i--) {
                if (matrix[i][column] === "empty") {
                    matrix[i][column] = "x" 
                    return }
                    // how should i get the canvas to change color to the players token?
                    // give a onChange to of the tiles on the matrix? 
                    // onChange on tile of matrix => creates a new object dropping to location
                    console.log("PASSED")
                }   
        } else {
            // alert("Invalid Column; Column Maxed")
            c
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
            for (let column = 0; column < 3; column++) {
                if (matrix[row][column] === matrix[row][column + 1] 
                    && matrix[row][column] === matrix[row][column + 2]
                    && matrix[row][column] === matrix[row][column + 3]) 
                    return true
                }
                return false
            }
        }
        
    verticalWin() {
        let matrix = this.board;
        for (let column = 0; column < 7; column++) {
            for (let row = 0; row < 2; row++) {
                if (matrix[row][column] === matrix[row + 1][column]
                    && matrix[row][column] === matrix[row + 2][column]
                    && matrix[row][column] === matrix[row + 3][column])
                    return true
                }
                return false
            }
        }
        
    leftDiagonalWin() {
        let matrix = this.board;
        for (let row = 0; row < 2; row++) {
            for (let column = 0; column < 3; column++) {
                if (matrix[row][column] === matrix[row + 1][column + 1]
                    && matrix[row][column] === matrix[row + 2][column + 2]
                    && matrix[row][column] === matrix[row + 3][column + 3])
                    
                    return true
                }
                return false
            }
        }
            
    rightDiagonalWin() {
        let matrix = this.board;
        for (let row = 0; row < 2; row++) {
            for (let column = 7; column > 4; column--) {
                if (matrix[row][column] === matrix[row - 1][column - 1]
                    && matrix[row][column] === matrix[row - 2][column - 2]
                    && matrix[row][column] === matrix[row - 3][column - 3])
                    
                    return true
                }
                return false
            }
        }
                
    wonGame() {
        ( this.horizontalWin() 
        || this.verticalWin()
        || this.leftDiagonalWin()
        || this.rightDiagonalWin()
        ) 
    }
                
    // game_over?
    // if none of the tiles are still "empty"
    // board is filled / the game is over
    
    // if this.win? || this.lose? 
    // the game is over
    
    gameOver() {
        let matrix = this.board
        
        matrix.forEach(row => {
            let hasEmpty = row.some(tile => tile === "empty")
            if (hasEmpty) return false
        })
        return true
    }
    

}

let b = new Board();
console.log(b)

let testValidB =[ b.validColumn(0), 
    b.validColumn(1), 
    b.validColumn(2), 
    b.validColumn(3), 
    b.validColumn(4), 
    b.validColumn(5), 
    b.validColumn(6) ]
console.log(testValidB)


// let testSelectC = [
//     b.selectColumn(0),
//     b.selectColumn(1),
//     b.selectColumn(2),
//     b.selectColumn(3),
//     b.selectColumn(4),
//     b.selectColumn(5),
//     b.selectColumn(6),
// ]
// console.log(b)

let testVertWin = [
    b.selectColumn(0),
    b.selectColumn(0),
    b.selectColumn(0),
    b.selectColumn(0)
]

console.log(b)
console.log(b.horizontalWin())


module.export = Board
