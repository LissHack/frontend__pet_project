import React, {useContext} from 'react';
import {Context} from "../../../index";
import {useNavigate} from "react-router-dom";
import cl from './Navbar.module.css'
import {LOGIN_ROUTE, ORDER_ROUTE, STORAGE_ROUTE} from "../../../utils/consts";
import {Button, Nav} from "react-bootstrap";
import MyButton from "../MyButton/MyButton";
import {observer} from "mobx-react-lite";

const NavbarAdmin = observer(() => {
    const {storage} = useContext(Context)
    const navigate = useNavigate()

    return (
        <div className={cl.navbar}>
            {storage.isAuth ?
                <Nav>
                    <MyButton onClick={() => navigate(STORAGE_ROUTE)}>
                        Назад
                    </MyButton>
                    <MyButton onClick={() => navigate(ORDER_ROUTE)}>
                        Заказы
                    </MyButton>
                    <MyButton onClick={() => navigate(LOGIN_ROUTE)}>
                        Выйти
                    </MyButton>
                </Nav>
                :
                <Nav>
                    <Button onClick={() => storage.setIsAuth(true)}>Авторизация</Button>
                </Nav>
            }
        </div>
    );
});

export default NavbarAdmin;