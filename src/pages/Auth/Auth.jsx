import React from 'react';
import cl from './Auth.module.css'
import {observer} from "mobx-react-lite";



const Auth = observer(() => {

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
                    />
                    <input
                        className={cl.login_form_input}
                        type="password"
                        placeholder="Введите пароль"
                    />
                    <button
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