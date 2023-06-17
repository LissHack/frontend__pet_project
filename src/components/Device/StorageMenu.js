import React, {useState} from 'react';
import MyButton from "../UI/MyButton/MyButton";
import CreateType from "../UI/MyModal/MyModalStorage/CreateType";
import CreateBrand from "../UI/MyModal/MyModalStorage/CreateBrands";
import CreateDevice from "../UI/MyModal/MyModalStorage/CreateDevice";
import {Container} from "react-bootstrap";


const StorageMenu = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [brandVisible, setBrandVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <Container style={{padding: 10}}>
                <MyButton
                    onClick={() => setTypeVisible(true)}
                >
                    Добавить тип
                </MyButton>
                <MyButton
                    onClick={() => setBrandVisible(true)}
                >
                    Добавить бренд
                </MyButton>
                <MyButton
                    onClick={() => setDeviceVisible(true)}
                >
                    Добавить устройство
                </MyButton>

            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        </Container>
    );
};

export default StorageMenu;