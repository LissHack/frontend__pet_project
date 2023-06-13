import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._users = [
            {id: 1, name: 'Иван', lastname: 'Иванов', secondname: 'Иванович', email: 'ivanov@email.com', password: ''},
            {id: 2, name: 'Петр', lastname: 'Петров', secondname: 'Петрович', email: 'petrov@email.com', password: ''},
            {
                id: 3,
                name: 'Клим',
                lastname: 'Пупкин',
                secondname: 'Александрович',
                email: 'pupkin@email.com',
                password: ''
            },
            {id: 4, name: 'Алексей', lastname: 'Сидоров', secondname: 'Сергеевич', email: 'sidorov@email.com', password: ''},

        ]

        this._departments = [
            {id: 1, name: 'Водитель'},
            {id: 2, name: 'Кладовщик'},
            {id: 3, name: 'Мастер участка'},
            {id: 4, name: 'Инженер по программированию'},
            {id: 5, name: 'Инженет технолог'},

        ]

        this._positions = [
            {id: 1, name: 'Транспортный цех'},
            {id: 2, name: 'Инструментальный цех'},
            {id: 3, name: 'Модельный цех'},
            {id: 3, name: 'Инженерный цех'},
        ]
        this._isAuth = true
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUsers(user) {
        this._user = user
    }

    setDepartments(departments) {
        this._departments = departments
    }

    setPositions(positions) {
        this._positions = positions
    }


    get isAuth() {
        return this._isAuth
    }

    get users() {
        return this._users
    }

    get departments() {
        return this._departments
    }

    get positions() {
        return this._positions
    }

}