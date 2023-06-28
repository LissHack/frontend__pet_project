import React, {useContext, useEffect} from 'react';
import NavbarAdmin from "../components/UI/Navbar/NavbarAdmin";
import {Card, Container} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import AdminMenu from "../components/AdminComponent/AdminMenu";
import DepartmentBar from "../components/AdminComponent/DepartmentBar";
import cl from "./DevicePage/DevicePage.module.css";
import UserList from "../components/AdminComponent/UserList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchDepartments, fetchJobs} from "../http/adminApi";

const Admin = observer(() => {
    const {user} = useContext(Context)

    useEffect(()=>{
        fetchDepartments().then(data => user.setDepartments(data))
        fetchJobs().then(data => user.setJobs(data))
    })


    return (
        <Container>
            <NavbarAdmin/>
            <AdminMenu/>
            <Form className={cl.container__device_page}>
                <Card>
                    <DepartmentBar/>
                </Card>
                <Card>
                    <UserList/>
                </Card>
            </Form>
        </Container>
    );
});

export default Admin;