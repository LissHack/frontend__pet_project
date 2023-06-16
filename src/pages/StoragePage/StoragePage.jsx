import React from 'react';
import NavbarStorage from "../../components/UI/Navbar/NavbarStorage";
import cl from "../DevicePage/DevicePage.module.css";
import {Card, Container} from "react-bootstrap";
import TypeBar from "../../components/TypeBar";
import DeviceList from "../../components/DeviceList";
import StorageMenu from "../../components/StorageMenu";
import Form from "react-bootstrap/Form";
import BrandBar from "../../components/BrandBar";

const StoragePage = () => {
    return (
        <Container>
            <NavbarStorage/>
            <StorageMenu/>
            <Form className={cl.container__device_page}>
                <Card>
                    <TypeBar/>
                </Card>
                <Card>
                    <BrandBar/>
                    <DeviceList/>
                </Card>
            </Form>
        </Container>
    );
};

export default StoragePage;