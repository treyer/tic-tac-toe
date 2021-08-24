class TicTacToe {

    constructor() {
        this.currentPlayerSymbol = "x";
        this.gameWinner = null;
        this.totalTurns = 0;
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] === null){
            this.matrix[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this.currentPlayerSymbol = (this.currentPlayerSymbol === 'x') ? 'o' : 'x';
            this.totalTurns++;
            if (this.totalTurns >= 5 && this.gameWinner === null){
                this.gameWinner = this.checkIfTheWinner();
            } 
        }
    }

    isFinished() {
        return this.gameWinner !== null || this.totalTurns === 9;
    }

    getWinner() {
        return this.gameWinner;
    }

    noMoreTurns() {
        return this.totalTurns === 9;
    }

    isDraw() {
        return this.gameWinner === null && this.totalTurns === 9;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }

    checkIfTheWinner (){
        //check rows
        for(let i = 0; i < 3; i++){
            let totalX = 0;
            let totalO = 0;
            for (let j = 0; j < 3; j++) {
                if (this.matrix[i][j] === null) break;
                (this.matrix[i][j] === 'x') ? totalX++ : totalO++;
            }
            if (totalX === 3) return 'x';
            if (totalO === 3) return 'o';
        }
        //check columns
        for(let i = 0; i < 3; i++){
            let totalX = 0;
            let totalO = 0;
            for (let j = 0; j < 3; j++) {
                if (this.matrix[j][i] === null) break;
                (this.matrix[j][i] === 'x') ? totalX++ : totalO++;
            }
            if (totalX === 3) return 'x';
            if (totalO === 3) return 'o';
        }
        //check diagonals
        let totalX = 0;
        let totalO = 0;
        for (let i = 0; i < 3; i++){
            if (this.matrix[i][i] === null) break;
            (this.matrix[i][i] === 'x') ? totalX++ : totalO++;
        }
        if (totalX === 3) return 'x';
        if (totalO === 3) return 'o';

        totalX = 0;
        totalO = 0;
        for (let i = 0; i < 3; i++){
            if (this.matrix[i][2 - i] === null) break;
            (this.matrix[i][2 - i] === 'x') ? totalX++ : totalO++;
        }
        if (totalX === 3) return 'x';
        if (totalO === 3) return 'o';

        return null;
    }
}

module.exports = TicTacToe;
