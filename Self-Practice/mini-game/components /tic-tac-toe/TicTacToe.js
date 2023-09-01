import Board from "./Board";
import { useState } from "react";
import UndoButton from "./UndoButton";
import RestartButton from "./RestartButton";
import PlayerModeButton from "./PlayerModeButton";
import IntroPassage from "./IntroPassage";
import Announcement from "./Announcement";

export default function TicTacToe() {
  // for two players, -1 is X and 1 is O
  // for one player, -1 is Human and 1 is AI
  const [player, setPlayer] = useState(-1);
  const [playerMode, setPlayerMode] = useState(2);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(2);
  const [history, setHistory] = useState([]);

  return (
    <div>
      <IntroPassage playerMode={playerMode} />
      <PlayerModeButton
        setBoard={setBoard}
        setHistory={setHistory}
        setPlayer={setPlayer}
        setWinner={setWinner}
        setPlayerMode={setPlayerMode}
      />
      <Announcement winner={winner} playerMode={playerMode} player={player} />
      <Board
        player={player}
        setPlayer={setPlayer}
        winner={winner}
        setWinner={setWinner}
        board={board}
        setBoard={setBoard}
        history={history}
        setHistory={setHistory}
        playerMode={playerMode}
      />
      <UndoButton
        history={history}
        winner={winner}
        player={player}
        setBoard={setBoard}
        setHistory={setHistory}
        setPlayer={setPlayer}
        playerMode={playerMode}
      />
      <RestartButton
        setBoard={setBoard}
        setWinner={setWinner}
        setPlayer={setPlayer}
        setHistory={setHistory}
      />
    </div>
  );
}
