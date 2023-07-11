import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import cl from './BrandBar.module.css'
import {Dropdown} from "react-bootstrap";
import {fetchBrands} from "../../http/deviceAPI";
import Form from "react-bootstrap/Form";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchBrands().then(data => device.setBrands(data))
    }, [])

    return (
        <Form>
            <Dropdown className={cl.dropdown}>
                <Dropdown.Toggle className={cl.dropdown_btn}>
                    {device.selectedBrand.name || 'БРЕНД'}
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
        </Form>


    );
});

export default BrandBar;