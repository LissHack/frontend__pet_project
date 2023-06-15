import React, {useContext, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Card, Col, Dropdown, Row} from "react-bootstrap";

import Form from "react-bootstrap/Form";
import MyButton from "../../MyButton/MyButton";
import {Context} from "../../../../index";
import cl from "../MyModal.module.css";
import MyInput from "../../input/MyInput";


const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <Modal className={cl.container__modal}
               show={show}
               onHide={onHide}
               size="lg"
               centered
        >
            <Form className={cl.modal}>
                <Card>
                    <Dropdown className="mt-4">
                        <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-4">
                        <Dropdown.Toggle>Выберите брэнд</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <MyInput
                        placeholder="Введите название устройства"/>
                    <MyInput
                        type="file"/>
                    <hr/>
                    <MyButton onClick={addInfo}>Добавить новое свойство</MyButton>
                    {info.map(i =>
                        <Row className="mt-2" key={i.number}>

                            <MyInput placeholder="Введите название свойства"/>

                            <MyInput placeholder="Введите описание свойства"/>

                            <MyButton onClick={() => removeInfo(i.number)}>
                                Удалить
                            </MyButton>

                        </Row>
                    )}
                    <Card>
                        <MyButton variant="outline-danger" onClick={onHide}>Закрыть</MyButton>
                        <MyButton variant="outline-success" onClick={onHide}>Добавить</MyButton>

                    </Card>

                </Card>
            </Form>
        </Modal>
    );
};

export default CreateDevice;