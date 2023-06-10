import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import NavbarStorage from "../../components/UI/Navbar/NavbarStorage";
import TypeBar from "../../components/TypeBar";

const DevicePage = () => {
    return (
        <div>
            <NavbarStorage/>
            <Container>
                <Row>
                    <Col md={3}>
                        <TypeBar/>
                    </Col>
                    <Col md={3}>

                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default DevicePage;