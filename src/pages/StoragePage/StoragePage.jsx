import React from 'react';
import NavbarStorage from "../../components/UI/Navbar/NavbarStorage";
import cl from "../DevicePage/DevicePage.module.css";
import {Card} from "react-bootstrap";
import TypeBar from "../../components/TypeBar";
import DeviceList from "../../components/DeviceList";
import StorageMenu from "../../components/StorageMenu";

const StoragePage = () => {
    return (
        <div>
            <NavbarStorage/>
            <StorageMenu/>
            <div className={cl.container__device_page}>
                <Card>
                    <TypeBar/>
                </Card>
                <Card>
                    <DeviceList/>
                </Card>
            </div>
        </div>
    );
};

export default StoragePage;