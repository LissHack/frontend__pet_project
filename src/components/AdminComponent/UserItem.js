import React, {useState} from 'react';
import {Container, Form, Table} from "react-bootstrap";
// import {USER_PROFILE_ROUTE} from "../../utils/consts";
// import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {PencilFill, Save, Trash, XSquare} from "react-bootstrap-icons";


const UserItem = observer(({columns, rows, actions}) => {
    // const navigate = useNavigate()
    const [isEditMode, setIsEditMode] = useState(false);
    const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
    const [rowsState, setRowsState] = useState(rows);
    const [editedRow, setEditedRow] = useState();


    const editRow = (id) => {
        setIsEditMode(true);
        setEditedRow(undefined);
        setRowIDToEdit(id);
    }


    const onChangeField = (e, id) => {
        const {name: fieldName, value} = e.target;
        setEditedRow({
            id: id,
            [fieldName]: value
        })
    }

    const saveRowChanges = (key, value, number) => {
        setIsEditMode(false);
        setRowsState(rowsState.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const cancelEditing = () => {
        setIsEditMode(false);
        setEditedRow(undefined);
    }

    function removeRow(id) {
        setRowsState(rowsState.filter(row => row.id !== id))
    }

    return (
        <Container
            // onClick={() => navigate(USER_PROFILE_ROUTE)}
        >
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
                                    defaultValue={editedRow ? editedRow.name : row.name}
                                    id={row.id}
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
                                    id={row.id}
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
                                    id={row.id}
                                    name='middlename'
                                    onChange={(e) => onChangeField(e, row.id)}
                                />
                                : row.middlename
                            }
                        </td>
                        <td>
                            {isEditMode && rowIDToEdit === row.id
                                ? <Form.Control
                                    type='text'
                                    defaultValue={editedRow ? editedRow.grade : row.grade}
                                    id={row.id}
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
                                    id={row.id}
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
                                    <button onClick={() => cancelEditing()} className='custom-table__action-btn'>
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
        </Container>
    );
});

export default UserItem;