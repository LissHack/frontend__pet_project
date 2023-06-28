// создать новый заказ
import {$authHost} from "./index";

export const storageCreate = async (body) => {
    const { data } = await $authHost.post('order/admin/create', body)
    return data
}
// получить список всех заказов магазина
export const storageGetAll = async () => {
    const { data } = await $authHost.get('order/admin/getall')
    return data
}
// получить список заказов пользователя
export const storageGetUser = async (id) => {
    const { data } = await $authHost.get(`order/admin/getall/user/${id}`)
    return data
}
// получить заказ по id
export const storageGetOne = async (id) => {
    const { data } = await $authHost.get(`order/admin/getone/${id}`)
    return data
}
// удалить заказ по id
export const storageDelete = async (id) => {
    const { data } = await $authHost.delete(`order/admin/delete/${id}`)
    return data
}

/*
 * для авторизованного пользователя
 */

// создать новый заказ
export const userCreate = async (body) => {
    const { data } = await $authHost.post('order/user/create', body)
    return data
}
// получить список всех заказов пользователя
export const userGetAll = async () => {
    const { data } = await $authHost.get('order/user/getall')
    return data
}
// получить один заказ пользователя
export const userGetOne = async (id) => {
    const { data } = await $authHost.get(`order/user/getone/${id}`)
    return data
}
