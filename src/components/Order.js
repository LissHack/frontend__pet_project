import React from 'react';
import {Table} from "react-bootstrap";

const Order = (props) => {
    return (
        <>
            <ul>
                {/*<li>Дата заказа: {props.data.OrderDetailsDto}</li>*/}
                <li>Дата заказа: </li>

                <li>
                    Статус заказа:
                    {props.data.status === 0 && <span>Новый</span>}
                    {props.data.status === 1 && <span>В работе</span>}
                    {props.data.status === 2 && <span>Завершен</span>}
                </li>
            </ul>
            <ul>
                <li>Имя, фамилия: {props.data.name}</li>
                <li>Адрес почты: {props.data.email}</li>
                <li>Комментарий: {props.data.comment}</li>
            </ul>
            <Table bordered hover size="sm" className="mt-3">
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Кол-во</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.items.map(item =>
                        <tr key={item.id}>
                            <td>{item.name}</td>
                        </tr>
                    )}
                    <tr>
                        <td>{props.data.amount}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
};

export default Order;