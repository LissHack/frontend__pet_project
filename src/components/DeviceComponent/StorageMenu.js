import React, {useState} from 'react';
import CreateType from "../UI/MyModal/MyModalStorage/CreateType";
import CreateBrand from "../UI/MyModal/MyModalStorage/CreateBrands";
import CreateDevice from "../UI/MyModal/MyModalStorage/CreateDevice";
import cl from './BrandBar.module.css'

const StorageMenu = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [brandVisible, setBrandVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <div className={cl.nav}>
            <input type="checkbox"/>
            <span></span>
            <span></span>
            <div className={cl.menu}>
                <button className={cl.link}
                        onClick={() => setTypeVisible(true)}
                >
                    Добавить тип
                </button>
                <button className={cl.link}
                        onClick={() => setBrandVisible(true)}
                >
                    Добавить бренд
                </button>
                <button className={cl.link}
                        onClick={() => setDeviceVisible(true)}
                >
                    Добавить устройство
                </button>
            </div>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        </div>
    );
};

export default StorageMenu;