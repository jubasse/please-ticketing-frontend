import { BaseApi } from "../base-api"

const usersApi = new BaseApi('http://ticketing.dev:8080/users/');

export const userSignUp = async (username: string, email: string, password: string) => {
    return usersApi.post('', { username, email, password }).then((...args) => console.log(args));
}

export const getUsers = async () => {
    return usersApi.get();
}

export const getUser = async (id: string) => {
    return usersApi.get(id);
}

export const deleteUser = async (id: string) => {
    return usersApi.delete(id);
} 
