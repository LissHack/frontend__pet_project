import React, {useContext} from 'react';
import {Context} from "../../../index";
import {useNavigate} from "react-router-dom";
import cl from './Navbar.module.css'
import {LOGIN_ROUTE, ORDER_ROUTE, STORAGE_ROUTE} from "../../../utils/consts";

import MyButton from "../MyButton/MyButton";
import {observer} from "mobx-react-lite";

const NavbarStorage = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = ()=> {
        user.setIsStorage({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }


    return (
        <div className={cl.navbar}>
            {user.isAuth ?
                <nav>
                    <MyButton onClick={() => navigate(STORAGE_ROUTE)}>
                        Назад
                    </MyButton>
                    <MyButton onClick={() => navigate(ORDER_ROUTE)}>
                        Заказы
                    </MyButton>
                    <MyButton
                        onClick={() => logOut()}
                    >
                        Выйти
                    </MyButton>
                </nav>
                :
                <nav>
                    <MyButton onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</MyButton>
                </nav>
            }
        </div>
    );
});

export default NavbarStorage;