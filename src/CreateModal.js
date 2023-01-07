import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {v4 as uuidv4} from 'uuid';

function CreateModal(props) {

    const {addNewTask, tasks} = props

    const [modal, setModal] = useState(false);
    const [job, setJob] = useState('')
    const [price, setPrice] = useState('')
    const [primeCost, setPrimeCost] = useState('')
    const [employee, setEmployee] = useState('')

    const toggle = () => {
        setModal(!modal);
        setJob('')
        setPrice('')
        setPrimeCost('')
        setEmployee('')
    }


    const saveTask = () => {
        const newTask = {
            id: uuidv4(),
            job,
            price,
            primeCost,
            employee
        }
        addNewTask(newTask)
        toggle()
    }

    return (
        <div>
            <Button color="primary" onClick={toggle}>
                Add New Task ...
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create New Task</ModalHeader>
                <ModalBody>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Name of job</span>
                        <input type="text" className="form-control"
                               aria-describedby="basic-addon1"
                               value={job} onChange={(e) => setJob(e.target.value)}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Price</span>
                        <input type="number" className="form-control"
                               aria-describedby="basic-addon1"
                               value={price} onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Prime Cost</span>
                        <input type="number" className="form-control"
                               aria-describedby="basic-addon1"
                               value={primeCost} onChange={(e) => setPrimeCost(e.target.value)}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Employee</span>
                        <input type="text" className="form-control"
                               aria-describedby="basic-addon1"
                               value={employee} onChange={(e) => setEmployee(e.target.value)}
                        />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={saveTask}
                            disabled={job === '' || primeCost === '' || price === '' || employee === ''}
                    >
                        Save
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default CreateModal;
