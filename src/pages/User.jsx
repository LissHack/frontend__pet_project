import React from 'react';
import NavbarUser from "../components/UI/Navbar/NavbarUser";
import UserProfile from "../components/UserProfile";

const User = () => {
    return (
        <div>
            <NavbarUser/>
            <UserProfile/>
        </div>
    );
};

export default User;