import React, {useState} from 'react';
import cl from './Auth.module.css'
import {observer} from "mobx-react-lite";


const Auth = observer(() => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


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