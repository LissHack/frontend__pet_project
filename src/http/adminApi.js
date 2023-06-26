import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode"


export const createDepartment = async (department) => {
    const {data} = await $authHost.post('api/department', department)
    return data
}

export const fetchDepartment = async () => {
    const {data} = await $host.get('api/department')
    return data
}