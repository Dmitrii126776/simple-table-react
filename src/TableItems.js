import React from 'react';
import {Table} from "reactstrap";
import Row from "./Row";

const TableItems = (props) => {

    const {headers, tasks, deleteTask, updateTask} = props
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                {headers.map((el, i) => (<th key={i}>{el}</th>))}
            </tr>
            </thead>
            <tbody>
            {tasks.map((el, i) => (<tr key={i}>
                <Row key={el.id} task={el} updateTask={updateTask} deleteTask={deleteTask}/>
            </tr>))}
            </tbody>
        </Table>
    );
};

export default TableItems;
