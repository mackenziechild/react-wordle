import React from "react";

function GuessInput({ status, handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    
    if (tentativeGuess.length !== 5) {
      window.alert("Please enter a 5 letter word");
      return;
    }

    handleSubmitGuess(tentativeGuess);

    setTentativeGuess("");

  }

  return (
    <>
      <form 
        className="guess-input-wrapper"
        onSubmit={(event) => handleSubmit(event)}
      >
        <label htmlFor="guess-input">Enter your guess:</label>
        <input 
          required
          disabled={status !== "playing"}
          maxLength="5"
          minLength="5"
          id="guess-input" 
          value={tentativeGuess} 
          onChange={event => {
            setTentativeGuess(event.target.value.toUpperCase());
          }} 
          type="text" />
      </form>
    </>
  );
}

export default GuessInput;
