import React, {useEffect, useState} from 'react';
import {Card, Container, Image, Row} from "react-bootstrap";
import NavbarStorage from "../../components/UI/Navbar/NavbarStorage";
import cl from './DevicePage.module.css'
import {useParams} from "react-router-dom";
import {fetchOneDevices} from "../../http/deviceAPI";

const DevicePage = () => {
    // const device = {id: 1, name: '25BK550Y', SN: '910NTGY2X975', state_at: 'Б/У'}
    // const description = [
    //     {id: 1, title: 'Оперативная память', description: '5 гб'},
    //     {id: 2, title: 'Камера', description: '12 мп'},
    //     {id: 3, title: 'Процессор', description: 'Пентиум 3'},
    //     {id: 4, title: 'Аккумулятор', description: '4000'},
    // ]

    const [device, setDevice] = useState({info: []})
    const {id} = useParams()

    useEffect(() => {
        fetchOneDevices(id).then(data => setDevice(data))
    }, [])

    return (
        <Container>
            <NavbarStorage/>
            <div className={cl.container__device_page}>

                <Card>
                    <Image className={cl.card__img} src={process.env.REACT_APP_API_URL + device.img}/>
                </Card>
                <Card className={cl.card__desc}>
                    <h3>Характеристики</h3>
                    {device.info.map((info, index) =>
                        <Row key={info.id}
                             style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                            {info.title}: {info.description}
                        </Row>
                    )}
                </Card>
            </div>
        </Container>
    );
};

export default DevicePage;