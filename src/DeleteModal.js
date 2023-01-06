import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function DeleteModal(props) {
    const {modal, toggle, task, deleteTask} = props

    const removeTask = () => {
        deleteTask(task.id)
        toggle()
    }

    return (
        <div>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Delete Modal</ModalHeader>
                <ModalBody>
                    Do you want to remove <strong>{task.job}</strong> ?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={removeTask}>
                        Delete
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default DeleteModal;
