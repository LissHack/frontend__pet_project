import React, {useContext, useEffect} from 'react';
import NavbarAdmin from "../components/UI/Navbar/NavbarAdmin";
import AdminMenu from "../components/AdminComponent/AdminMenu";
import DepartmentBar from "../components/AdminComponent/DepartmentBar";
import cl from "./StoragePage.module.css";
import UserList from "../components/AdminComponent/UserList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchDepartments, fetchJobs, fetchUsers} from "../http/adminApi";

const Admin = observer(() => {
    const {user} = useContext(Context)

    useEffect(() => {
        fetchDepartments().then(data => user.setDepartments(data))
        fetchJobs().then(data => user.setJobs(data))
        fetchUsers(null, null).then(data => {
            user.setUsers(data.rows)
        })
    }, [])

    useEffect(() => {
        fetchUsers(user.selectedJob.id, user.selectedDepartment.id).then(data => {
            user.setUsers(data.rows)
        })
    }, [user.selectedJob, user.selectedDepartment])

    return (
        <div className={cl.container__stor_page}>

            <div className={cl.content__stor_page}>
                <div className={cl.storage__navbar}>
                    <AdminMenu/>
                    <NavbarAdmin/>
                </div>
                <hr className={cl.hr}/>
                <div className={cl.menu__stor_page}>
                    <DepartmentBar/>
                </div>
                <div className={cl.form__menu}>
                    <UserList/>
                </div>
            </div>
        </div>
    );
});

export default Admin;