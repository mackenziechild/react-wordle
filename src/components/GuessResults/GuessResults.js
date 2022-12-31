import React from "react";
import { range } from "../../utils";
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED as maxNumOfGuesses } from '../../constants';

function GuessResults({ validatedGuesses, answer }) {

  return (
    <div className="guess-results">
      {range(maxNumOfGuesses).map((num) => (
        <Guess key={num} value={validatedGuesses[num]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
