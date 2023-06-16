import React, {useContext, useMemo, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import cl from './TypeBar.module.css'
import {Container} from "react-bootstrap";

const TypeBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <Container className={cl.container__type_bar}>
            {device.types.map(type =>
                <card className={cl.card__type_bar}
                      key={type.id}
                      // active={type.id === device.selectedType.id}
                      onClick={() => device.setSelectedType(type)}
                >
                    {type.name}
                </card>
            )}
        </Container>
    );
});

export default TypeBar;