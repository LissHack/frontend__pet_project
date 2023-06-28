import React, {useContext, useEffect} from 'react';
import NavbarStorage from "../../components/UI/Navbar/NavbarStorage";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {getOrder} from "../../http/deviceAPI";

const OrderPage = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        getOrder().then(data => device.setOrders(data))
    }, [])

    return (
        <div>
            <NavbarStorage/>
            OrderPage
        </div>
    );
});

export default OrderPage;