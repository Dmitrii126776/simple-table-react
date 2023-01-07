import React from 'react';
import DropDownModal from "./DropDownModal";

const Row = (props) => {
    const {task, deleteTask, updateTask} = props
    return (
        <>
            <td><strong>{task.job}</strong></td>
            <td>${task.price}</td>
            <td>${task.primeCost}</td>
            <td>{task.employee}</td>
            <td>
                <DropDownModal task={task} updateTask={updateTask} deleteTask={deleteTask}/>
            </td>
        </>
    );
};

export default Row;
