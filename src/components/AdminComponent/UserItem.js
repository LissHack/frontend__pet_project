import React, {useContext, useState} from 'react';
import {Form, Table} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {PencilFill, Save, Trash, XSquare} from "react-bootstrap-icons";
import {Context} from "../../index";


const UserItem = observer(({columns, rows, actions}) => {
    const {user} = useContext(Context)
    const [isEditMode, setIsEditMode] = useState(false);
    const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
    const [rowsState, setRowsState] = useState([]);
    const [editedRow, setEditedRow] = useState();

    const editRow = (rowID) => {
        setIsEditMode(true);
        setEditedRow(undefined);
        setRowIDToEdit(rowID);
    }

    const onChangeField = (e, rowID) => {
        const {name: fieldName, value} = e.target.value;
        setEditedRow({
            id: rowID,
            [fieldName]: value
        })
    }
    const saveRowChanges = () => {

        setIsEditMode(false);
        setRowsState(
            rowsState.map(row => {
                if (row.id === editedRow.id) {
                    if (editedRow.firstname) {
                        row.firstname = editedRow.firstname;
                    }
                    if (editedRow.lastname) {
                        row.lastname = editedRow.lastname;
                    }
                    if (editedRow.middlename) {
                        row.middlename = editedRow.middlename;
                    }
                    if (editedRow.grade) {
                        row.grade = editedRow.grade;
                    }
                    if (editedRow.email) {
                        row.email = editedRow.email;
                    }

                    if (editedRow.role) {
                        row.role = editedRow.role;
                    }
                }
                return row
            })
        )
        setEditedRow(undefined)
    }


    const stopEdit = () => {
        setIsEditMode(false);
        setEditedRow(undefined);
    }

    const removeRow = (rowID) => {
        setRowsState(rowsState.filter(row => row.id !== rowID))
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
            {user.users.map((row) => {
                return <tr key={row.id}>
                    <td>
                        {row.id}
                    </td>
                    <td>
                        {isEditMode && rowIDToEdit === row.id
                            ? <Form.Control
                                type='text'
                                defaultValue={editedRow ? editedRow.name : row.name}
                                name='name'
                                onChange={(e) => onChangeField(e, row.id)}
                            />
                            : row.name
                        }
                    </td>
                    <td>
                        {isEditMode && rowIDToEdit === row.id
                            ? <Form.Control
                                type='text'
                                defaultValue={editedRow ? editedRow.lastname : row.lastname}
                                name='lastName'
                                onChange={(e) => onChangeField(e, row.id)}
                            />
                            : row.lastname
                        }
                    </td>
                    <td>
                        {isEditMode && rowIDToEdit === row.id
                            ? <Form.Control
                                type='text'
                                defaultValue={editedRow ? editedRow.middlename : row.middlename}
                                name='middlename'
                                onChange={(e) => onChangeField(e, row.id)}
                            />
                            : row.middlename
                        }
                    </td>
                    <td>
                        {isEditMode && rowIDToEdit === row.id
                            ? <Form.Control
                                type='number'
                                defaultValue={editedRow ? editedRow.grade : row.grade}
                                name='grade'
                                onChange={(e) => onChangeField(e, row.id)}
                            />
                            : row.grade
                        }
                    </td>
                    <td>
                        {isEditMode && rowIDToEdit === row.id
                            ? <Form.Control
                                type='text'
                                defaultValue={editedRow ? editedRow.email : row.email}
                                name='email'
                                onChange={(e) => onChangeField(e, row.id)}
                            />
                            : row.email
                        }
                    </td>
                    <td>
                        {isEditMode && rowIDToEdit === row.id
                            ? <Form.Select onChange={e => onChangeField(e, row.id)} name="role"
                                           defaultValue={row.role}>
                                <option value='Admin'>Admin</option>
                                <option value='Storage'>Storage</option>
                                <option value='User'>User</option>
                            </Form.Select>
                            : row.role
                        }
                    </td>
                    {actions &&
                        <td>
                            {isEditMode && rowIDToEdit === row.id
                                ?
                                <button onClick={() => saveRowChanges()} className='custom-table__action-btn'
                                        disabled={!editedRow}>
                                    <Save/>
                                </button>
                                : <button onClick={() => editRow(row.id)} className='custom-table__action-btn'>
                                    <PencilFill/>
                                </button>
                            }

                            {isEditMode && rowIDToEdit === row.id
                                ?
                                <button onClick={() => stopEdit()} className='custom-table__action-btn'>
                                    <XSquare/>
                                </button>
                                : <button onClick={() => removeRow(row.id)}
                                          className='custom-table__action-btn'>
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
});

export default UserItem;