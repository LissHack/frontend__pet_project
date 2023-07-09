import React, {useContext, useEffect} from 'react';
import DeviceList from "../components/DeviceComponent/DeviceList";
import BrandBar from "../components/DeviceComponent/BrandBar";
import Pages from "../components/Pages";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchConditions, fetchDevices, fetchTypes} from "../http/deviceAPI";
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
        <div className={cl.container__device_page}>
            <div className={cl.card__bar}>
                <div className={cl.card__btn}>
                    <ConditionBar/>
                    <TypeBar/>
                    <BrandBar/>
                </div>
            </div>
            <div className={cl.card__devices}>
                <div className={cl.card__items}>
                    <DeviceList/>
                </div>
                <div className={cl.card__pages}>
                    <Pages/>
                </div>
            </div>
        </div>
    );
});

export default DevicesPage;