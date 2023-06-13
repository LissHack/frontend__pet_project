import React from 'react';
import Modal from "react-bootstrap/Modal";

import cl from '../MyModal.module.css'
import {Card} from "react-bootstrap";
import MyInput from "../../input/MyInput";
import Form from "react-bootstrap/Form";
import MyButton from "../../MyButton/MyButton";

const CreateDepartment = ({show, onHide}) => {
    return (
        <Modal className={cl.container__modal}
               show={show}
               onHide={onHide}
               size="lg"
               centered
        >
            <Form className={cl.modal}>
                <Card className={cl.content__modal}>
                    <h3>Добавить отдел</h3>
                    <MyInput
                        placeholder={'Введите название отдела'}
                    />
                    <div className={cl.modal__btn}>
                        <MyButton onClick={onHide}>Закрыть</MyButton>
                        <MyButton onClick={onHide}>Добавить</MyButton>
                    </div>
                </Card>
            </Form>

        </Modal>
    );
};

export default CreateDepartment;