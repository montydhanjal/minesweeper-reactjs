import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Board from '../components/Board';


const Minesweeper = () => {

    const [board, SetBoard] = React.useState(null)
    const [gameOver, setGameOver] = React.useState(false)

    function resetBoard() {
        setGameOver(false)
        let board = []

        for (let i = 0; i < 7; i++) {
            board.push([])
            for (let j = 0; j < 7; j++) {
                board[i].push({ row: i, column: j, bomb: false, bombCount: 0, open: false, flagged: false })
            }
        }

        let bombNums = 10

        while (bombNums > 0) {
            const row = Math.floor(Math.random() * 7)
            const column = Math.floor(Math.random() * 7)

            if (!board[row][column].bomb) {
                board[row][column].bomb = true
                bombNums--
            }
        }

        let m8Check = [[-1, 0], [1, 0], [0, 1], [0, -1], [-1, 1], [1, 1], [-1, -1], [-1, 1]]

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                for (let k = 0; k < m8Check.length - 1; k++) {
                    try {
                        const check = board[i + m8Check[k][0]][j + m8Check[k][1]]
                        if (check.bomb && !board[i][j].bomb) {
                            board[i][j].bombCount++
                        }
                    } catch (err) {
                    }
                }
            }
        }


        SetBoard(board)
    }

    const onOpen = (x, y) => {
        let newBoard = board
        newBoard[x][y].open = true
        if (newBoard[x][y].bomb) setGameOver(true)

        if (newBoard[x][y].bombCount === 0) {
            fillBoard(newBoard)
        }


        SetBoard([...newBoard])
    }


    function recursiveFill(board, x, y){
        
    }




    

    return (
        <Paper >
            <Button onClick={resetBoard}>Reset</Button>
            {gameOver && <div>You lose</div>}
            <Board onOpen={onOpen} boardInitial={board || []} />
        </Paper>
    );


}

export default Minesweeper