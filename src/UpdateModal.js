import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


function UpdateModal(props) {
    const {modal, toggle, task, updateTask} = props

    const [job, setJob] = useState(task.job)
    const [price, setPrice] = useState(task.price)
    const [primeCost, setPrimeCost] = useState(task.primeCost)
    const [employee, setEmployee] = useState(task.employee)

    const onSaveButton = () => {
        const updatedTask = {
            id: task.id,
            job,
            price,
            primeCost,
            employee
        }
        updateTask(updatedTask)
        toggle()
    }

    return (
        <div>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Update Modal</ModalHeader>
                <ModalBody>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Name of job</span>
                        <input value={job} onChange={e => setJob(e.target.value)}
                               type="text" className="form-control"
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Price</span>
                        <input value={price} onChange={e => setPrice(e.target.value)}
                               type="number" className="form-control"
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Prime Cost</span>
                        <input value={primeCost} onChange={e => setPrimeCost(e.target.value)}
                               type="number" className="form-control"
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Employee</span>
                        <input value={employee} onChange={e => setEmployee(e.target.value)}
                               type="text" className="form-control"
                               aria-describedby="basic-addon1"/>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={onSaveButton}>
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

export default UpdateModal;
