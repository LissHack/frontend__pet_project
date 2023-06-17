import React, {useContext, useState} from 'react'
import {observer} from "mobx-react-lite";
import {Context} from "../../../../index";
import {Button,  Dropdown, Modal, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";


const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])
    const [name, setName] = useState('')
    const [useCount, setUseCount] = useState(0)
    // const [file, setFile] = useState(null)

    // useEffect(() => {
    //     fetchTypes().then(data => device.setTypes(data))
    //     fetchBrands().then(data => device.setBrands(data))
    // }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }
    // const selectFile = e => {
    //     setFile(e.target.files[0])
    // }

    // const addDevice = () => {
    //     const formData = new FormData
    //     formData.append('name', name)
    //     formData.append('count', `${useCount}`)
    //     formData.append('img', file)
    //     formData.append('BrandId', device.selectedBrand.id)
    //     formData.append('TypeId', device.selectedType.id)
    //     formData.append('info', JSON.stringify(info))
    //     createDevice(formData).then(data => onHide())
    // }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <div>
                Добавить устройство
            </div>

            <Form>
                <Dropdown className="mt-4">
                    <Dropdown.Toggle>{device.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.types.map(type =>
                            <Dropdown.Item
                                onClick={() => device.setSelectedType(type)}
                                key={type.id}>
                                {type.name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mt-4">
                    <Dropdown.Toggle>{device.selectedBrand.name || 'Выберите бренд'}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.brands.map(brand =>
                            <Dropdown.Item
                                onClick={() => device.setSelectedBrand(brand)}
                                key={brand.id}>
                                {brand.name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                    onClick={name}
                    onChange={e => setName(e.target.value)}
                    className="mt-4"
                    placeholder="Введите название устройства"
                />
                <Form.Control
                    onClick={useCount}
                    onChange={e => setUseCount(Number(e.target.value))}
                    placeholder="Введите количество"
                    type="number"
                />
                <Form.Control
                    type="file"
                />
                <hr/>
                <Button
                    onClick={addInfo}
                >
                    Добавить новое свойство
                </Button>
                {info.map(i =>
                    <Row key={i.number}>
                        <Form.Control
                            value={i.title}
                            onChange={e => changeInfo('title', e.target.value, i.number)}
                            placeholder="Введите название свойства"
                        />
                        <Form.Control
                            value={i.description}
                            onChange={e => changeInfo('description', e.target.value, i.number)}
                            placeholder="Введите описание свойства"
                        />
                        <Button
                            onClick={() => removeInfo(i.number)}
                        >
                            Удалить
                        </Button>
                    </Row>
                )}
            </Form>

            <Button onClick={onHide}>Закрыть</Button>
            <Button onClick={onHide}>Добавить</Button>

        </Modal>
    );
});

export default CreateDevice;