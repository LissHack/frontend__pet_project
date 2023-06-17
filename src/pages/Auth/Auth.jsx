import React, {useContext, useState} from 'react';
import cl from './Auth.module.css'
import {observer} from "mobx-react-lite";
import {LOGIN_ROUTE, USER_ROUTE} from "../../utils/consts";
import {login} from "../../http/userApi";
import {Context} from "../../index";
import {useNavigate} from "react-router-dom";


const Auth = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isLogin = location.pathname === LOGIN_ROUTE

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            }
            user.setUsers(data)
            user.setIsAuth(true)
            navigate(USER_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }


    return (
        <div className={cl.container_auth}>
            <form>
                <h2 className={cl.auth}>Авторизация</h2>
                <form className={cl.form_box}
                >
                    <input
                        className={cl.login_form_input}
                        type="email"
                        placeholder="Введите email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        className={cl.login_form_input}
                        type="password"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button
                        onClick={click}
                        className={cl.login_form_btn}
                        type="submit">
                        Войти
                    </button>
                </form>
            </form>
        </div>
    );
});


export default Auth;