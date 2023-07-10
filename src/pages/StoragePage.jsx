import React from 'react';
import StorageMenu from "../components/DeviceComponent/StorageMenu";
import {observer} from "mobx-react-lite";
import MenuList from "../components/UI/menu/MenuList";
import DevicesPage from "./DevicesPage";
import cl from './StoragePage.module.css'
import NavbarStorage from "../components/UI/Navbar/NavbarStorage";


const StoragePage = observer(() => {

    return (
        <div className={cl.container__stor_page}>
            <div className={cl.content__stor_page}>
                <div className={cl.navbar}>
                    <StorageMenu/>
                    <NavbarStorage/>
                </div>
                <hr className={cl.hr}/>
                <div className={cl.menu__stor_page}>
                    <MenuList/>
                </div>
                <div className={cl.form__menu}>
                    <DevicesPage/>
                </div>
            </div>
        </div>

    );
});

export default StoragePage;