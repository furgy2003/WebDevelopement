import { Card } from "antd";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to MiniGame Page</h1>
      <p>Hope you enjoy the game</p>
      <h2>Game Lists</h2>
      <Card title="Tic-Tac-Toe">
        <p>play X-O with your friend or with AI</p>
        <Link href="/games/tictactoe">click to play</Link>
      </Card>
      <Card title="Draw Something">
        <p>draw something and let us guess</p>
        <Link href="/games/draw-something">click to play</Link>
      </Card>
    </div>
  );
}
