import React, {useContext} from 'react';
import {Context} from "../../../index";
import {useNavigate} from "react-router-dom";
import cl from './Navbar.module.css'
import {LOGIN_ROUTE} from "../../../utils/consts";
import {Nav} from "react-bootstrap";
import MyButton from "../MyButton/MyButton";
import {observer} from "mobx-react-lite";

const NavbarAdmin = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setIsAdmin({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }


    return (
        <div className={cl.navbar}>
            {user.isAuth ?
                <Nav>
                    <MyButton onClick={() => logOut()}>
                        Выйти
                    < /MyButton>
                </Nav>
                :
                <Nav>
                    <MyButton onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</MyButton>
                </Nav>
            }
        </div>
    );
});

export default NavbarAdmin;