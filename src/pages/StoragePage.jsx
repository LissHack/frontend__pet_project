import React from 'react';
import NavbarStorage from "../components/UI/Navbar/NavbarStorage";
import cl from "./DevicePage/DevicePage.module.css";
import {Card, Container} from "react-bootstrap";
import TypeBar from "../components/DeviceComponent/TypeBar";
import DeviceList from "../components/DeviceComponent/DeviceList";
import StorageMenu from "../components/DeviceComponent/StorageMenu";
import Form from "react-bootstrap/Form";
import BrandBar from "../components/DeviceComponent/BrandBar";
import ConditionBar from "../components/DeviceComponent/ConditionBar";

const StoragePage = () => {
    return (
        <Container>
            <NavbarStorage/>
            <StorageMenu/>
            <Form className={cl.container__device_page}>
                <Card>
                    <ConditionBar/>
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