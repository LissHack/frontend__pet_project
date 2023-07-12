import {$authHost, $host} from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('http://localhost:8082/itactive/api/v1/kinds', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('http://localhost:8082/itactive/api/v1/kinds')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('http://localhost:8082/itactive/api/v1/producers', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('http://localhost:8082/itactive/api/v1/producers')
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('http://localhost:8082/itactive/api/v1/actives', device)
    return data
}

export const fetchDevices = async (typeId, brandId, conditionId, page, limit = 3) => {
    const {data} = await $host.get('http://localhost:8082/itactive/api/v1/actives', {
        params: {
            typeId, brandId, conditionId, page, limit
        }
    })
    return data
}
export const fetchOneDevices = async (id) => {
    const {data} = await $host.get('http://localhost:8082/itactive/api/v1/actives/' + id)
    return data
}

export const createCondition = async (condition) => {
    const {data} = await $authHost.post('http://localhost:8082/itactive/api/v1/condition', condition)
    return data
}

export const fetchConditions = async () => {
    const {data} = await $host.get('http://localhost:8082/itactive/api/v1/condition')
    return data
}

export const addOrder = async (orderId) => {
    const {response} = await $authHost.post('http://localhost:8082/itactive/api/v1/order', orderId)
    return response
}

export const getOrder = async () => {
    const {data} = await $authHost.get('http://localhost:8082/itactive/api/v1/order')
    return data
}