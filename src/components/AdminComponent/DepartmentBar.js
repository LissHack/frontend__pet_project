import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Card, Container} from "react-bootstrap";
import {Context} from "../../index";
import cl from './DepartmentBar.module.css'


const DepartmentBar = observer(() => {
    const {user} = useContext(Context)

    return (
        <Container className={cl.container__department_bar}>
            {user.departments.map(department =>
                <Card className={cl.card__department_bar}
                    key={department.id}
                    onClick={() => user.setSelectedDepartment(department)}
                >
                    {department.name}
                </Card>
            )}
        </Container>
    );
});

export default DepartmentBar;