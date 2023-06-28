import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import cl from "../MyModal.module.css";
import Form from "react-bootstrap/Form";
import {Card, Dropdown} from "react-bootstrap";
import MyButton from "../../MyButton/MyButton";
import {Context} from "../../../../index";
import {createUser, fetchDepartments, fetchJobs} from "../../../../http/adminApi";

const CreateUser = ({show, onHide}) => {
    const {user} = useContext(Context)
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [middlename, setMiddlename] = useState('')
    const [grade, setGrade] = useState(1)
    const [email, setEmail] = useState('')


    useEffect(() => {
        fetchDepartments().then(data => user.setDepartments(data))
        fetchJobs().then(data => user.setJobs(data))
    }, [])

    const addUser = () => {
        const formData = new FormData()
        try {
            formData.append('name', name)
            formData.append('lastname', lastname)
            formData.append('middlename', middlename)
            formData.append('grade', grade)
            formData.append('email', email)
            formData.append('JobId', user.selectedJob.id)
            formData.append('DepartmentId', user.selectedDepartment.id)
            createUser(formData).then(data => onHide())
        } catch (e) {
            alert(e)
        }
    }

    return (
        <Modal className={cl.container__modal}
               show={show}
               onHide={onHide}
               size="lg"
               centered
        >
            <Form className={cl.modal}>
                <Card className={cl.content__modal}>
                    <h3>Добавить работника</h3>
                    <Form.Control
                        className={cl.modal__input}
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Введите имя"
                    />
                    <Form.Control
                        className={cl.modal__input}
                        value={lastname}
                        onChange={e => setLastname(e.target.value)}
                        placeholder="Введите фамилию"
                    />
                    <Form.Control
                        className={cl.modal__input}
                        value={middlename}
                        onChange={e => setMiddlename(e.target.value)}
                        placeholder="Введите отчество"
                    />
                    <Form.Control
                        className={cl.modal__input}
                        value={grade}
                        onChange={e => setGrade(Number(e.target.value))}
                        placeholder="Введите ранг"
                        type="number"
                    />
                    <Form.Control
                        className={cl.modal__input}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Введите почту"
                        type='email'
                    />

                    <Dropdown className={cl.modal__dropdown}>
                        <Dropdown.Toggle
                            className={cl.modal__dropdown_btn}>{user.selectedJob.name || 'Работа'}</Dropdown.Toggle>
                        <Dropdown.Menu className={cl.modal__dropdown_content}>
                            {user.jobs.map(job =>
                                <Dropdown.Item
                                    onClick={() => user.setSelectedJob(job)}
                                    key={user.id}
                                >
                                    {job.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle
                            className={cl.modal__dropdown_btn}>{user.selectedDepartment.name || 'Выберите должность'}</Dropdown.Toggle>
                        <Dropdown.Menu>
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
                    <div className={cl.modal__btn}>
                        <MyButton onClick={onHide}>Закрыть</MyButton>
                        <MyButton onClick={addUser}>Добавить</MyButton>
                    </div>
                </Card>
            </Form>

        </Modal>
    )
        ;
};

export default CreateUser;