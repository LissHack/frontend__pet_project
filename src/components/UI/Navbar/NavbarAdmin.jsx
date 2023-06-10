import React, {useContext} from 'react';
import {Context} from "../../../index";
import {useNavigate} from "react-router-dom";

import {ADMIN_ROUTE, LOGIN_ROUTE} from "../../../utils/consts";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";

const NavbarAdmin = () => {
    const {admin} = useContext(Context)
    const navigate = useNavigate()

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                {admin.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={'outline-light'}
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant={'outline-light'}
                            onClick={() => navigate(LOGIN_ROUTE)}
                            className="ml-2"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={'outline-light'} onClick={() => admin.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
};

export default NavbarAdmin;