import React from 'react';
import NavbarAdmin from "../../components/UI/Navbar/NavbarAdmin";
import cl from './Admin.module.css'
import MyButton from "../../components/UI/MyButton/MyButton";
const Admin = () => {
    return (
        <div>
           <NavbarAdmin/>
            <div className={cl.container__admin}>
                <MyButton>Добавить работника</MyButton>
                <MyButton>Добавить отдел</MyButton>
                <MyButton>добавить должность</MyButton>
            </div>
        </div>
    );
};

export default Admin;