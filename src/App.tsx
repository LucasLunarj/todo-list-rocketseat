//components
import { Header } from "./components/Header";
import { TaskBar } from "./components/TaskBar";
import { Tasks } from "./components/Tasks";
//CSS
import "./App.css";
export function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="taskbar">
          <TaskBar />
        </div>
        <div className="tasks">
          <Tasks />
        </div>
      </div>
    </div>
  );
}
