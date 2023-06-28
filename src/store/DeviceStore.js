import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Мышь'},
            {id: 2, name: 'Клавиатура'},
            {id: 3, name: 'Принтер'},
            {id: 4, name: 'Монитор'},
            {id: 5, name: 'Наушники'},
            {id: 6, name: 'Ноутбук'},
        ]

        this._conditions = [
            {id: 1, name: 'Новый'},
            {id: 2, name: 'Б/У'},
            {id: 3, name: 'Брак'},
        ]

        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'LG'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Asus'},
            {id: 5, name: 'Aser'},

        ]

        this._devices = [
            {id: 1, name: '25BK550Y', SN: '910NTGY2X975', condition_id: 'Б/У'},
            {id: 2, name: 'UX310U', SN: 'J5N0CV06W555209', condition_id: 'неисправное'},
            {id: 3, name: 'ZBook G5', SN: '5CG9290M8M', condition_id: 'новое'},
            {id: 1, name: '25BK550Y', SN: '910NTGY2X975', condition_id: 'Б/У'},
            {id: 2, name: 'UX310U', SN: 'J5N0CV06W555209', condition_id: 'неисправное'},
            {id: 3, name: 'ZBook G5', SN: '5CG9290M8M', condition_id: 'новое'},
        ]

        this._selectedType = {}
        this._selectedBrand = {}
        this._selectedCondition = {}
        this._orders = []
        this._page = 1
        this._totalCount = 0
        this._limit = 3
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

    setOrders(order) {
        this._orders = order
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }

    setSelectedCondition(condition) {
        this._selectedCondition = condition
    }

    setConditions(conditions) {
        this._conditions = conditions
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
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

    get orders() {
        return this._orders
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }

    get selectedCondition() {
        return this._selectedCondition
    }

    get conditions() {
        return this._conditions
    }

    get totalCount() {
        return this._totalCount
    }

    get page() {
        return this._page
    }

    get limit() {
        return this._limit
    }

}