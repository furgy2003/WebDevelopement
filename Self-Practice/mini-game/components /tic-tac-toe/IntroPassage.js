import { Fragment } from "react";

export default function IntroPassage(props) {
  const { playerMode } = props;
  return (
    <Fragment>
      <h1>TicTacToe</h1>
      <h5>Rules: </h5>
      <ol>
        <li>You can undo but once a player wins you cannot undo</li>
        <li>
          When playing 1 player mode and click undo, will undo both the AI's
          step and player's step
        </li>
      </ol>
      <p>
        You are currently playing {playerMode} player
        {playerMode === 2 ? "s" : null} mode. Change the mode by clicking the
        below buttons.
      </p>
    </Fragment>
  );
}
