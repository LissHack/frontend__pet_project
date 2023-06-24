import React, {useContext} from 'react';
import {Context} from "../../../index";
import {useNavigate} from "react-router-dom";
import cl from './Navbar.module.css'
import {ADMIN_ROUTE, LOGIN_ROUTE, USER_ROUTE} from "../../../utils/consts";
import {Button, Nav} from "react-bootstrap";
import MyButton from "../MyButton/MyButton";
import {observer} from "mobx-react-lite";

const NavbarAdmin = observer(() => {
    const {admin} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        admin.setAdmin({})
        admin.setIsAuth(false)
        localStorage.removeItem('token')
    }


    return (
        <div className={cl.navbar}>
            {admin.isAuth ?
                <Nav>
                    <MyButton onClick={() => navigate(ADMIN_ROUTE)}>
                        Админ панель
                    </MyButton>
                    <MyButton onClick={() => logOut()}>
                        Выйти
                    < /MyButton>
                </Nav>
                :
                <Nav>
                    <Button onClick={() => navigate(ADMIN_ROUTE)}>Авторизация</Button>
                </Nav>
            }
        </div>
    );
});

export default NavbarAdmin;