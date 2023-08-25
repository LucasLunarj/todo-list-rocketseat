//Hook
import { useState } from "react";
//components
import { Header } from "./components/Header";
import { TaskBar } from "./components/TaskBar";
import { Tasks } from "./components/Tasks";
//CSS
import "./App.css";

export function App() {
  const [list, setList] = useState([
    {
      task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      checked: false,
    },
  ]);

  function listGenerator(dataList) {
    return setList([...list, { task: dataList, checked: false }]);
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="taskbar">
          <TaskBar taskGenerator={listGenerator} />
        </div>
        <div className="tasks">
          <Tasks />
        </div>
      </div>
    </div>
  );
}
