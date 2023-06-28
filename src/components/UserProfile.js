import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import MyButton from "./UI/MyButton/MyButton";

const UserProfile = observer(() => {
    const {user, device} = useContext(Context)

    console.log(user)
    return (

        <div>

            Страница usera

            <MyButton>Добавить в заказ</MyButton>
        </div>
    );
});

export default UserProfile;