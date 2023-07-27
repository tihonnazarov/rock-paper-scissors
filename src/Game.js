import React, { useState } from 'react';
import rps from './images/rps.svg'

const options = ['rock', 'paper', 'scissors'];

const Game = () => {
    const [userChoice, setUserChoice] = useState('');
    const [computerChoice, setComputerChoice] = useState('');
    const [result, setResult] = useState('');

    const handleUserChoice = (choice) => {
        const computerChoice = options[Math.floor(Math.random() * options.length)];
        setUserChoice(choice);
        setComputerChoice(computerChoice);
        setResult(getResult(choice, computerChoice));
    };

    const getResult = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) return 'Draw!';
        if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'scissors' && computerChoice === 'paper') ||
            (userChoice === 'paper' && computerChoice === 'rock')
        ) {
            return 'You won!';
        } else {
            return 'You lose!';
        }
    };

    return (
        <div className="menu">
            <img className="rockp" src={rps} alt="rockpapsc"/>
            <h1 className="zagolovok">Rock, Paper, Scissors</h1>
                <p>Your choice: {userChoice}</p>
                <p>Computer choice: {computerChoice}</p>
                <p>Result: {result}</p>
                <div>
                    <button onClick={() => handleUserChoice('rock')} style={{backgroundColor: "black", border: "1px solid yellow"}}><p style={{color: "yellow"}}>Rock</p></button>
                    <button onClick={() => handleUserChoice('paper')} style={{backgroundColor: "black", border: "1px solid yellow"}}><p style={{color: "yellow"}}>Paper</p></button>
                    <button onClick={() => handleUserChoice('scissors')} style={{backgroundColor: "black", border: "1px solid yellow"}}><p style={{color: "yellow"}}>Scissors</p></button>
                </div>
        </div>
    );
};

export default Game;