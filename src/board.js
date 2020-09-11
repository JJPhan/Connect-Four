const CurrentPlayer = require( './human_player' )

class Board {
    constructor() { 
        this.board = new Array(6);
        for (let i = 0; i < this.board.length; i++) {
            this.board[i] = new Array(7).fill("empty")

            // this.col1 = document.getElementById("column1")
            // this.col2 = document.getElementById("column2")
            // this.col3 = document.getElementById("column3")
            // this.col4 = document.getElementById("column4")
            // this.col5 = document.getElementById("column5")
            // this.col6 = document.getElementById("column6")
            // this.col7 = document.getElementById("column7")
        }
        console.log(new CurrentPlayer())
        this.CurrentPlayer = new CurrentPlayer();
        this.ComputerPlayer = new ComputerPlayer();
    }
    

    // checks to see if the given column has any space still free
    validColumn(column){
        let matrix = this.board;
        let matColumn
        // get an array of every spot in the column 
        for (let i = 0; i > 0; i--) {
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
        matColumn.some((ele) => ele === "empty")
    }

        // const notEmpty = (!matColumn.some((ele) =>  ele === "empty"))
        // if (notEmpty) {
        //     alert("Invalid Column; Column Maxed")
        // } else if (matrix[i][column !== "empty"]) {
        //     matrix[i][column] = currentPlayer.token
        // }

    
    selectColumn(column) {
        let matrix = this.board; 
        if (this.validColumn(column)) {
            for (let i = 6; i < 0; i--) {
                if (matrix[i][column] === "empty") {
                    matrix[i][column] === CurrentPlayer.token }
                    // how should i get the canvas to change color to the players token?
                    // give a onChange to of the tiles on the matrix? 
                    // onChange on tile of matrix => creates a new object dropping to location
            }   

        } else {
            alert("Invalid Column; Column Maxed")
        }
    }

    
    
    // win?
    // if the current player gets 4 connsecutive pieces aligned
    // (horizontally, 
    // vertically, 
    //diagonally)
    // then the current player wins
    
    
    horizontalWin() {
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
b.validColumn();

module.export = Board
