import React, {useContext, useEffect} from 'react';
import {Card} from "react-bootstrap";
import DeviceList from "../components/DeviceComponent/DeviceList";
import BrandBar from "../components/DeviceComponent/BrandBar";
import Pages from "../components/Pages";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchConditions, fetchDevices, fetchTypes} from "../http/deviceAPI";
import Form from "react-bootstrap/Form";
import ConditionBar from "../components/DeviceComponent/ConditionBar";
import TypeBar from "../components/DeviceComponent/TypeBar";
import cl from "./DevicesPage.module.css";

const DevicesPage = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchConditions().then(data => device.setConditions(data))
        fetchDevices(null, null, null, 1, 3).then(data => {
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
        <Form className={cl.form__device_page}>
            <Card className={cl.card__btns}>
                <ConditionBar/>
                <TypeBar/>
                <BrandBar/>
            </Card>
            <Card className={cl.card__items}>
                <DeviceList/>
                <Pages/>
            </Card>
        </Form>
    );
});

export default DevicesPage;