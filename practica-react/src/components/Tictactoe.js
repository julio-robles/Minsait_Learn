import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


export const Tictactoe = () => {
    const [cellList, setCellList] = useState([]);
    
    const [turn, setTurn] = useState(null);

    const [isStarted, setIsStarted] = useState(0);

    const [isFull, setIsFull] = useState(0);

    const cleanTable = [
        { id: 11, value: null },
        { id: 12, value: null },
        { id: 13, value: null },
        { id: 21, value: null },
        { id: 22, value: null },
        { id: 23, value: null },
        { id: 31, value: null },
        { id: 32, value: null },
        { id: 33, value: null }
    ];
    const [contX, setContX] = useState(0);
    const [contO, setContO] = useState(0);


    useEffect(() => {
        setTurn('X');
        setIsStarted(1);
        setCellList(cleanTable);
        setIsFull(0);
    }, [isFull]);


    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const checkWin = () =>{
        setIsFull(1); // Hasta que salimos de la función no se renderiza, si tiene que cambiar el estado a 1 entonces vuelve a renderizar
        for (let x in winningConditions){ // Necesario realziar este bucle, sin el hay ocasiones en las que si un jugador gana isFull queda como 1 renderizando de nuevo el componente
            let a = cellList[winningConditions[x][0]].value;
            let b = cellList[winningConditions[x][1]].value;
            let c = cellList[winningConditions[x][2]].value;
            if (a === null || b === null || c === null) {
                setIsFull(0);
            }
        }
        for (let x in winningConditions){
            let a = cellList[winningConditions[x][0]].value;
            let b = cellList[winningConditions[x][1]].value;
            let c = cellList[winningConditions[x][2]].value;
            if (a != null && a === b && b === c) {
                setIsStarted(0);
                alert("Ha ganado el jugador: " + a);
                if(a == 'X') setContX(contX+1);
                else setContO(contO+1);
            }
        }
    }

    const updateCell = index => e => {
        if (cellList[index].value == null && isStarted == 1){
            let newList = [...cellList];
            newList[index].value = turn;
            setCellList(newList);
            if(turn == 'X') setTurn('O');
            else setTurn('X');
            checkWin();
        }
    }


    function refreshGame(){
        setCellList(cleanTable);
        setIsStarted(1);
    }

    const linkStyle = {
        textDecoration: "none",
        color: 'blue'
      };

  return (
    <div>
        <div>
        <h1>Welcome to Game Hub's Tic Tac Toe!</h1>
        <Link style={linkStyle} to="/"><h2>Back to main menu</h2></Link>
        </div>

        <Button variant="contained" color="primary" style={{marginBottom: "20px"}} onClick={refreshGame}>Reiniciar juego</Button>

        <h2>{contX}</h2>
        <h2>{contO}</h2>

        <Grid container xs={3} spacing={1} style={{margin: "auto"}}>
            {cellList.map((cell, index) => <Grid key={cell.id} item xs={4}><Button variant="contained" style={{width: "100px", height: "100px"}} onClick={updateCell(index)}>{cell.value}</Button></Grid>)}
        </Grid>
        <h2>Es el turno de {turn}</h2>
    </div>
  );
};