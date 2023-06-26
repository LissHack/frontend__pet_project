import React, {useState} from 'react';
import {Table, Form} from "react-bootstrap";
import {PencilFill, Save, Trash, XSquare} from 'react-bootstrap-icons';
import './EditableTable.module.css';


const EditableTable = ({columns, rows, actions}) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
    const [rowsState, setRowsState] = useState(rows);
    const [editedRow, setEditedRow] = useState();

    const handleEdit = (rowID) => {
        setIsEditMode(true);
        setEditedRow(undefined);
        setRowIDToEdit(rowID);
    }

    const handleRemoveRow = (rowID) => {
        const newData = rowsState.filter(row => {
            return row.id !== rowID ? row : null
        });

        setRowsState(newData);
    }

    const handleOnChangeField = (e, rowID) => {
        const {name: fieldName, value} = e.target;

        setEditedRow({
            id: rowID,
            [fieldName]: value
        })
    }

    const handleCancelEditing = () => {
        setIsEditMode(false);
        setEditedRow(undefined);
    }

    const handleSaveRowChanges = () => {

        setIsEditMode(false);

        const newData = rowsState.map(row => {
            if (row.id === editedRow.id) {
                if (editedRow.firstname) {
                    row.firstname = editedRow.firstname;
                }
                if (editedRow.lastname) {
                    row.lastname = editedRow.lastname;
                }
                if (editedRow.role) {
                    row.role = editedRow.role;
                }
            }
            return row;
        })

        setRowsState(newData);
        setEditedRow(undefined)

    }

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                {columns.map((column) => {
                    return <th key={column.field}>{column.fieldName}</th>
                })}
            </tr>
            </thead>
            <tbody>
            {rowsState.map((row) => {
                return <tr key={row.id}>
                    <td>
                        {row.id}
                    </td>
                    <td>
                        {isEditMode && rowIDToEdit === row.id
                            ? <Form.Control
                                type='text'
                                defaultValue={editedRow ? editedRow.firstname : row.firstname}
                                id={row.id}
                                name='firstName'
                                onChange={(e) => handleOnChangeField(e, row.id)}
                            />
                            : row.firstname
                        }
                    </td>
                    <td>
                        {isEditMode && rowIDToEdit === row.id
                            ? <Form.Control
                                type='text'
                                defaultValue={editedRow ? editedRow.lastname : row.lastname}
                                id={row.id}
                                name='lastName'
                                onChange={(e) => handleOnChangeField(e, row.id)}
                            />
                            : row.lastname
                        }
                    </td>
                    <td>
                        {isEditMode && rowIDToEdit === row.id
                            ? <Form.Select onChange={e => handleOnChangeField(e, row.id)} name="role"
                                           defaultValue={row.role}>
                                <option value='Admin'>Admin</option>
                                <option value='Editor'>Editor</option>
                                <option value='Subscriber'>Subscriber</option>
                            </Form.Select>
                            : row.role
                        }
                    </td>
                    {actions &&
                        <td>
                            {isEditMode && rowIDToEdit === row.id
                                ? <button onClick={() => handleSaveRowChanges()} className='custom-table__action-btn'
                                          disabled={!editedRow}>
                                    <Save/>
                                </button>
                                : <button onClick={() => handleEdit(row.id)} className='custom-table__action-btn'>
                                    <PencilFill/>
                                </button>
                            }

                            {isEditMode && rowIDToEdit === row.id
                                ? <button onClick={() => handleCancelEditing()} className='custom-table__action-btn'>
                                    <XSquare/>
                                </button>
                                : <button onClick={() => handleRemoveRow(row.id)} className='custom-table__action-btn'>
                                    <Trash/>
                                </button>
                            }
                        </td>
                    }
                </tr>
            })}
            </tbody>
        </Table>
    );
};
export default EditableTable;