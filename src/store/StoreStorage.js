import {makeAutoObservable} from "mobx";

export default class StoreStorage {
    constructor() {
        this._isAuth = true
        this._storage = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setStorage(storage) {
        this._storage = storage
    }

    get isAuth() {
        return this._isAuth
    }

    get storage() {
        return this._storage
    }
}