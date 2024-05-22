import React, { useState } from "react";
import "./App.css";

const AlphabetGrid = () => {
  const [outputString, setOutputString] = useState("");

  function replaceConsecutiveLetters(str) {
    return str.replace(/(.)\1*/g, (match, p1) => {
      if (match.length === 6) {
        return "__";
      } else if (match.length === 3) {
        return "_";
      } else {
        return match;
      }
    });
  }

  const handleTileClick = (letter) => {
    let newOutputString = outputString + letter;
    setOutputString(newOutputString);
  };

  const letters = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  const finalOutputSting = replaceConsecutiveLetters(outputString);

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Alphabet Tile Interaction
      </h1>
      <div className="grid">
        {letters.map((letter) => (
          <div
            key={letter}
            className="title"
            onClick={() => handleTileClick(letter)}
          >
            {letter}
          </div>
        ))}
      </div>
      <div id="outputstring" style={{ color: "green" }}>
        outputString: <span style={{ color: "black" }}>{finalOutputSting}</span>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <AlphabetGrid />
    </div>
  );
};

export default App;
