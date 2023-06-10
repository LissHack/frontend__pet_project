import React, {useContext} from 'react';
import {Context} from "../../../index";
import {useNavigate} from "react-router-dom";
import cl from './Navbar.module.css'
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../../../utils/consts";
import {Button, Nav} from "react-bootstrap";
import MyButton from "../MyButton/MyButton";
import {observer} from "mobx-react-lite";

const NavbarAdmin = observer(() => {
    const {admin} = useContext(Context)
    const navigate = useNavigate()

    return (
        <div className={cl.navbar}>
            {admin.isAuth ?
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <MyButton
                        variant={'outline-light'}
                        onClick={() => navigate(ADMIN_ROUTE)}
                    >
                        Админ панель
                    </MyButton>
                    <MyButton
                        variant={'outline-light'}
                        onClick={() => navigate(LOGIN_ROUTE)}
                        className="ml-2"
                    >
                        Выйти
                    </MyButton>
                </Nav>
                :
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button variant={'outline-light'} onClick={() => admin.setIsAuth(true)}>Авторизация</Button>
                </Nav>
            }
        </div>
    );
});

export default NavbarAdmin;