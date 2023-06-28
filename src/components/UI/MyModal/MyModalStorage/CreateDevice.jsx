import React, {useContext, useEffect, useState} from 'react'
import {observer} from "mobx-react-lite";
import {Context} from "../../../../index";
import {Card, Dropdown, Modal, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import cl from '../MyModal.module.css'
import MyButton from "../../MyButton/MyButton";
import {createDevice, fetchBrands, fetchConditions, fetchTypes} from "../../../../http/deviceAPI";


const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])
    const [name, setName] = useState('')
    const [useCount, setUseCount] = useState(1)
    const [file, setFile] = useState(null)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchConditions().then(data => device.setConditions(data))

    }, [])

    const addInfo = (e) => {
        e.preventDefault()
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }
    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        try {
            formData.append('name', name)
            formData.append('count', `${useCount}`)
            formData.append('img', file)
            formData.append('BrandId', device.selectedBrand.id)
            formData.append('TypeId', device.selectedType.id)
            formData.append('ConditionId', device.selectedCondition.id)
            formData.append('info', JSON.stringify(info))
            createDevice(formData).then(data => onHide())
        } catch (e) {
            alert(e)
        }
    }

    return (
        <Modal className={cl.container__modal}
               show={show}
               onHide={onHide}
               size="lg"
               centered
        >
            {/*<Modal.Title>*/}
            {/*    Добавить устройство*/}
            {/*</Modal.Title>*/}

            <Form className={cl.modal} style={{padding: 40}}>
                <Dropdown className={cl.modal__dropdown}>
                    <Dropdown.Toggle
                        className={cl.modal__dropdown_btn}>{device.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
                    <Dropdown.Menu className={cl.modal__dropdown_content}>
                        {device.types.map(type =>
                            <Dropdown.Item
                                onClick={() => device.setSelectedType(type)}
                                key={type.id}
                            >
                                {type.name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className={cl.modal__dropdown}>
                    <Dropdown.Toggle
                        className={cl.modal__dropdown_btn}>{device.selectedBrand.name || 'Выберите бренд'}</Dropdown.Toggle>
                    <Dropdown.Menu className={cl.modal__dropdown_content}>
                        {device.brands.map(brand =>
                            <Dropdown.Item
                                onClick={() => device.setSelectedBrand(brand)}
                                key={brand.id}>
                                {brand.name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className={cl.modal__dropdown}>
                    <Dropdown.Toggle
                        className={cl.modal__dropdown_btn}>{device.selectedCondition.name || 'Выберите состояние'}</Dropdown.Toggle>
                    <Dropdown.Menu className={cl.modal__dropdown_content}>
                        {device.conditions.map(condition =>
                            <Dropdown.Item
                                onClick={() => device.setSelectedCondition(condition)}
                                key={condition.id}>
                                {condition.name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                    className={cl.modal__input}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Введите название устройства"
                />
                <Form.Control
                    className={cl.modal__input}
                    value={useCount}
                    onChange={e => setUseCount(Number(e.target.value))}
                    placeholder="Введите количество"
                    type="number"
                />
                <Form.Control
                    className={cl.modal__input}
                    onChange={selectFile}
                    type="file"
                />
                <hr/>
                <MyButton
                    onClick={addInfo}
                >
                    Добавить новое свойство
                </MyButton>
                {info.map(i =>
                    <Row key={i.number}>
                        <Form.Control
                            className={cl.modal__input}
                            value={i.title}
                            onChange={e => changeInfo('title', e.target.value, i.number)}
                            placeholder="Введите название свойства"
                        />
                        <Form.Control
                            className={cl.modal__input}
                            value={i.description}
                            onChange={e => changeInfo('description', e.target.value, i.number)}
                            placeholder="Введите описание свойства"
                        />
                        <MyButton
                            onClick={() => removeInfo(i.number)}
                        >
                            Удалить
                        </MyButton>
                    </Row>
                )}
                <Card className={cl.modal__footer_btn}>
                    <MyButton onClick={onHide}>Закрыть</MyButton>
                    <MyButton onClick={addDevice}>Добавить</MyButton>
                </Card>
            </Form>
        </Modal>
    );
});

export default CreateDevice;