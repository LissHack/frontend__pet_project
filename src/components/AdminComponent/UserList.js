import React, {useContext} from 'react';
import {Context} from "../../index";
import cl from "../DeviceComponent/DeviceItem.module.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import UserItem from "./UserItem";

const UserList = () => {
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
                <UserItem columns={columns} rows={user} actions/>
            </form>

        </div>
    );
};

export default UserList;