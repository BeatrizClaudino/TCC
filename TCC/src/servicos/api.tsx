import axios from 'axios'
import { User } from '../interface/interfaceUsuario'

//Criando a const que guarda a base da URL
export const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
})

export async function cadastrar(user:User) {
    api.post('/cadastro/', {
        senha: user.senha,
        nome: user.nome,
        email: user.email
    }).then(resp => console.log(user)
    );
}

export async function login(){
    api.post('/login/',{
        
    })
}
