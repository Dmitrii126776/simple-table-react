import React from 'react';
import DropDownModal from "./DropDownModal";

const Row = (props) => {
    const {task, deleteTask} = props
    return (
        <>
            <td><strong>{task.job}</strong></td>
            <td>${task.price}</td>
            <td>${task.primeCost}</td>
            <td>{task.employee}</td>
            <td>
                <DropDownModal task={task} deleteTask={deleteTask}/>
            </td>
        </>
    );
};

export default Row;
