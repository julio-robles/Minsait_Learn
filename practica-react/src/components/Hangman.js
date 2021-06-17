import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export const Hangman = () => {

    const [word, setWord] = useState(null);
    const [letter, setLetter] = useState("");
    const [secret, setSecret] = useState(null);

    useEffect(() => {
        const words = [
            /*
            "pneumonoultramicroscopicsilicovolcanoconiosis",
            "ovoviviparo",
            "hola",
            "mundo",
            "adios",
            "reactivo",
            "españa",
            "tortilla",
            */
            "sol"
        ];
        const temp = words[Math.floor(Math.random() * words.length)];
        setWord(temp);

        let tempSecret = [];
        for(let i = 0; i < temp.length - 1; i++){
            tempSecret += "_ ";
        }
        tempSecret += "_";
        setSecret(tempSecret);
    }, []);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(letter);
    }

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'blue'
      };
    return (
    <div>
        <div>
            <h1>Welcome to Game Hub's Hangman!</h1>
            <Link style={linkStyle} to="/"><h2>Back to main menu</h2></Link>
        </div>

        <h1>{word}</h1>
        <h1>{secret}</h1>

        <form onSubmit={handleSubmit}>
            <label>
                Letra:
                <input type="text"
                    value={letter}
                    onChange={e => {
                        if (e.target.value.length <= 1) setLetter(e.target.value);
                    }} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    </div>
  );
};