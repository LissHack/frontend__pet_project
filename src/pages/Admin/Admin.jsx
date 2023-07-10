import React, {useContext, useEffect} from 'react';
import NavbarAdmin from "../../components/UI/Navbar/NavbarAdmin";
import AdminMenu from "../../components/AdminComponent/AdminMenu";
import cl from "./Admin.module.css";
import UserList from "../../components/AdminComponent/UserList";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {fetchDepartments, fetchJobs, fetchUsers} from "../../http/adminApi";
import MenuListAdmin from "../../components/UI/menu/MenuListAdmin";

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
        <div className={cl.container__admin_page}>

            <div className={cl.content__admin_page}>
                <div className={cl.admin__navbar}>
                    <AdminMenu/>
                    <NavbarAdmin/>
                </div>
                <hr className={cl.hr}/>
                <div className={cl.menu__admin_page}>
                    <MenuListAdmin/>
                </div>
                <div className={cl.form__user_list}>
                    <UserList/>
                </div>
            </div>
        </div>
    );
});

export default Admin;