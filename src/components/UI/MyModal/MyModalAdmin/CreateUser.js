import React, {useContext} from 'react';
import Modal from "react-bootstrap/Modal";
import cl from "../MyModal.module.css";
import Form from "react-bootstrap/Form";
import {Card, Dropdown} from "react-bootstrap";
import MyInput from "../../input/MyInput";
import MyButton from "../../MyButton/MyButton";
import {Context} from "../../../../index";

const CreateUser = ({show, onHide}) => {
    const {user} = useContext(Context)
    return (
        <Modal className={cl.container__modal}
               show={show}
               onHide={onHide}
               size="lg"
               centered
        >
            <Form className={cl.modal}>
                <Card className={cl.content__modal}>
                    <h3>Добавить работника</h3>
                        <Dropdown.Toggle>Выберите должность</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {user.users.map(u =>
                                <Dropdown.Item>{u.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    <div className={cl.modal__btn}>
                        <MyButton onClick={onHide}>Закрыть</MyButton>
                        <MyButton onClick={onHide}>Добавить</MyButton>
                    </div>
                </Card>
            </Form>

        </Modal>
    );
};

export default CreateUser;