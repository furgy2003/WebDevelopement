import { Button } from "antd";

export default function UndoButton(props) {
  const {
    history,
    winner,
    player,
    setBoard,
    setHistory,
    setPlayer,
    playerMode,
  } = props;

  const undoHandler = () => {
    if (history.length !== 0 && winner === 2) {
      var newHistory = history.slice();
      const prevBoard = newHistory.pop();
      setBoard(prevBoard);
      setHistory(newHistory);
      if (playerMode === 2) {
        if (player === -1) setPlayer(1);
        else setPlayer(-1);
      } else {
        const prevBoard = newHistory.pop();
        setBoard(prevBoard);
        setHistory(newHistory);
      }
    }
  };

  return <Button onClick={undoHandler}>Undo</Button>;
}
