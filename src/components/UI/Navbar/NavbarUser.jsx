import React, {useContext} from 'react';
import {Context} from "../../../index";
import {useNavigate} from "react-router-dom";
import cl from './Navbar.module.css'
import {LOGIN_ROUTE, REQUEST_ROUTE, USER_ROUTE} from "../../../utils/consts";
import {Button, Nav} from "react-bootstrap";
import MyButton from "../MyButton/MyButton";
import {observer} from "mobx-react-lite";

const NavbarAdmin = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = ()=> {
        user.setUsers({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }


    return (
        <div className={cl.navbar}>
            {user.isAuth ?
                <Nav>
                    <MyButton onClick={() => navigate(USER_ROUTE)}>
                        Назад
                    </MyButton>
                    <MyButton onClick={() => navigate(REQUEST_ROUTE)}>
                        Заказ
                    </MyButton>
                    <MyButton onClick={() => logOut()}>
                        Выйти
                    </MyButton>
                </Nav>
                :
                <Nav>
                    <Button onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                </Nav>
            }
        </div>
    );
});

export default NavbarAdmin;