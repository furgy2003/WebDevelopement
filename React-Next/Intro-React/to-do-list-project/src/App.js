import "./index.css";
import Todo from "./components/Todo";

export default function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="To do 1" />
      <Todo text="To do 2" />
      <Todo text="To do 3" />
    </div>
  );
}
