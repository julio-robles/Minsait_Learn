import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makepuzzle, solvepuzzle } from "sudoku";

export const Sudoku = () => {
    const [sudokuBoard, setSudokuBoard] = useState(null);
    const [renderHelper, setRenderHelper] = useState(0);
    const [initSudokuBoard, setInitSudokuBoard] = useState(null);
    const [solved, setSolved] = useState(null);
    const [sqrtLength, setSqrtLength] = useState(null);
    const [rendered, isRendered] = useState(0);

    useEffect(() => {
        const newBoard = makepuzzle();
        setSolved(solvepuzzle(newBoard));
        for (let i = 0; i < newBoard.length; i++){
            if (newBoard[i] === null)
                newBoard[i] = '';
        }
        setInitSudokuBoard(newBoard);
        setSudokuBoard(newBoard);
        setSqrtLength(Math.sqrt(newBoard.length));
        isRendered(1);
    }, [renderHelper]);


    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (solved === sudokuBoard) {
            alert("Lograste completar el sudoku");
            if (renderHelper === 1) setRenderHelper(0);
            else setRenderHelper(1);
        }
        else alert("El sudoku está mal");
    }

    const GenerateBoard = () => {
        if (rendered === 1){
            let tempBoard = [];
            var tempRow = [];
            for (let i = 0, x = 0; i <= sudokuBoard.length; i++, x++){
                if (x >= sqrtLength){
                    x = 0;
                    tempBoard.push(<Grid container justify="center" xs={9}> {tempRow} </Grid>);
                    tempRow = [];
                }
                if (sudokuBoard[i] !== '' && initSudokuBoard[i] !== '') 
                    tempRow.push(
                        <Grid key={i} style={{maxWidth: "50px", height: "50px"}} item xs={Math.floor(12 / sqrtLength)}> 
                            <Form.Control  type="text"
                            value={sudokuBoard[i]}
                            disabled='disabled'
                            style={{width: "40px", height: "40px"}}/>
                        </Grid>);
                else 
                    tempRow.push(
                        <Grid key={i} style={{maxWidth: "50px", height: "50px"}} item xs={Math.floor(12 / sqrtLength)}> 
                            <Form.Control type="text"
                            value={sudokuBoard[i]}
                            style={{width: "40px", height: "40px"}}
                            onChange={e => {
                                let value = e.target.value;
                                let newBoard = [...sudokuBoard];
                                if (value.length <= 1) {
                                    if (Number.isNaN(parseInt(value)) === true) {
                                        newBoard[i] = "";
                                    }
                                    else
                                        newBoard[i] = parseInt(value);
                                    setSudokuBoard(newBoard);
                                }
                            }}/>
                        </Grid>);
            }
            return <Grid container justify="center" spacing={0}>{tempBoard}</Grid>;
        }
        return <h1>Esperese man</h1>
    }

    const formStyle= {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    };

    const buttonStyle={
        marginTop: "10px"
    };

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
        <Form onSubmit={handleSubmit} style={formStyle}>
            <GenerateBoard />
            
            <Button type="submit" value="Submit" variant="contained" color="primary" style={buttonStyle}>Comprobar</Button>
        </Form>
    </div>
  );
};