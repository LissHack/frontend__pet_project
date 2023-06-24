import React, {useContext, useEffect} from 'react';
import NavbarStorage from "../components/UI/Navbar/NavbarStorage";
import cl from "./DevicePage/DevicePage.module.css";
import {Card, Container, Form} from "react-bootstrap";
import TypeBar from "../components/DeviceComponent/TypeBar";
import DeviceList from "../components/DeviceComponent/DeviceList";
import StorageMenu from "../components/DeviceComponent/StorageMenu";
import BrandBar from "../components/DeviceComponent/BrandBar";
import ConditionBar from "../components/DeviceComponent/ConditionBar";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchConditions, fetchDevices, fetchTypes} from "../http/deviceAPI";
import Pages from "../components/Pages";

const StoragePage = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchConditions().then(data => device.setConditions(data))
        fetchDevices(null, null,  null,1, 3).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.selectedCondition.id, device.page, 3).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType, device.selectedBrand, device.selectedCondition.id])

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
                    <Pages/>
                </Card>
            </Form>
        </Container>
    );
});

export default StoragePage;