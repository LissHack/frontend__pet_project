import React from 'react';

import {Card, Col, Image} from "react-bootstrap";
import cl from "./DeviceItem.module.css";

const DeviceItem = ({device}) => {
    return (
        <Col className={cl.content__device_list}>
            <Card className={cl.card__device_list}>
                <div className={cl.card_name}>
                    <div >
                        {device.name}
                    </div>
                    <Image
                        className={cl.image__device_list}
                        src={device.img}
                    />
                    <div>{device.state_at}</div>
                </div>
            </Card>
        </Col>

    );
};

export default DeviceItem;