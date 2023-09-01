import { Button } from "antd";

export default function RestartButton(props) {
  const { setBoard, setWinner, setPlayer, setHistory } = props;
  const restartHandler = () => {
    setBoard(Array(9).fill(null));
    setWinner(2);
    setPlayer(-1);
    setHistory([Array(9).fill(null)]);
  };
  return <Button onClick={restartHandler}>Restart Game</Button>;
}
