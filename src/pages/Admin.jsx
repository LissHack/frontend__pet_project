import React from 'react';
import NavbarAdmin from "../components/UI/Navbar/NavbarAdmin";
import {Card, Container} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import AdminMenu from "../components/AdminComponent/AdminMenu";
import DepartmentBar from "../components/AdminComponent/DepartmentBar";
import cl from "./DevicePage/DevicePage.module.css";
import UserList from "../components/AdminComponent/UserList";

const Admin = () => {
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
};

export default Admin;