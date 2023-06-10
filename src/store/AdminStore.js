import {makeAutoObservable} from "mobx";

export default class AdminStore {
    constructor() {
        this._isAuth = true

        this._admin = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setAdmin(admin) {
        this._admin = admin
    }

    get isAuth() {
        return this._isAuth
    }

    get admin() {
        return this._admin
    }

}