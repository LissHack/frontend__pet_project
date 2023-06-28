import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode"


export const createDepartment = async (department) => {
    const {data} = await $authHost.post('api/department', department)
    return data
}

export const fetchDepartments = async () => {
    const {data} = await $host.get('api/department')
    return data
}

export const createJob = async (job) => {
    const {data} = await $authHost.post('api/job', job)
    return data
}

export const fetchJobs = async () => {
    const {data} = await $host.get('api/job')
    return data
}

export const createUser = async (job) => {
    const {data} = await $authHost.post('api/job', job)
    return data
}

export const fetchUser = async () => {
    const {data} = await $host.get('api/job')
    return data
}

