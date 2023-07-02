import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Container, Dropdown} from "react-bootstrap";
import {Context} from "../../index";
import cl from './DepartmentBar.module.css'


const DepartmentBar = observer(() => {
    const {user} = useContext(Context)

    return (
   <Container  style={{display: "flex", flexDirection: "column"}}>
            <Dropdown className={cl.dropdown_container}>
                <Dropdown.Toggle
                    className={cl.dropdown_btn}>{user.selectedDepartment.name || 'Выберите отдел'}</Dropdown.Toggle>
                <Dropdown.Menu className={cl.dropdown_content}>
                    {user.departments.map(department =>
                        <Dropdown.Item
                            onClick={() => user.setSelectedDepartment(department)}
                            key={user.id}
                        >
                            {department.name}
                        </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className={cl.dropdown_container}>
                <Dropdown.Toggle
                    className={cl.dropdown_btn}>{user.selectedJob.name || 'Выберите должность'}</Dropdown.Toggle>
                <Dropdown.Menu className={cl.dropdown_content}>
                    {user.jobs.map(job =>
                        <Dropdown.Item
                            key={job.id}
                            onClick={() => user.setSelectedJob(job)}
                        >
                            {job.name}
                        </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
        </Container>

        // <Container className={cl.container__department_bar}>
        //     {user.departments.map(department =>
        //         <Card className={cl.card__department_bar}
        //             key={department.id}
        //             onClick={() => user.setSelectedDepartment(department)}
        //         >
        //             {department.name}
        //         </Card>
        //     )}
        // </Container>
    )
        ;
});

export default DepartmentBar;