import React from "react";

function GameHistory({gameHistory}) {
  return (
    <ul>
      {gameHistory.map(({ action, guesses, answer, id }) => (
        <li key={id}>{`You ${action} after ${guesses} guesses. The correct answer was ${answer}`}</li>
      ))}
    </ul>
  );
}

export default GameHistory;
