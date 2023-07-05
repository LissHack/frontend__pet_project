import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Dropdown} from "react-bootstrap";
import cl from "./BrandBar.module.css";
import {fetchTypes} from "../../http/deviceAPI";

const TypeBar = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
    }, [])

    return (
        <Dropdown className={cl.dropdown}>
            <Dropdown.Toggle className={cl.dropdown_btn}>
                Тип
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
    );
});

export default TypeBar;