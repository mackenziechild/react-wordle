import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const classNames = status ? `cell ${status}` : "cell";
  return (
    <span className={classNames}>{letter}</span>
  );
}

function Guess({ value, answer }) {

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell 
          key={num}
          letter={value ? value[num].letter : undefined}
          status={value ? value[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
