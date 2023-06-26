import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

import cl from "../DeviceComponent/DeviceItem.module.css";
import UserItem from "./UserItem";


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

    return (
        <div>

            <form className={cl.content__device_list}>
                <UserItem key={user.id} columns={columns} rows={user} actions/>
            </form>

        </div>
    );
});

export default UserList;