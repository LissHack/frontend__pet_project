import React, {useState} from 'react';
import cl from '../MyModal.module.css'
import {Card, Modal, Form} from "react-bootstrap";
import MyInput from "../../input/MyInput";
import MyButton from "../../MyButton/MyButton";
import {createBrand} from "../../../../http/deviceAPI";

const CreateBrand = ({show, onHide}) => {

    const [value, setValue] = useState('')
    const addBrand = () => {
        createBrand({name: value}).then(data => {
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
                    <h3>Добавить бренд</h3>
                    <MyInput
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={'Введите название бренда'}
                    />
                    <div className={cl.modal__btn}>
                        <MyButton onClick={onHide}>Закрыть</MyButton>
                        <MyButton onClick={addBrand}>Добавить</MyButton>
                    </div>
                </Card>
            </Form>

        </Modal>
    );
};

export default CreateBrand;