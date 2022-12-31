import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import { NUM_OF_GUESSES_ALLOWED as maxNumOfGuesses } from '../../constants';
import GuessResults from '../GuessResults/GuessResults';
import StatusBanner from '../StatusBanner/StatusBanner';
import { checkGuess } from '../../game-helpers';
import Keyboard from '../Keyboard/Keyboard';
import GameHistory from '../GameHistory/GameHistory';

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  console.info({ answer });
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState('playing');
  const [gameHistory, setGameHistory] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    const nextGuess = [...guesses, tentativeGuess]
    setGuesses(guesses => nextGuess);

    const nextGameHistory = {
      guesses: nextGuess.length,
      answer, 
      date: new Date().toISOString(),
      id: Math.random(),
    }

    if (tentativeGuess === answer) {
      setStatus("won");
      setGameHistory(gameHistory => [...gameHistory, {
        action: "won",
        ...nextGameHistory
      }]);
    } else if (nextGuess.length === maxNumOfGuesses) {
      setStatus("lost");
      setGameHistory(gameHistory => [...gameHistory, {
        action: "lost",
        ...nextGameHistory
      }]);
    }
  }

  function handleGameReset() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setStatus("playing");
  }

  const validatedGuesses = guesses.map((guess) =>
    checkGuess(guess, answer)
  );

  return (
    <>
      <button onClick={handleGameReset}>New Game</button>
      <GuessResults 
        validatedGuesses={validatedGuesses}
        answer={answer} 
      />
      <GameHistory gameHistory={gameHistory} />
      <GuessInput 
        status={status}
        handleSubmitGuess={handleSubmitGuess}
      />
      <Keyboard validatedGuesses={validatedGuesses} />
      <StatusBanner 
        status={status} 
        answer={answer} 
        guessesCount={guesses.length} 
      />
    </>
  );
}

export default Game;
