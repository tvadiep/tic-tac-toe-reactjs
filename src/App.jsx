import React, { useState } from "react";
import Player from "./components/Player";
import { GameBoard } from "./components/GameBoard";
import { Log } from "./components/Log";

function deriveActivePlayer(gameTurns) {
  let activePlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    activePlayer = "O";
  }
  return activePlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIdx, colIdx) {
    setGameTurns((prevGameTurn) => {
      const activePlayer = deriveActivePlayer(gameTurns);
      return [
        { square: { row: rowIdx, col: colIdx }, player: activePlayer },
        ...prevGameTurn,
      ];
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Diep"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Quyt"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
