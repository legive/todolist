
import "./App.css";
import TaskItem from "./components/TaskItem/TaskItem";
import TaskForm from "./components/TaskForm/TaskForm";
import { useTasklist } from "./hooks/useTasklist";
function App() {
  const {
    handledAdd,
    handleUpdateCheck,
    handleUpdateTask,
    handleDelete,
    completeTasks,
    notCompleteTasks,
  } = useTasklist();

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
