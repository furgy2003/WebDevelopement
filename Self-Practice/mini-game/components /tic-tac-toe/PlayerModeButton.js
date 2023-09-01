import { Button } from "antd";

export default function PlayerModeButton(props) {
  const { setBoard, setWinner, setPlayer, setHistory, setPlayerMode } = props;
  const changeModeHandler = (mode) => {
    setBoard(Array(9).fill(null));
    setWinner(2);
    setPlayer(-1);
    setHistory([Array(9).fill(null)]);
    setPlayerMode(mode);
  };
  return (
    <div>
      <Button onClick={() => changeModeHandler(1)}>One Player</Button>
      <Button onClick={() => changeModeHandler(2)}>Two Players</Button>
    </div>
  );
}
