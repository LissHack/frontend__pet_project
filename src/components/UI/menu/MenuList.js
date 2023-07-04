import React from 'react';
import cl from './MenuList.module.css'

const MenuList = () => {
    return (
        <div className={cl.menu}>
            <div className={cl.menu_content}>
                <a href="#">Home</a>
                <a href="#">Chat</a>
                <a href="#">Order</a>
                <a href="#">Orders</a>

                <span/>
            </div>
        </div>
    );
};

export default MenuList;