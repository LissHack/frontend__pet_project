import {$authHost, $host} from "./index";


export const createDepartment = async (department) => {
    const {data} = await $authHost.post('http://localhost:8081/department', department)
    return data
}

export const fetchDepartments = async () => {
    const {data} = await $host.get('http://localhost:8081/department')
    return data
}

export const createJob = async (job) => {
    const {data} = await $authHost.post('http://localhost:8083/job', job)
    return data
}

export const fetchJobs = async () => {
    const {data} = await $host.get('http://localhost:8083/job')
    return data
}

export const createUser = async (job) => {
    const {data} = await $authHost.post('http://localhost:8085/user', job)
    return data
}

export const fetchUsers = async (job_id, department_id) => {
    const {data} = await $host.get('http://localhost:8085/user',{
        params: {
            job_id, department_id
        }
    })
    return data
}

