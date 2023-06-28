import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import cl from "../DeviceComponent/DeviceItem.module.css";
import UserItem from "./UserItem";
import 'bootstrap/dist/css/bootstrap.min.css';


const UserList = observer(() => {
    const {user} = useContext(Context)
    const columns = [
        {field: 'id', fieldName: '#'},
        {field: 'name', fieldName: 'Имя'},
        {field: 'lastname', fieldName: 'Фамилия'},
        {field: 'middlename', fieldName: 'Отчество'},
        {field: 'grade', fieldName: 'Ранг'},
        {field: 'email', fieldName: 'Почта'},
        {field: 'role', fieldName: 'Роль'},
    ];

    const users = [
        {
            id: 1,
            name: 'Иван',
            lastname: 'Иванов',
            middlename: 'Иванович',
            grade: 1,
            email: 'ivanov@email.com',
            role: 'Admin'
        },
        {
            id: 2,
            name: 'Петр',
            lastname: 'Петров',
            middlename: 'Петрович',
            grade: 3,
            email: 'petrov@email.com',
            role: 'Storage'
        },
        {
            id: 3,
            name: 'Клим',
            lastname: 'Пупкин',
            middlename: 'Александрович',
            grade: 2,
            email: 'pupkin@email.com',
            role: 'User'
        },
        {
            id: 4,
            name: 'Алексей',
            lastname: 'Сидоров',
            middlename: 'Сергеевич',
            grade: 1,
            email: 'sidorov@email.com',
            role: 'User'
        },

    ]

    return (
        <div>
            <form className={cl.content__device_list}>
                {/*<UserItem columns={columns}/>*/}
                <UserItem key={user.id} columns={columns} rows={users} actions/>
            </form>

        </div>
    );
});

export default UserList;