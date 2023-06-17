import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Card, Row} from "react-bootstrap";
import UserItem from "./UserItem";
import MyButton from "../UI/MyButton/MyButton";


const UserList = observer(() => {
    const {user} = useContext(Context)
    return (
        <Row>
            {user.users.map(user =>
                <Card>
                    <UserItem key={user.id} user={user}/>

                    <MyButton>Удалить</MyButton>
                </Card>
            )}

        </Row>
    );
});

export default UserList;