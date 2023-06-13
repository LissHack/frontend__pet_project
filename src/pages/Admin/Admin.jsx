import React, {useState} from 'react';
import NavbarAdmin from "../../components/UI/Navbar/NavbarAdmin";
import MyButton from "../../components/UI/MyButton/MyButton";
import cl from './Admin.module.css'
import CreateDepartment from "../../components/UI/MyModal/MyModalAdmin/CreateDepartment";
import CreatePosition from "../../components/UI/MyModal/MyModalAdmin/CreatePosition";
import CreateUser from "../../components/UI/MyModal/MyModalAdmin/CreateUser";

const Admin = () => {
    const [depVisible, setDepVisible] = useState(false)
    const [positionVisible, setPositionVisible] = useState(false)
    const [userVisible, setUserVisible] = useState(false)

    return (
        <div>
            <NavbarAdmin/>
            <div className={cl.btn__admin}>
                <MyButton
                    onClick={() => setDepVisible(true)}
                >
                    Добавить отдел
                </MyButton>
                <MyButton
                    onClick={() => setPositionVisible(true)}
                >
                    Добавить должность
                </MyButton>
                <MyButton
                    onClick={() => setUserVisible(true)}
                >
                    Добавить работника
                </MyButton>
            </div>
            <CreateDepartment show={depVisible} onHide={() => setDepVisible(false)}/>
            <CreatePosition show={positionVisible} onHide={() => setPositionVisible(false)}/>
            <CreateUser show={userVisible} onHide={() => setUserVisible(false)}/>
        </div>
    );
};

export default Admin;