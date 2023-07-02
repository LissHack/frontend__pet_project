import React from 'react';
import {Card, Container} from "react-bootstrap";
import DeviceList from "../components/DeviceComponent/DeviceList";

const DevicesPage = () => {
    return (
        <Container>
            <Card>
                <DeviceList/>
            </Card>
        </Container>
    );
};

export default DevicesPage;