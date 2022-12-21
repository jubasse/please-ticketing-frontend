import { BaseApi } from "../base-api"

const authApi = new BaseApi('http://ticketing.dev:8080/api/auth/');

export const authSignIn = async (email: string, password: string) => {
    return authApi.post('signIn', { email, password });
}