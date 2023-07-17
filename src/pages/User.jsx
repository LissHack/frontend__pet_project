import React from 'react';
import NavbarUser from "../components/UI/Navbar/NavbarUser";
import UserProfile from "../components/UserProfile";
import MenuListUser from "../components/menu/MenuListUser";

const User = () => {
    return (
        <div>
            <NavbarUser/>
            <MenuListUser/>
            <UserProfile/>
        </div>
    );
};

export default User;