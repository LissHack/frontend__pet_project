import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Мышь'},
            {id: 2, name: 'Клавиатура'},
            {id: 3, name: 'Принтер'},
            {id: 4, name: 'Монитор'},

            {id: 5, name: 'Принтер'},
            {id: 6, name: 'Монитор'},


        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'LG'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Asus'},
        ]
        this._devices = [
            {id: 1, name: '25BK550Y', SN: '910NTGY2X975', state: 'Б/У'},
            {id: 2, name: 'UX310U', SN: 'J5N0CV06W555209', state: 'неисправное'},
            {id: 3, name: 'ZBook G5', SN: '5CG9290M8M', state: 'новое'},
        {id: 1, name: '25BK550Y', SN: '910NTGY2X975', state: 'Б/У'},
            {id: 2, name: 'UX310U', SN: 'J5N0CV06W555209', state: 'неисправное'},
            {id: 3, name: 'ZBook G5', SN: '5CG9290M8M', state: 'новое'},


        ]
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

}