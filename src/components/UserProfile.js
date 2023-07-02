import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import cl from './UserProfile.module.css'
import {Context} from "../index";

const UserProfile = observer(() => {
    const {user} = useContext(Context)

    // const getUser = ()=> {
    //
    // }

    if (user === user.id) {
        console.log(
            user.name,
            user.lastname,
        )
    }

    // console.log(user)
    return (

        <div className={cl.container__user}>

            <form className={cl.card__form}>
                <div className={cl.profile__form}>
                    <img
                        className={cl.image__form}
                        src={process.env.REACT_APP_API_URL + user.img}
                        alt='logo'
                    />
                    <h3>{user.name}</h3>
                </div>
                <div className={cl.device__form}>

                </div>

            </form>
        </div>
    );
});

export default UserProfile;