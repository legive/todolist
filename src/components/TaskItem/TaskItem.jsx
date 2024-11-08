/* eslint-disable react/prop-types */
import { useState } from "react";
import "./taskitem.css";
export default function TaskItem({
  task,
  handleUpdateCheck,
  handleDelete,
  handleUpdateTask,
}) {
  const { id, name, isComplete } = task;
  const [update, setUpdate] = useState(false);
  const [newName, setnewName] = useState(name);

  const handleUpdate = () => {
    setUpdate(!update);
    if (update === true) {
      handleUpdateTask(id, newName);
    }
  };

  const handledName = (e) => {
    setnewName(e.target.value);
  };

  return (
    <div className="tasks">
      <input
        className="check"
        type="checkbox"
        checked={isComplete}
        onChange={() => handleUpdateCheck(id)}
      ></input>

      {update === true ? (
        <input value={newName} onChange={handledName}></input>
      ) : (
        <p>{name}</p>
      )}

      <button onClick={handleUpdate}>
        {update === true ? "Save" : "update"}
      </button>
      <button onClick={() => handleDelete(id)}>delete</button>
    </div>
  );
}
