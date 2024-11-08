import { useState } from "react";
import { tasks } from "../data/db";
export const useTasklist = () => {
    const [data, setData] = useState(tasks);

    const handledAdd = (task) => {
        setData([...data, task]);
    };

    const handleUpdateCheck = (id) => {
        const index = data.findIndex((task) => task.id === id);
        const updatedData = [...data];
        updatedData[index].isComplete = !updatedData[index].isComplete;
        setData(updatedData);
        console.log("entro a check", data);

    };

    const handleUpdateTask = (id, name) => {
        const index = data.findIndex((task) => task.id === id);
        const updatedData = [...data];
        updatedData[index].name = name;
        setData(updatedData);
        console.log("entro a task")
    };

    const handleDelete = (id) => {
        setData(data.filter((task) => task.id != id));
        console.log("entro a Delete", data);
    };
    const completeTasks = data.filter((task) => task.isComplete === true);
    const notCompleteTasks = data.filter((task) => task.isComplete === false);


    return {
        handledAdd,
        handleUpdateCheck,
        handleUpdateTask,
        handleDelete,
        completeTasks,
        notCompleteTasks,


    }
}