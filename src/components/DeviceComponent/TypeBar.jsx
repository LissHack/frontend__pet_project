import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import cl from './TypeBar.module.css'


const TypeBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <div className={cl.container__type_bar}>
            {device.types.map(type =>
                <form className={cl.card__type_bar}
                      key={type.id}
                      // active={type.id === device.selectedType.id}
                      onClick={() => device.setSelectedType(type)}
                >
                    {type.name}
                </form>
            )}
        </div>
    );
});

export default TypeBar;