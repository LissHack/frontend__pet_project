import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import cl from './TypeBar.module.css'
import {Card, Container} from "react-bootstrap";

const TypeBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <Container className={cl.container__type_bar}>
            {device.types.map(type =>
                <Card className={cl.card__type_bar}
                      key={type.id}
                      // active={type.id === device.selectedType.id}
                      onClick={() => device.setSelectedType(type)}
                >
                    {type.name}
                </Card>
            )}
        </Container>
    );
});

export default TypeBar;