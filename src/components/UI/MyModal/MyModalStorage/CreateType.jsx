import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import cl from '../MyModal.module.css'
import {Card} from "react-bootstrap";
import MyInput from "../../input/MyInput";
import Form from "react-bootstrap/Form";
import MyButton from "../../MyButton/MyButton";
import {createType} from "../../../../http/deviceAPI";

const CreateType = ({show, onHide}) => {

    const [value, setValue] = useState('')
    const addType = () => {
        createType({name: value}).then(data => {
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
                    <h3>Добавить тип</h3>
                    <MyInput
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={'Введите название типа'}
                    />
                    <div className={cl.modal__btn}>
                        <MyButton onClick={onHide}>Закрыть</MyButton>
                        <MyButton onClick={addType}>Добавить</MyButton>
                    </div>
                </Card>
            </Form>

        </Modal>
    );
};

export default CreateType;