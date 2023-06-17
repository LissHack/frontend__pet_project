import React from 'react';
import NavbarAdmin from "../components/UI/Navbar/NavbarAdmin";
import {Card, Container} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import AdminMenu from "../components/AdminComponent/AdminMenu";

const Admin = () => {
    return (
        <Container>
            <NavbarAdmin/>
            <AdminMenu/>
            <Form>
                <Card>

                </Card>
            </Form>
        </Container>
    );
};

export default Admin;