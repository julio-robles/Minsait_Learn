import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makepuzzle, solvepuzzle, ratepuzzle } from "sudoku";

export const Sudoku = () => {
    const [sudokuBoard, setSudokuBoard] = useState(null);
    const [displayBoard, setDisplayBoard] = useState(null);

    const [sqrtLength, setSqrtLength] = useState(null);

    const [rendered, isRendered] = useState(0);

    useEffect(() => {
        const newBoard = makepuzzle();
        setSudokuBoard(newBoard);
        setSqrtLength(Math.sqrt(newBoard.length));
        isRendered(1);
    }, []);

    const solved = solvepuzzle(sudokuBoard);


    function GenerateBoard() {
        console.log(sudokuBoard);
        if (rendered == 1){
            let tempBoard = [];
            var tempRow = [];
            for (let i = 0, x = 0; i <= sudokuBoard.length; i++, x++){
                if (x >= sqrtLength){
                    x = 0;
                    tempBoard.push(<Grid container container justify="center" xs={9}> {tempRow} </Grid>);
                    tempRow = [];
                }
                if (sudokuBoard[i] != null) 
                    tempRow.push(<Grid style={{maxWidth: "50px", height: "50px"}} item xs={Math.floor(12 / sqrtLength)}> <input style={{width: "50px", height: "50px"}} disabled='disabled' value={sudokuBoard[i]}/></Grid>);
                else 
                    tempRow.push(<Grid style={{maxWidth: "50px", height: "50px"}} item xs={Math.floor(12 / sqrtLength)}> <input style={{width: "50px", height: "50px"}} value=" "/></Grid>);
            }
            return <Grid container justify="center" spacing={0}>{tempBoard}</Grid>;
        }
        return <h1>Esperese man</h1>
    }


    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'blue'
    };


    return (
    <div>
        <div>
            <h1>Welcome to Game Hub's Sudoku!</h1>
            <Link style={linkStyle} to="/"><h2>Back to main menu</h2></Link>
        </div>

        <GenerateBoard />

    </div>
  );
};