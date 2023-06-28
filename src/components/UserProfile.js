import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const UserProfile = observer(() => {
    const {user} = useContext(Context)
    console.log(user)
    return (

        <div>

            Страница usera
        </div>
    );
});

export default UserProfile;