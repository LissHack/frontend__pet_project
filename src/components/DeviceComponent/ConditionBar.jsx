import React, {useContext, useEffect} from 'react';
import cl from "./BrandBar.module.css";
import {Context} from "../../index";
import {Dropdown, Form} from "react-bootstrap";
import {fetchConditions} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";


const ConditionBar = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchConditions().then(data => device.setConditions(data))
    }, [])


    return (
        <Form>
            <Dropdown className={cl.dropdown}>
                <Dropdown.Toggle className={cl.dropdown_btn}>
                    {device.selectedCondition.name || 'СОСТОЯНИЕ'}
                </Dropdown.Toggle>
                <Dropdown.Menu className={cl.dropdown_content}>
                    {device.conditions.map(condition =>
                        <Dropdown.Item
                            className={cl.dropdown__condition}
                            key={condition.id}
                            onClick={() => device.setSelectedCondition(condition)}
                        >
                            {condition.name}
                        </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
        </Form>

    );
});

export default ConditionBar;