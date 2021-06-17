import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';

export const Hangman = () => {
    const [word, setWord] = useState(null);
    const [letter, setLetter] = useState("");
    const [secret, setSecret] = useState(null);
    const [coolSecret, setCoolSecret] = useState(null);

    
    const MAX_TURNS = 7;
    const [nTurn, setNTurn] = useState(0);

    const [reset, setReset] = useState(0);
    useEffect(() => {
        setReset(0);
        const words = [
            "pneumonoultramicroscopicsilicovolcanoconiosis",
            "ovoviviparo",
            "hola",
            "mundo",
            "adios",
            "reactivo",
            "españa",
            "tortilla",
            "sol"
        ];
        const temp = words[Math.floor(Math.random() * words.length)];
        setWord(temp);

        let tempSecret = [];
        for(let i = 0; i < temp.length - 1; i++){
            tempSecret += "_";
        }
        tempSecret += "_";
        setSecret(tempSecret);
        console.log(tempSecret);
        
        setCoolSecret(tempSecret.split('').join(' '));
        setNTurn(0);
    }, [reset]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (word.includes(letter)){
            var newSecret = [...secret];
            for (let i = 0; i < word.length; i++){
                if (word[i] == letter){
                    newSecret[i] = letter;
                }
            }
            setSecret(newSecret);
            setCoolSecret(newSecret.join(' ').split('').join(' '));
            if (word == newSecret.join("")){
                alert("Ganaste!! La palabra era -> " + word);
                setReset(1);
            }
        }
        else{
            setNTurn(nTurn + 1);
            if (nTurn >= MAX_TURNS){
                alert("Perdiste!! La palabra era -> " + word);
                setReset(1);
            }
        }
    }

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'blue'
      };

    const formStyle= {
        display: "flex",
        flexDirection: "column"
      };

    const buttonStyle={
        widht: "100px"
    }

    return (
    <div>
        <div>
            <h1>Welcome to Game Hub's Hangman!</h1>
            <Link style={linkStyle} to="/"><h2>Back to main menu</h2></Link>
        </div>

        <h1>Número de turnos disponibles: {MAX_TURNS - nTurn + 1}</h1>
        
        <h1>{coolSecret}</h1>

        <Form onSubmit={handleSubmit} style={formStyle}>
            <Form.Label>
                Letra:
                <Form.Control type="text"
                    value={letter}
                    onChange={e => {
                        if (e.target.value.length <= 1) setLetter(e.target.value.toLowerCase());
                    }} />
            </Form.Label>
            <Button type="submit" value="Submit" variant="contained" color="primary" style={buttonStyle}>Comprobar</Button>
        </Form>
    </div>
  );
};