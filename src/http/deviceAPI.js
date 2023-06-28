import {$authHost, $host} from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async (typeId, brandId, conditionId, page, limit = 3) => {
    const {data} = await $host.get('api/device', {
        params: {
            typeId, brandId, conditionId, page, limit
        }
    })
    return data
}
export const fetchOneDevices = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}

export const createCondition = async (condition) => {
    const {data} = await $authHost.post('api/condition', condition)
    return data
}

export const fetchConditions = async () => {
    const {data} = await $host.get('api/condition')
    return data
}

export const addOrder = async (orderId) => {
    const {response} = await $authHost.post('api/order', orderId)
    return response
}

export const getOrder = async () => {
    const {data} = await $authHost.get('api/order')
    return data
}