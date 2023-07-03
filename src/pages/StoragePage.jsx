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
                <div className={cl.nav__stor_page}>
                    <NavbarStorage/>
                    <hr style={{color: "darkgray"}}/>
                </div>
                <div className={cl.menu__stor_page}>
                    <MenuList/>
                </div>
                <form className={cl.form__stor_page}>
                    <div className={cl.form__menu}>
                        <StorageMenu/>
                        <DevicesPage/>
                    </div>
                    {/*<div className={cl.form__device}>*/}
                    {/*    <DevicesPage/>*/}
                    {/*</div>*/}
                </form>

            </div>
        </div>

    );
});

export default StoragePage;