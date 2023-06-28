import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import MyButton from "../../MyButton/MyButton";
import cl from '../MyModal.module.css'
import {Card} from "react-bootstrap";
import MyInput from "../../input/MyInput";
import Form from "react-bootstrap/Form";
import {createJob} from "../../../../http/adminApi";


const CreateJob = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const addJob = () => {
        createJob({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <Modal className={cl.container__modal}
               show={show}
               onHide={onHide}
               size="lg"
               centered
        >
            <Form className={cl.modal}>
                <Card className={cl.content__modal}>
                    <h3>Добавить должность</h3>
                    <MyInput
                        placeholder={'Введите название должности'}
                    />
                    <div className={cl.modal__btn}>
                        <MyButton onClick={onHide}>Закрыть</MyButton>
                        <MyButton onClick={addJob}>Добавить</MyButton>
                    </div>
                </Card>
            </Form>

        </Modal>
    );
};

export default CreateJob;