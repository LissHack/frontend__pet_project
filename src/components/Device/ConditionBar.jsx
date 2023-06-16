import React, {useContext} from 'react';
import cl from "./BrandBar.module.css";
import {Context} from "../../index";

const ConditionBar = () => {
    const {device} = useContext(Context)

    return (
         <div className={cl.content__condition}>
                {device.conditions.map(condition =>
                <card className={cl.card__condition}
                    key={condition.id}
                    onClick={() => device.setSelectedCondition(condition)}
                >
                    {condition.name}
                </card>
            )}
            </div>
    );
};

export default ConditionBar;