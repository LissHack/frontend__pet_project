import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import cl from './BrandBar.module.css'

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <div className={cl.container}>
            {device.brands.map(brand =>
                <card className={cl.content__brand_bar}
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