import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import NavbarStorage from "../../components/UI/Navbar/NavbarStorage";
import TypeBar from "../../components/TypeBar";
import DeviceList from "../../components/DeviceList";
import cl from './DevicePage.module.css'

const DevicePage = () => {
    return (
        <div>
            <NavbarStorage/>
            <div className={cl.container__device_page}>

                <Card>
                    <DeviceList/>
                </Card>
            </div>
        </div>
    );
};

export default DevicePage;