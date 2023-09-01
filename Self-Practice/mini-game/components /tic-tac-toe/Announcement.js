import { Fragment } from "react";

export default function WinnerAnnouncement(props) {
  const { winner, playerMode, player } = props;
  return (
    <Fragment>
      {/* turn announcement */}
      {winner === 2 && playerMode === 1 && (
        <h2>{player === -1 ? "Your" : "AI's"} turn</h2>
      )}
      {winner === 2 && playerMode === 2 && (
        <h2>Player {player === -1 ? "X" : "O"}'s turn</h2>
      )}

      {/* winner announcement */}
      {!winner && <h2>Tie!</h2>}
      {winner !== 0 && winner !== 2 && playerMode === 1 && (
        <h2>{winner === -1 ? "You" : "AI"} wins!</h2>
      )}
      {winner !== 0 && winner !== 2 && playerMode === 2 && (
        <h2>Player {winner === -1 ? "X" : "O"} wins!</h2>
      )}
    </Fragment>
  );
}
