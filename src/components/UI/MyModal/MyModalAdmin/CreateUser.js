import React, {useContext, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import cl from "../MyModal.module.css";
import Form from "react-bootstrap/Form";
import {Card, Dropdown} from "react-bootstrap";
import MyButton from "../../MyButton/MyButton";
import {Context} from "../../../../index";

const CreateUser = ({show, onHide}) => {
    const {user} = useContext(Context)
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')


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


                    <Dropdown>
                        <Dropdown.Toggle
                            className={cl.modal__dropdown_btn}>{user.selectedJob.name || 'Работа'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {user.jobs.map(job =>
                                <Dropdown.Item
                                    onClick={() => user.setSelectedJob(job)}
                                    key={user.id}>
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
                                    key={user.id}>
                                    {department.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <div className={cl.modal__btn}>
                        <MyButton onClick={onHide}>Закрыть</MyButton>
                    </div>
                </Card>
            </Form>

        </Modal>
    )
        ;
};

export default CreateUser;