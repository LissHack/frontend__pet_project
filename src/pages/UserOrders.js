import React, {useEffect, useState} from 'react';
import { userGetAll as getAllOrders } from '../http/orderAPI.js'
import {Container} from "react-bootstrap";
import Loader from "../components/UI/Loader/Loader";
import Orders from "../components/Orders";
const UserOrders = () => {
     const [orders, setOrders] = useState(null)
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        getAllOrders()
            .then(
                data => setOrders(data)
            )
            .finally(
                () => setFetching(false)
            )
    }, [])

    if (fetching) {
        return <Loader/>
    }

    return (
        <Container>
            <h1>Ваши заказы</h1>
            <Orders items={orders} admin={false} />
        </Container>
    )
};

export default UserOrders;