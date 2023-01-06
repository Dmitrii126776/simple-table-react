import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import TableItems from "./TableItems";
import CreateModal from "./CreateModal";

const initialJob = [
    {id: '1', job: "Translation", price: 100, primeCost: 20, employee: "Greg"},
    {id: 2, job: "Consultation", price: 200, primeCost: 50, employee: "Bob"},
    {id: uuidv4(), job: "Printout of documents", price: 120, primeCost: 5, employee: "Rachel"},
]

const headers = ['Name of job', 'Price', 'Prime cost', 'Employee', 'Actions']

function App() {

    const [tasks, setTasks] = useState(initialJob)

    const addNewTask = (newTask) => {
        setTasks([...tasks, newTask])
    }

    const deleteTask = (id) => {
        console.log(id)
        setTasks(tasks.filter(el => el.id !== id))
    }

    return (
        <div className="App">
            <h1>List of Jobs</h1>
            <CreateModal tasks={tasks} addNewTask={addNewTask}/>
            <TableItems headers={headers} tasks={tasks} deleteTask={deleteTask}/>
        </div>
    );
}

export default App;
