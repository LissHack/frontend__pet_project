import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._users = [
            {
                id: 1,
                name: 'Иван',
                lastname: 'Иванов',
                middlename: 'Иванович',
                grade: 1,
                email: 'ivanov@email.com',
                role: 'Admin'
            },
            {
                id: 2,
                name: 'Петр',
                lastname: 'Петров',
                middlename: 'Петрович',
                grade: 3,
                email: 'petrov@email.com',
                role: 'Storage'
            },
            {
                id: 3,
                name: 'Клим',
                lastname: 'Пупкин',
                middlename: 'Александрович',
                grade: 2,
                email: 'pupkin@email.com',
                role: 'User'
            },
            {
                id: 4,
                name: 'Алексей',
                lastname: 'Сидоров',
                middlename: 'Сергеевич',
                grade: 1,
                email: 'sidorov@email.com',
                role: 'User'
            },

        ]

        this._jobs = [
            {id: 1, name: 'Водитель'},
            {id: 2, name: 'Кладовщик'},
            {id: 3, name: 'Мастер участка'},
            {id: 4, name: 'Инженер по программированию'},
            {id: 5, name: 'Инженет технолог'},

        ]

        this._departments = [
            {id: 1, name: 'Транспортный цех'},
            {id: 2, name: 'Инструментальный цех'},
            {id: 3, name: 'Модельный цех'},
            {id: 3, name: 'Инженерный цех'},
        ]
        this._isAuth = true
        this._isAdmin = true
        this._isStorage = true
        this._selectedDepartment = {}
        this._selectedJob = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUsers(users) {
        this._users = users
    }

    setIsAdmin(admin) {
        this._isAdmin = admin
    }

    setIsStorage(storage) {
        this._isStorage = storage
    }

    setDepartments(departments) {
        this._departments = departments
    }

    setJobs(jobs) {
        this._jobs = jobs
    }

    setSelectedDepartment(department) {
        this._selectedDepartment = department
    }

    setSelectedJob(job) {
        this._selectedJob = job
    }


    get isAuth() {
        return this._isAuth
    }

    get users() {
        return this._users
    }

    get isAdmin() {
        return this._isAdmin
    }

    get isStorage() {
        return this._isStorage
    }

    get departments() {
        return this._departments
    }

    get jobs() {
        return this._jobs
    }

    get selectedDepartment() {
        return this._selectedDepartment
    }

    get selectedJob() {
        return this._selectedJob
    }

}