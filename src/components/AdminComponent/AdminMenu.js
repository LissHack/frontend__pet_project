import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import MyButton from "../UI/MyButton/MyButton";
import CreateDepartment from "../UI/MyModal/MyModalAdmin/CreateDepartment";
import CreatePosition from "../UI/MyModal/MyModalAdmin/CreatePosition";
import CreateUser from "../UI/MyModal/MyModalAdmin/CreateUser";


const AdminMenu = () => {
    const [depVisible, setDepVisible] = useState(false)
    const [positionVisible, setPositionVisible] = useState(false)
    const [userVisible, setUserVisible] = useState(false)


    return (
        <Container>
            <div style={{display: 'flex', padding: '20px 20px'}}>
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
        </Container>
    );
};

export default AdminMenu;