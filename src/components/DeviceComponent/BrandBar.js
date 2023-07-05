import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import cl from './BrandBar.module.css'
import {Dropdown} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <Dropdown className={cl.dropdown}>
            <Dropdown.Toggle className={cl.dropdown_btn}>
                Бренд
            </Dropdown.Toggle>
            <Dropdown.Menu className={cl.dropdown_content}>
                {device.brands.map(brand =>
                    <Dropdown.Item
                        className={cl.dropdown__condition}
                        key={brand.id}
                        onClick={() => device.setSelectedBrand(brand)}
                    >
                        {brand.name}
                    </Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown>

    );
});

export default BrandBar;