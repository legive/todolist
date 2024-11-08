/* eslint-disable react/prop-types */

import { useTaskItem } from "../../hooks/useTaskItem";
import "./taskitem.css";
export default function TaskItem({
  task,
  handleUpdateCheck,
  handleDelete,
  handleUpdateTask,
}) {
  const{id,name,isComplete, update,newName,handledName, handleUpdate}=useTaskItem(task,handleUpdateTask)

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
