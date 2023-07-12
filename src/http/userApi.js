import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode"

export const login = async (email, password) => {
    const {data} = await $host.post('http://localhost:9000/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}