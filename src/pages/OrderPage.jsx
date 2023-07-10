import React, {useContext, useEffect} from 'react';
import NavbarStorage from "../components/UI/Navbar/NavbarStorage";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {getOrder} from "../http/deviceAPI";
import cl from "./StoragePage.module.css";
import MenuListStorage from "../components/UI/menu/MenuListStorage";

const OrderPage = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        getOrder().then(data => device.setOrders(data))
    }, [])

    return (
        <div className={cl.container__order_page}>
            <div className={cl.content__order_page}>
                <div className={cl.storage__navbar}>
                    <NavbarStorage/>
                </div>
                <hr className={cl.hr}/>
                <div>
                    <h3>OrderPage</h3>
                </div>
                <div className={cl.menu__stor_page}>
                    <MenuListStorage/>
                </div>
            </div>
        </div>

    );
});

export default OrderPage;