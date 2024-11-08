/* eslint-disable react/prop-types */
import { useState } from "react";

export default function TaskForm({ handledAdd }) {
  const [name, setName] = useState("");

  const handledName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handledSendTask = () => {
    const task = {
      id: Date.now(),
      name: name,
      isComplete: false,
    };

    handledAdd(task);
  };

  return (
    <div>
      <input placeholder="Type your task" onChange={handledName}></input>
      <button onClick={() => handledSendTask()}>Add</button>
    </div>
  );
}
