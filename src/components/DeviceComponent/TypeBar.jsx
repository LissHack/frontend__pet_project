import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import cl from "./BrandBar.module.css";
import {Dropdown} from "react-bootstrap";
import {fetchTypes} from "../../http/deviceAPI";
import Form from "react-bootstrap/Form";

const TypeBar = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
    }, [])

    return (
        <Form>
            <Dropdown className={cl.dropdown}>
                <Dropdown.Toggle className={cl.dropdown_btn}>
                    {device.selectedType.name || 'ТИП'}
                </Dropdown.Toggle>
                <Dropdown.Menu className={cl.dropdown_content}>
                    {device.types.map(type =>
                        <Dropdown.Item
                            className={cl.dropdown__condition}
                            key={type.id}
                            onClick={() => device.setSelectedType(type)}
                        >
                            {type.name}
                        </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
        </Form>

    );
});

export default TypeBar;