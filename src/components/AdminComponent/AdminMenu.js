import React, {useState} from 'react';
import CreateDepartment from "../UI/MyModal/MyModalAdmin/CreateDepartment";
import CreateJob from "../UI/MyModal/MyModalAdmin/CreateJob";
import CreateUser from "../UI/MyModal/MyModalAdmin/CreateUser";
import cl from "../DeviceComponent/BrandBar.module.css";


const AdminMenu = () => {
    const [depVisible, setDepVisible] = useState(false)
    const [positionVisible, setPositionVisible] = useState(false)
    const [userVisible, setUserVisible] = useState(false)


    return (
        <div className={cl.nav}>
            <input type="checkbox"/>
            <span></span>
            <span></span>
            <div className={cl.menu}>
                <button
                    className={cl.link}
                    onClick={() => setDepVisible(true)}
                >
                    Добавить отдел
                </button>
                <button
                    className={cl.link}
                    onClick={() => setPositionVisible(true)}
                >
                    Добавить должность
                </button>
                <button
                    className={cl.link}
                    onClick={() => setUserVisible(true)}
                >
                    Добавить работника
                </button>
            </div>
            <CreateDepartment show={depVisible} onHide={() => setDepVisible(false)}/>
            <CreateJob show={positionVisible} onHide={() => setPositionVisible(false)}/>
            <CreateUser show={userVisible} onHide={() => setUserVisible(false)}/>
        </div>
    );
};

export default AdminMenu;