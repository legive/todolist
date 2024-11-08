import { useState } from "react";
import "./App.css";
import { tasks } from "./data/db";
import TaskItem from "./components/TaskItem/TaskItem";
import TaskForm from "./components/TaskForm/TaskForm";
function App() {
  const [data, setData] = useState(tasks);

  const handledAdd = (task) => {
    setData([...data, task]);
  };

  const handleUpdateCheck = (id) => {
    const index = data.findIndex((task) => task.id === id);
    const updatedData = [...data];
    updatedData[index].isComplete = !updatedData[index].isComplete;
    setData(updatedData);
    console.log("entro a check",data);

  };

    const handleUpdateTask = (id,name) => {
      const index = data.findIndex((task) => task.id === id);
      const updatedData = [...data];
      updatedData[index].name = name;
      setData(updatedData);
      console.log("entro a task")
    };

  const handleDelete = (id) => {
    setData(data.filter((task) => task.id != id));
    console.log("entro a Delete",data);
  };
  const completeTasks = data.filter((task) => task.isComplete === true);
  const notCompleteTasks = data.filter((task) => task.isComplete === false);
  return (
    <>
      <h1>TaskList</h1>
      <TaskForm handledAdd={handledAdd} />
      <h2>To Do</h2>
      {completeTasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          handleUpdateCheck={handleUpdateCheck}
          handleDelete={handleDelete}
          handleUpdateTask={handleUpdateTask}
        />
      ))}

      <h2>Pendients</h2>
      {notCompleteTasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          handleUpdateCheck={handleUpdateCheck}
          handleDelete={handleDelete}
          handleUpdateTask={handleUpdateTask}
        />
      ))}
    </>
  );
}

export default App;
