import React, {useState} from 'react';
import CreateType from "../UI/MyModal/MyModalStorage/CreateType";
import CreateBrand from "../UI/MyModal/MyModalStorage/CreateBrands";
import CreateDevice from "../UI/MyModal/MyModalStorage/CreateDevice";
import {Container} from "react-bootstrap";
import cl from './BrandBar.module.css'

const StorageMenu = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [brandVisible, setBrandVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <Container className={cl.container_bar}>
            <button className={cl.bar_btn}
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </button>
            <button className={cl.bar_btn}
                onClick={() => setBrandVisible(true)}
            >
                Добавить бренд
            </button>
            <button className={cl.bar_btn}
                onClick={() => setDeviceVisible(true)}
            >
                Добавить устройство
            </button>

            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>

        </Container>
    );
};

export default StorageMenu;