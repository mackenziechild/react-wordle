import React from "react";

function StatusBanner({ status, answer, guessesCount, }) {
  if (status === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in <strong>{guessesCount} {guessesCount === 1 ? 'Guess' : 'Guesses'}</strong>.
        </p>
      </div>
    )
  } else if (status === "lost") {
    return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    )
  }
}

export default StatusBanner;
