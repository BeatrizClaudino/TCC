import axios from 'axios'
import { User } from '../interface/interfaceUsuario'

//Criando a const que guarda a base da URL
export const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
})

export function cadastrar(user:User) {
    return api.post('/cadastrar', user);
}
