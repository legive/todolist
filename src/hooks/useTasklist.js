import { useEffect, useState } from "react";
import { tasks } from "../data/db";
export const useTasklist = () => {
    const chargeInitialData = () => {
        const saveData = localStorage.getItem('datos')
        return saveData ? JSON.parse(saveData) : tasks
    }
    const [data, setData] = useState(chargeInitialData);
    useEffect(() => {
        localStorage.setItem('datos', JSON.stringify(data))
    }, [data])
    const handledAdd = (task) => {
        setData([...data, task]);
    };
    const handleUpdateCheck = (id) => {
        const index = data.findIndex((task) => task.id === id);
        const updatedData = [...data];
        updatedData[index].isComplete = !updatedData[index].isComplete;
        setData(updatedData);
    };
    const handleUpdateTask = (id, name) => {
        const index = data.findIndex((task) => task.id === id);
        const updatedData = [...data];
        updatedData[index].name = name;
        setData(updatedData);
    };
    const handleDelete = (id) => {
        setData(data.filter((task) => task.id != id));
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
        data,


    }
}