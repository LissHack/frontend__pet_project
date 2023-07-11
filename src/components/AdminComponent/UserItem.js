import React, {useContext, useEffect, useState} from 'react';
import {Form, Table} from "react-bootstrap";
// import {observer} from "mobx-react-lite";
import {PencilFill, Save, Trash, XSquare} from "react-bootstrap-icons";
import {Context} from "../../index";
import cl from './UserItem.module.css'
import {fetchUsers} from "../../http/adminApi";
// import 'bootstrap/dist/css/bootstrap.min.css';


const UserItem = ({columns, rows, actions}) => {
    const {user} = useContext(Context);
    const [edit, setEdit] = useState(false);
    const [rowId, setRowId] = useState(undefined);
    const [rowsState, setRowsState] = useState(rows);
    const [editedRow, setEditedRow] = useState();

    useEffect(() => {
        fetchUsers().then(data => user.setUsers(data))
    })

    const editRow = (id) => {
        setEdit(true);
        setEditedRow(undefined);
        setRowId(id);
    }

    const onChangeField = (e, id) => {
        e.preventDefault()
        const {name: fieldName, value} = e.target;

        setEditedRow({
            id: id,
            [fieldName]: value
        })
    }

    const saveRowChanges = () => {
        setTimeout(() => {
            setEdit(false);

            setRowsState(
                rowsState.map(row => {
                    if (row.id === editedRow.id) {
                        if (editedRow.firstname) row.firstname = editedRow.firstname;
                        if (editedRow.lastname) row.lastname = editedRow.lastname;
                        if (editedRow.middlename) row.middlename = editedRow.middlename;
                        if (editedRow.grade) row.grade = editedRow.grade;
                        if (editedRow.email) row.email = editedRow.email;
                        if (editedRow.role) row.role = editedRow.role;
                    }
                    return row
                }))
            setEditedRow(undefined)
        }, 1000)
    }


    const stopEdit = () => {
        setEdit(false);
        setEditedRow(undefined);
    }

    const removeRow = (id) => {
        setRowsState(rowsState.filter(i => {
            return i.id !== id ? i : null
        }))
    }

    return (

        <Table striped bordered hover>
            <thead>
            <tr>
                {columns.map(column => {
                    return <th key={column.field}>{column.fieldName}</th>
                })}
            </tr>
            </thead>
            <tbody>
            {user.users.map(row => {
                return <tr key={row.id}>
                    <td>
                        {row.id}
                    </td>
                    <td>
                        {edit && rowId === row.id
                            ? <Form.Control
                                type='text'
                                name='name'
                                defaultValue={editedRow ? editedRow.name : row.name}
                                onChange={(e) => onChangeField(e, row.id)}
                            />
                            : row.name
                        }
                    </td>
                    <td>
                        {edit && rowId === row.id
                            ? <Form.Control
                                type='text'
                                name='lastName'
                                defaultValue={editedRow ? editedRow.lastname : row.lastname}
                                onChange={(e) => onChangeField(e, row.id)}
                            />
                            : row.lastname
                        }
                    </td>
                    <td>
                        {edit && rowId === row.id
                            ? <Form.Control
                                type='text'
                                name='middlename'
                                defaultValue={editedRow ? editedRow.middlename : row.middlename}
                                onChange={(e) => onChangeField(e, row.id)}
                            />
                            : row.middlename
                        }
                    </td>
                    <td>
                        {edit && rowId === row.id
                            ? <Form.Control
                                type='number'
                                name='grade'
                                defaultValue={editedRow ? editedRow.grade : row.grade}
                                onChange={(e) => onChangeField(e, row.id)}
                            />
                            : row.grade
                        }
                    </td>
                    <td>
                        {edit && rowId === row.id
                            ? <Form.Control
                                type='text'
                                name='email'
                                defaultValue={editedRow ? editedRow.email : row.email}
                                onChange={(e) => onChangeField(e, row.id)}
                            />
                            : row.email
                        }
                    </td>
                    <td>
                        {edit && rowId === row.id
                            ? <Form.Select
                                onChange={e => onChangeField(e, row.id)}
                                name="role"
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
                            {edit && rowId === row.id
                                ?
                                <button
                                    className={cl.custom_table__action_btn}
                                    onClick={() => saveRowChanges()}
                                    disabled={!editedRow}>
                                    <Save/>
                                </button>
                                : <button
                                    className={cl.custom_table__action_btn}
                                    onClick={() => editRow(row.id)}
                                >
                                    <PencilFill/>
                                </button>
                            }

                            {edit && rowId
                            === row.id
                                ?
                                <button
                                    onClick={() => stopEdit()}
                                    className={cl.custom_table__action_btn}
                                >
                                    <XSquare/>
                                </button>
                                : <button
                                    onClick={() => removeRow(row.id)}
                                    className={cl.custom_table__action_btn}
                                >
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

export default UserItem;