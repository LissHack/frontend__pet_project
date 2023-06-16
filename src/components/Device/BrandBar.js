import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import cl from './BrandBar.module.css'

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <div className={cl.content__brand}>
            {device.brands.map(brand =>
                <card className={cl.card__brand}
                      key={brand.id}
                      onClick={() => device.setSelectedBrand(brand)}
                >
                    {brand.name}
                </card>
            )}
        </div>
    );
});

export default BrandBar;