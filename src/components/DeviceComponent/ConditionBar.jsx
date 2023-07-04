import React, {useContext} from 'react';
import cl from "./BrandBar.module.css";
import {Context} from "../../index";
import {Dropdown} from "react-bootstrap";

const ConditionBar = () => {
    const {device} = useContext(Context)

    return (
        <Dropdown className={cl.dropdown}>
            <Dropdown.Toggle className={cl.dropdown_btn}>
                Состояние
            </Dropdown.Toggle >
            <Dropdown.Menu className={cl.dropdown_content}>
                {device.conditions.map(condition =>
                    <Dropdown.Item className={cl.dropdown__condition}
                          key={condition.id}
                          onClick={() => device.setSelectedCondition(condition)}
                    >
                        {condition.name}
                    </Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown>

        // <div className={cl.content__condition}>
        //     {device.conditions.map(condition =>
        //         <card className={cl.card__condition}
        //               key={condition.id}
        //               onClick={() => device.setSelectedCondition(condition)}
        //         >
        //             {condition.name}
        //         </card>
        //     )}
        // </div>
    );
};

export default ConditionBar;