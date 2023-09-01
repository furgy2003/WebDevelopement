import { Row } from "antd";
import BoardBox from "./BoardBox";
import { Fragment } from "react";
import checkBoard from "./function/checkBoard";
import aiTurn from "./function/aiTurn";

export default function Board(props) {
  const {
    board,
    setBoard,
    player,
    setPlayer,
    history,
    setHistory,
    winner,
    setWinner,
    playerMode,
  } = props;

  const clickHandler = (num) => {
    if (!board[num] && winner === 2) {
      const newHistory = [...history, board];
      setHistory(newHistory);
      const newBoard = board.slice();
      newBoard[num] = player;
      setBoard(newBoard);
      setWinner(checkBoard(newBoard));
      if (checkBoard(newBoard) === 2) {
        if (playerMode === 2) {
          if (player === -1) setPlayer(1);
          else setPlayer(-1);
        } else {
          setHistory([...newHistory, newBoard]);
          const pos = aiTurn(newBoard);
          newBoard[pos] = 1;
          setBoard(newBoard);
          setWinner(checkBoard(newBoard));
        }
      }
    }
  };

  return (
    <Fragment>
      <div>
        <Row>
          <BoardBox player={board[0]} clickHandler={() => clickHandler(0)} />
          <BoardBox player={board[1]} clickHandler={() => clickHandler(1)} />
          <BoardBox player={board[2]} clickHandler={() => clickHandler(2)} />
        </Row>
        <Row>
          <BoardBox player={board[3]} clickHandler={() => clickHandler(3)} />
          <BoardBox player={board[4]} clickHandler={() => clickHandler(4)} />
          <BoardBox player={board[5]} clickHandler={() => clickHandler(5)} />
        </Row>
        <Row>
          <BoardBox player={board[6]} clickHandler={() => clickHandler(6)} />
          <BoardBox player={board[7]} clickHandler={() => clickHandler(7)} />
          <BoardBox player={board[8]} clickHandler={() => clickHandler(8)} />
        </Row>
      </div>
    </Fragment>
  );
}
