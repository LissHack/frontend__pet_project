import React from 'react';
import {useNavigate} from "react-router-dom";
import {USER_PROFILE_ROUTE} from "../../utils/consts";
import {Image} from "react-bootstrap";

import cl from "../DeviceComponent/DeviceItem.module.css";


const UserItem = ({user}) => {

    const navigate = useNavigate()

    return (

        <div
            className={cl.content__device_list}
            onClick={() => navigate(USER_PROFILE_ROUTE)}
        >
            <form>
                <div>
                    <div>
                        <Image style={{width: 150, height: 150}}
                        src={user.img}
                    />
                    </div>
                    <div>
                        Имя: {user.name}<br/>
                        Фамилия: {user.lastname}<br/>
                        Отчество: {user.middlename}<br/>
                        Ранг: {user.grade}<br/>
                        email: {user.email}<br/>

                    </div>


                </div>
            </form>
        </div>
    )
        ;
};

export default UserItem;