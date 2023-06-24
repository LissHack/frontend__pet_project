import React from 'react';
import {Image} from "react-bootstrap";
import cl from "./DeviceItem.module.css";
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()

    return (
        <div
            className={cl.content__device_list}
            onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
        >
            <form className={cl.card__device_list}>
                <div className={cl.card_name}>
                    <div>
                        {device.name}
                    </div>
                    <Image
                        className={cl.image__device_list}
                        src={process.env.REACT_APP_API_URL + device.img}
                    />
                    <div>{device.state_at}</div>
                </div>
            </form>
        </div>

    );
};

export default DeviceItem;