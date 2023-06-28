import {$authHost, $host} from "./index";


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
    const {data} = await $authHost.post('api/user', job)
    return data
}

export const fetchUsers = async (job_id, department_id) => {
    const {data} = await $host.get('api/user',{
        params: {
            job_id, department_id
        }
    })
    return data
}

