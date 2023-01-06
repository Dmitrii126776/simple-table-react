import React, {useState} from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, Button,
} from 'reactstrap';
import PropTypes from 'prop-types';
import DeleteModal from "./DeleteModal";

function DropDownModal(props) {

    const {task, deleteTask} = props

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const [modalDelete, setModalDelete] = useState(false);

    const toggleDelete = () => setModalDelete(!modalDelete);

    return (
        <div className="d-flex p-15">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>Action</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Update</DropdownItem>
                    <DropdownItem>
                        <Button color="danger" onClick={toggleDelete}>
                            Delete
                        </Button>
                    </DropdownItem>
                    <DeleteModal deleteTask={deleteTask}
                                 modal={modalDelete} toggle={toggleDelete} task={task}/>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}

DropDownModal.propTypes = {
    direction: PropTypes.string,
};

export default DropDownModal;
